import { useState, useEffect } from "react";
import Mensaje from "./Mensaje";
import Cerrar from "../img/cerrar.svg";

function Modal({
  setModal,
  animarModal,
  setAnimarModal,
  guardadGasto,
  GastoEditar,
  setGastoEditar
}) {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [id, setId] = useState("");

useEffect(() => {
  if(Object.keys(GastoEditar).length > 0){
    console.log('edit')
    setNombre(GastoEditar.nombre)
    setCantidad(GastoEditar.cantidad)
    setCategoria(GastoEditar.categoria)
    setId(GastoEditar.id)
  }
}, [])


  const ocultarModal = () => {
    setAnimarModal(false);
    setGastoEditar({})
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");

      setTimeout(() => {
        setMensaje("");
      }, 2500);
      return;
    }

    guardadGasto({ nombre, cantidad, categoria, id });
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img onClick={ocultarModal} src={Cerrar} alt="Cerrar" />
      </div>
      <form
        onSubmit={handleSubmit}
        action=""
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>{GastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el nombre del gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Añade la cantidad del gasto"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Selecione</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="salud">Salud</option>
            <option value="subscripciones">Subscripciones</option>
            <option value="ocio">Ocio</option>
            <option value="gastosVarios">Gastos Varios</option>
          </select>
        </div>
        <input type="submit" value={GastoEditar.nombre ? 'Guardar cambios' : 'Añadir Gasto'} />
      </form>
    </div>
  );
}

export default Modal;
