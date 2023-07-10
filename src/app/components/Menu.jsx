import React from 'react';

const Menu = () => {
    return (      <nav>
        <img
          className="logo"
          src="https://e1.pxfuel.com/desktop-wallpaper/853/686/desktop-wallpaper-black-circle-round-logo.jpg"
          alt=""
          width="40"
          height="40"
        />
        <ul>
          <li>
            <a class="clicked" aria-current="page" href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Sobre nosotros</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
    );
};

export default Menu;