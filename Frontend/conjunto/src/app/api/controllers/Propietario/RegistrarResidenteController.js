const { Residente, Propietario } = require('../../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const registrarResidente = async (req, res) => {
    const { email, nombre, apellido, cc, relacion, propietarioId, contraseña, confirmarContraseña } = req.body;

    try {
        // Validar que las contraseñas coincidan
        if (contraseña !== confirmarContraseña) {
            return res.status(400).json({ error: 'Las contraseñas no coinciden.' });
        }

        // Buscar el propietario usando el propietarioId (extraído del token en el frontend)
        const propietario = await Propietario.findByPk(propietarioId);
        if (!propietario) {
            return res.status(404).json({ error: 'No se encontró el propietario con el ID proporcionado.' });
        }

        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(contraseña, 10);

        // Registrar al residente con los datos recibidos y valores predeterminados para teléfono y sexo
        const nuevoResidente = await Residente.create({
            email,
            nombre,
            apellido,
            cc,
            relacion,
            propietarioId,
            contraseña: hashedPassword,
            telefono: "0000000000", // Valor predeterminado para teléfono
            sexo: "otro" // Valor predeterminado para sexo
        });

        // Generar un token de verificación para el residente
        const token = jwt.sign({ id: nuevoResidente.idResidente }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Configurar el envío de correo de verificación
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Confirma tu correo electrónico',
            // Se envía el token en la URL para que el residente lo verifique
            html: `<a href="${process.env.FRONTEND_URL}/publico/iniciarSesion?token=${token}">Verifica tu cuenta</a>`,
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({ message: 'Residente registrado. Verifica tu correo.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al registrar el residente', details: error.message });
    }
};

const verificarCorreoResidente = async (req, res) => {
    const { token } = req.params;

    try {
        // Verificar y decodificar el token de verificación
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Se espera que el token contenga el campo "id" correspondiente al idResidente
        const residente = await Residente.findByPk(decoded.id);

        if (!residente) {
            return res.status(404).json({ error: 'Residente no encontrado.' });
        }

        // Actualizar el estado de verificación del residente (se asume que existe el campo isVerified en el modelo)
        residente.isVerified = true;
        await residente.save();

        res.status(200).json({ message: 'Correo verificado exitosamente.' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Token inválido o expirado.' });
    }
};

module.exports = {
    registrarResidente,
    verificarCorreoResidente
};
