/* este es el componete de menu principal donde se elige deacuerdo al rol que conponete de menu mostrar */

import { useState, useEffect } from 'react';
import SidebarAdmi from '../../components/menu/MenuAdmi';
import SidebarPropietario from '../../components/menu/MenuPropietario';
import SidebarResidente from '../../components/menu/MenuResidente';


const Menu = () => {
    const [rol, setRol] = useState('admi'); // Rol por defecto
    const [componente, setComponente] = useState(null);

    useEffect(() => {
        switch (rol) {
            case 'admi':
                setComponente(<SidebarAdmi/>);
                break;
            case 'propietario':
                setComponente(<SidebarPropietario/>);
                break;
            default:
                setComponente(<SidebarResidente/>);
                break;
        }
    }, [rol]);

    return (
        <div>
            {componente}
        </div>
    );
};

export default Menu;