// App.js
import React, { useState } from "react";
import Menu from "./components/Menu_principal/Funcionamiento/Menu";
import DraggableWindow from "./components/ventanas_arrastables/Funcionamiento/DraggableWindow";
import EstadisticasVentas from "./components/ventanas_arrastables/EstadisticasVentas";
import SeguimientosVentas from "./components/ventanas_arrastables/SeguimientosVentas";
import CrearNuevaFacturas from "./components/ventanas_arrastables/CrearNuevaFacturas";

const App = () => {
  const [openWindows, setOpenWindows] = useState([]);

  const handleCheckboxChange = (isChecked, title) => {
    if (isChecked) {
      setOpenWindows((prevWindows) => {
        if (!prevWindows.find((window) => window.title === title)) {
          return [...prevWindows, { title }];
        }
        return prevWindows;
      });
    } else {
      setOpenWindows((prevWindows) =>
        prevWindows.filter((window) => window.title !== title)
      );
    }
  };

  const handleCloseWindow = (title) => {
    setOpenWindows((prevWindows) =>
      prevWindows.filter((window) => window.title !== title)
    );
  };

  return (
    <div className="app">
      <Menu handleCheckboxChange={handleCheckboxChange} />
      {openWindows.map((window) => (
        <DraggableWindow
          key={window.title}
          title={window.title}
          onClose={() => handleCloseWindow(window.title)}
        >
          {/* Pasa el contenido correcto según el título de la ventana */}
          {window.title === "Visualización de estadísticas de ventas" && (
            <EstadisticasVentas handleCheckboxChange={handleCheckboxChange} />
          )}
          {window.title === "Seguimiento de tendencias de ventas" && (
            <SeguimientosVentas handleCheckboxChange={handleCheckboxChange} />
          )}
          {window.title === "Crear nueva factura" && (
            <CrearNuevaFacturas handleCheckboxChange={handleCheckboxChange} />
          )}
        </DraggableWindow>
      ))}
    </div>
  );
};

export default App;
