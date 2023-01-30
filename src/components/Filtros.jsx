import { useState, useEffect } from "react";
function Filtros({ filtro, setFiltro }) {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label htmlFor="">Filtrar gastos</label>
          <select onChange={e => setFiltro(e.target.value)} value={filtro}>
            <option value="">Todas las categorias</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="salud">Salud</option>
            <option value="subscripciones">Subscripciones</option>
            <option value="ocio">Ocio</option>
            <option value="gastosVarios">Gastos Varios</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Filtros;
