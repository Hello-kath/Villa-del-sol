import { useState, useEffect } from 'react';
import SidebarAdmi from '../../components/menu/MenuAdmi';
import SidebarPropietario from '../../components/menu/MenuPropietario';
import SidebarResidente from '../../components/menu/MenuResidente';

const Menu = () => {
    const [rol, setRol] = useState(null);
    const [componente, setComponente] = useState(null);

    useEffect(() => {
        // Recuperar el rol del token almacenado en localStorage después del login
        const token = localStorage.getItem('token');
        
        if (token) {
            try {
                // Decodificar el token para obtener la información del usuario
                const tokenPayload = JSON.parse(atob(token.split('.')[1]));
                
                // Establecer el rol desde el payload del token
                const rolUsuario = tokenPayload.rol.toLowerCase();
                setRol(rolUsuario);
            } catch (error) {
                console.error('Error al decodificar el token:', error);
                // Manejar caso de token inválido
                setRol('residente'); // Rol por defecto
            }
        }
    }, []);

    useEffect(() => {
        // Renderizar componente según el rol
        switch (rol) {
            case 'administrador':
                setComponente(<SidebarAdmi/>);
                break;
            case 'propietario':
                setComponente(<SidebarPropietario/>);
                break;
            case 'residente':
                setComponente(<SidebarResidente/>);
                break;
            default:
                setComponente(<SidebarResidente/>); // Componente por defecto
        }
    }, [rol]);

    // Si no hay token o rol, puedes mostrar un componente de carga
    if (!rol) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            {componente}
        </div>
    );
};

export default Menu;