// SubMenuVentas.js
import React from "react";
import SubMenuItem from "./Funcionamiento/SubMenuItem";

const SubMenuVentas = ({ handleCheckboxChange }) => {
  return (
    <div className="sub-menu">
      <SubMenuItem
        label="Visualización de estadísticas de ventas"
        handleCheckboxChange={handleCheckboxChange}
      />
      <SubMenuItem
        label="Seguimiento de tendencias de ventas"
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
};

export default SubMenuVentas;
