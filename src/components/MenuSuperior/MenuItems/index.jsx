import React from 'react';
import { NavLink } from 'react-router-dom';
import data from './data';

const MenuItems = () => {
    return (
        <>
            {data.map(x => (
                <NavLink
                    key={x.name}
                    name={x.name}
                    className="link"
                    to={x.to}
                    as={NavLink}
                    activeClassName="active"
                >
                    {x.titulo}
                </NavLink>
            ))}
        </>
    )
}

export default MenuItems;
