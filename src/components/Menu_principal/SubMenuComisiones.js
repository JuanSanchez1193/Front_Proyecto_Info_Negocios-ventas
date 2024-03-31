// SubMenuComisiones.js
import React from 'react';

const SubMenuComisiones = () => {
  return (
    <div className="sub-menu">
      <label>
        <input type="checkbox" />
        Registro de vendedores y comisiones asociadas
      </label>
      <label>
        <input type="checkbox" />
        Cálculo automático de comisiones por venta
      </label>
      <label>
        <input type="checkbox" />
        Visualización de comisiones acumuladas por vendedor
      </label>
      <label>
        <input type="checkbox" />
        Reportes de comisiones pagadas y pendientes
      </label>
    </div>
  );
};

export default SubMenuComisiones;
