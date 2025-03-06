const { Administrador } = require('../../models');
const bcrypt = require('bcryptjs');

const RegistrarAdmi = async (req, res) => {
    const { nombre, apellido, email, cc, telefono, sexo, contraseña, confirmarContraseña } = req.body;

    // Validar que las contraseñas coincidan
    if (contraseña !== confirmarContraseña) {
        return res.status(400).json({ error: 'Las contraseñas no coinciden.' });
    }

    try {
        // Hashear la contraseña
        const hashedPassword = await bcrypt.hash(contraseña, 10);

        // Crear el administrador en la base de datos
        const nuevoAdministrador = await Administrador.create({
            nombre,
            apellido,
            email,
            cc,
            telefono,
            sexo,
            contraseña: hashedPassword,
            rol: 'Administrador'  // Se fija el rol como 'Administrador'
        });

        // Responder con éxito 
        res.status(201).json({
            mensaje: 'Administrador registrado con éxito.',
            administrador: nuevoAdministrador
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Error al registrar el administrador',
            details: error.message
        });
    }
};

module.exports = { RegistrarAdmi };
