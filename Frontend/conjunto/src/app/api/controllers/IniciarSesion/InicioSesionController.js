const { Administrador, Propietario, Residente } = require('../../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { email, password } = req.body;

    // Validación de entrada
    if (!email || !password) {
        return res.status(400).json({ error: 'Email y contraseña son requeridos' });
    }

    try {
        // Buscar usuario en todas las tablas usando Promise.all para eficiencia
        const [administrador, propietario, residente] = await Promise.all([
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
                // Aseguramos incluir idResidente para el rol "Residente"
                attributes: { include: ['idResidente', 'contraseña'] }
            })
        ]);

        let usuario = null;
        let rol = null;

        // Determinar el usuario y su rol
        if (administrador) {
            usuario = administrador;
            rol = 'Administrador';
        } else if (propietario) {
            usuario = propietario;
            rol = 'Propietario';
        } else if (residente) {
            usuario = residente;
            rol = 'Residente';
        }

        // Verificar si el usuario existe
        if (!usuario) {
            return res.status(404).json({
                error: 'Usuario no encontrado',
                details: 'No se encontró un usuario con este email en ningún rol'
            });
        }

        // Debugging: Imprimir información del usuario
        console.log('Usuario encontrado:', {
            id: rol === "Residente" ? usuario.idResidente : (usuario.idPropietario || usuario.idAdministrador || usuario.id),
            email: usuario.email,
            contraseñaExists: !!usuario.contraseña,
            contraseñaLength: usuario.contraseña ? usuario.contraseña.length : 'N/A'
        });

        // Verificaciones de cuenta
        if (!usuario.contraseña) {
            return res.status(403).json({
                error: 'Cuenta incompleta',
                details: 'El usuario no tiene contraseña registrada'
            });
        }

        // Verificar contraseña
        const passwordValida = await bcrypt.compare(password, usuario.contraseña);
        if (!passwordValida) {
            return res.status(401).json({
                error: 'Credenciales inválidas',
                details: 'La contraseña proporcionada es incorrecta'
            });
        }

        // Generación del token de inicio de sesión
        const token = jwt.sign(
            {
                id: rol === "Administrador"
                    ? usuario.idAdministrador
                    : rol === "Residente"
                        ? usuario.idResidente
                        : usuario.idPropietario,
                email: usuario.email,
                rol: usuario.rol
            },
            process.env.JWT_SECRET,
        );

        // Respuesta de inicio de sesión exitoso
        res.status(200).json({
            mensaje: 'Inicio de sesión exitoso',
            token,
            rol,
            usuario: {
                id: rol === "Residente" ? usuario.idResidente : (usuario.idPropietario || usuario.idAdministrador || usuario.id),
                email: usuario.email,
                rol
            }
        });

    } catch (error) {
        console.error('Error de inicio de sesión:', error);
        res.status(500).json({
            error: 'Error interno del servidor',
            details: error.message
        });
    }
};

module.exports = { login };


