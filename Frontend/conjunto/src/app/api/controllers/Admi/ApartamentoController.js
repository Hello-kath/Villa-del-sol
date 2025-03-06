const { Apartamento } = require('../../models'); 

const RegistrarApt = async (req, res) => {
    const { direccion, numHabitaciones, estado } = req.body;

    // Agrega un log para depurar el cuerpo recibido
    console.log(req.body); 

    // Validación de campos requeridos
    if (!direccion || !numHabitaciones || !estado) {
        return res.status(400).json({
            error: 'Todos los campos son obligatorios: direccion, numHabitaciones, estado'
        });
    }

    try {
        const existeApartamento = await Apartamento.findOne({ where: { direccion } });
        if (existeApartamento) {
            return res.status(400).json({ error: 'La dirección ya está registrada.' });
        }

        // Verificar si el estado es válido
        const validEstado = ['Desocupado', 'En mantenimiento'];
        if (!validEstado.includes(estado)) {
            return res.status(400).json({ error: 'Estado no válido. Debe ser "Desocupado" o "En mantenimiento".' });
        }

        const apartamento = {
            direccion,
            numHabitaciones,
            estado
        };

        await Apartamento.create(apartamento);

        res.status(201).json({ message: 'Apartamento registrado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar el apartamento', details: error.message });
    }
};

module.exports = {
    RegistrarApt
};

