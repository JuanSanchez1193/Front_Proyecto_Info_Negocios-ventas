// Menu.js
import React, { useState } from "react";
import "../../../styles/App.css"
import SubMenuVentas from "../SubMenuVentas";
import SubMenuFacturas from "../SubMenuFacturas"; // Importar el componente SubMenuFacturas
import SubMenuComisiones from "../SubMenuComisiones"

const Menu = ({ handleCheckboxChange }) => {
  const [menuVisible, setMenuVisible] = useState(true);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleSubMenuClick = (subMenu) => {
    setActiveSubMenu(subMenu);
  };

  return (
    <div className={`menu ${menuVisible ? "visible" : "hidden"}`}>
      <p className="menu-title" onClick={toggleMenu}>
        Ventas
      </p>
      <ul className="menu-items">
        <li onClick={() => handleSubMenuClick("facturas")}>🧾 Facturas</li>
        <li onClick={() => handleSubMenuClick("comisiones")}>
          📊 Control de Comisiones
        </li>
        <li onClick={() => handleSubMenuClick("ventas")}>
          📋 Comprobación de Ventas
        </li>
        <li>📜 Histórico de Pedidos</li>
        <li>🧾 Recibos</li>
        <li>🚚 Proveedores</li>
        <li>🛒 Pedidos</li>
      </ul>
      <button onClick={toggleMenu} className="toggle-button">
        {menuVisible ? "◄" : "►"}
      </button>

      {activeSubMenu === "facturas" && (
        <SubMenuFacturas handleCheckboxChange={handleCheckboxChange} />
      )}
      {activeSubMenu === "comisiones" && (
        <SubMenuComisiones handleCheckboxChange={handleCheckboxChange} />
      )}
      {activeSubMenu === "ventas" && (
        <SubMenuVentas handleCheckboxChange={handleCheckboxChange} />
      )}
    </div>
  );
};

export default Menu;
