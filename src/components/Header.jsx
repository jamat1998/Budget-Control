import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from './ControlPresupuesto'
function Header({
  gastos,
  presupuesto,
  setPresupuesto,
  setisValidPresupuesto,
  isValidPresupuesto,
  setGastos
}) {
  return (
    <header>
      <h1>Planificador de gastos</h1>

      {isValidPresupuesto ? (
        <ControlPresupuesto 
        gastos={gastos}
        presupuesto={presupuesto}
        setGastos={setGastos}
        setPresupuesto={setPresupuesto}
        setisValidPresupuesto={setisValidPresupuesto}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setisValidPresupuesto={setisValidPresupuesto}
        />
      )}
    </header>
  );
}

export default Header;
