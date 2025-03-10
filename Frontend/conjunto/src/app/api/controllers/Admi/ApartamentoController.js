const { Apartamento, Propietario } = require('../../models');

//este permite registrar un apartamento
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

//listar los apartamentos existentes
const listarApartamentos = async (req, res) => {
    try {
        const apartamentos = await Apartamento.findAll({
            include: [
                {
                    model: Propietario,
                    as: 'propietario',
                    attributes: ['nombre', 'apellido', 'cc', 'telefono']
                }
            ]
        });
        res.status(200).json({ apartamentos });
    } catch (error) {
        console.error("Error al listar apartamentos:", error);
        res.status(500).json({
            error: "Error interno del servidor",
            details: error.message
        });
    }
};


//editar un apartamento
const editarApartamento = async (req, res) => {
    const { id } = req.params;
    const { direccion, numHabitaciones, estado, idPropietario } = req.body;

    try {
        const apartamento = await Apartamento.findByPk(id);
        if (!apartamento) return res.status(404).json({ error: "Apartamento no encontrado" });

        if (idPropietario) {
            const propietario = await Propietario.findByPk(idPropietario);
            if (!propietario) return res.status(404).json({ error: "Propietario no encontrado" });
            apartamento.idPropietario = idPropietario;
        }

        await apartamento.update({ direccion, numHabitaciones, estado });

        const apartamentoActualizado = await Apartamento.findByPk(id, {
            include: { model: Propietario, as: 'propietario', attributes: ['nombre', 'apellido', 'cc', 'telefono'] }
        });

        res.status(200).json({ mensaje: "Apartamento actualizado", apartamento: apartamentoActualizado });
    } catch (error) {
        console.error("Error al editar el apartamento:", error);
        res.status(500).json({ error: "Error interno del servidor", details: error.message });
    }
};


// eliminar un apartamento
const eliminarApartamento = async (req, res) => {
    const { id } = req.params;

    try {
        const apartamento = await Apartamento.findByPk(id);
        if (!apartamento) return res.status(404).json({ error: "Apartamento no encontrado" });

        await apartamento.destroy();

        res.status(200).json({ mensaje: "Apartamento eliminado" });
    } catch (error) {
        console.error("Error al eliminar el apartamento:", error);
        res.status(500).json({ error: "Error interno del servidor", details: error.message });
    }
};

module.exports = {
    RegistrarApt,
    listarApartamentos,
    editarApartamento,
    eliminarApartamento
};

