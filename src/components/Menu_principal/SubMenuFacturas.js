// SubMenuFacturas.js
import React from "react";
import SubMenuItem from "./Funcionamiento/SubMenuItem";

const SubMenuFacturas = ({ handleCheckboxChange }) => {
  return (
    <div className="sub-menu">
      <SubMenuItem
        label="Crear nueva factura"
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
};

export default SubMenuFacturas;
