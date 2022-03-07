import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Formulario from "./components/Fomulario";
import ListadoPacientes from "./components/ListadoPacientes";
import Paciente from './components/Paciente';

function App() {
  const [ pacientes, setPacientes ] = useState([]);
  const [ paciente, setPaciente ] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes]);
  
  return (
    <div className="container mx-auto mt-20">
        <Header />

        <div className="mt-12 md:flex">
          <Formulario 
            pacientes={ pacientes }
            paciente={ paciente }
            setPacientes={ setPacientes }
            setPaciente = { setPaciente }
          />
          <ListadoPacientes 
            pacientes={ pacientes }
            setPaciente={ setPaciente }
            setPacientes={ setPacientes }
          />
        </div>
    </div>
  );
}

export default App;
