const { Propietario, Apartamento } = require('../../models'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // No olvides importar jwt
const nodemailer = require('nodemailer'); // No olvides importar nodemailer

const registrarPropietario = async (req, res) => {
    const { email, nombre, apellido, cc, direccion, contraseña, confirmarContraseña } = req.body;

    try {
        // Validar que las contraseñas coincidan
        if (contraseña !== confirmarContraseña) {
            return res.status(400).json({ error: 'Las contraseñas no coinciden.' });
        }

        // Buscar apartamento por la dirección
        const apartamento = await Apartamento.findOne({ where: { direccion } });
        if (!apartamento) {
            return res.status(404).json({ error: 'La dirección no coincide con ningún apartamento.' });
        }

        // Verificar si el apartamento ya tiene un idPropietario
        if (apartamento.idPropietario) {
            return res.status(400).json({ error: 'El apartamento ya tiene un propietario registrado.' });
        }

        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(contraseña, 10);

        // Registrar al propietario con valores predeterminados para telefono y sexo
        const nuevoPropietario = await Propietario.create({
            email,
            nombre,
            apellido,
            cc,
            direccionVivienda: direccion,
            contraseña: hashedPassword,
            telefono: "0000000000", // Valor predeterminado para telefono
            sexo: "otro" // Valor predeterminado para sexo
        });

        // Actualizar el apartamento con el idPropietario y cambiar estado a "Ocupado"
        apartamento.idPropietario = nuevoPropietario.idPropietario;
        apartamento.estado = 'Ocupado';
        await apartamento.save();

        // Generar un token para la verificación
        const token = jwt.sign({ id: nuevoPropietario.idPropietario }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Configurar el envío de correo
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
            html: `<a href="${process.env.FRONTEND_URL}/publico/iniciarSesion">Verifica tu cuenta</a>`,
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({ message: 'Propietario registrado. Verifica tu correo.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al registrar el propietario', details: error.message });
    }
};

const verificarCorreo = async (req, res) => {
    const { token } = req.params;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Decodifica el token
        const propietario = await Propietario.findByPk(decoded.id); // Busca al propietario en la BD

        if (!propietario) {
            return res.status(404).json({ error: 'Propietario no encontrado.' });
        }

        propietario.isVerified = true; // Marca como verificado
        await propietario.save();


    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Token inválido o expirado.' });
    }
};

module.exports = {
    registrarPropietario,
    verificarCorreo
};
