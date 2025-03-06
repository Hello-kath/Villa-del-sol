const { Administrador, Propietario, Residente } = require('../../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { email, password } = req.body;

    // Validación 
    if (!email || !password) {
        return res.status(400).json({ error: 'Email y contraseña son requeridos' });
    }

    try {
        // Buscar el usuario en las tres tablas
        const [admin, propietario, residente] = await Promise.all([
            Administrador.findOne({
                where: { email },
                attributes: { include: ['contraseña'] }
            }),
            Propietario.findOne({
                where: { email },
                attributes: { include: ['contraseña'] }
            }),
            Residente.findOne({
                where: { email },
                attributes: { include: ['idResidente', 'contraseña'] }
            })
        ]);

        // Determinar el usuario y su rol
        let usuario = admin || propietario || residente;
        let rol = admin ? 'Administrador' : propietario ? 'Propietario' : residente ? 'Residente' : null;
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        // Verificar la contraseña usando bcrypt
        const passwordValida = await bcrypt.compare(password, usuario.contraseña);
        if (!passwordValida) {
            return res.status(401).json({ error: 'Contraseña incorrecta' });
        }

        // Seleccionar el identificador adecuado según el rol
        const userId =
            rol === 'Administrador'
                ? usuario.idAdministrador
                : rol === 'Residente'
                    ? usuario.idResidente
                    : usuario.idPropietario;

        // Generar el token (con expiración de 8 horas)
        const token = jwt.sign(
            { id: userId, email: usuario.email, rol },
            process.env.JWT_SECRET,
            { expiresIn: '8h' }
        );

        // Responder con el token, rol y datos básicos del usuario
        res.status(200).json({
            mensaje: 'Inicio de sesión exitoso',
            token,
            rol,
            usuario: { id: userId, email: usuario.email, rol }
        });
    } catch (error) {
        console.error('Error de inicio de sesión:', error);
        res.status(500).json({ error: 'Error interno del servidor', details: error.message });
    }
};

module.exports = { login };



