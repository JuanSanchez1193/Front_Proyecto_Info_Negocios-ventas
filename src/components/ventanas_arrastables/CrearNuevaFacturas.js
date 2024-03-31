// CrearNuevaFactura.js
import React, { useState } from "react";

const CrearNuevaFactura = ({ handleCreateInvoice }) => {
  // State para almacenar los detalles de la nueva factura
  const [invoiceDetails, setInvoiceDetails] = useState({
    cliente: "",
    cantidad: 0,
    producto: "",
  });

  // Manejar cambios en los campos de la factura
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoiceDetails({ ...invoiceDetails, [name]: value });
  };

  // Manejar el envío del formulario de creación de factura
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los detalles de la factura al componente padre
    handleCreateInvoice(invoiceDetails);
    // Limpiar los campos después de enviar la factura
    setInvoiceDetails({ cliente: "", cantidad: 0, producto: "" });
  };

  return (
    <div className="sub-menu">
      <h2>Crear Nueva Factura</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cliente">Cliente:</label>
          <input
            type="text"
            id="cliente"
            name="cliente"
            value={invoiceDetails.cliente}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="cantidad">Cantidad:</label>
          <input
            type="number"
            id="cantidad"
            name="cantidad"
            value={invoiceDetails.cantidad}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="producto">Producto:</label>
          <input
            type="text"
            id="producto"
            name="producto"
            value={invoiceDetails.producto}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Crear Factura</button>
      </form>
    </div>
  );
};

export default CrearNuevaFactura;
