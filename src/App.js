
import { useState } from 'react';
import './App.css';
import Schedule from './components/Schedule';
import Form from './components/Form';



function App() {

  const initialState = [
    { name: "Laura", surname: "Ruiz", address: "Calle F", city: "Málaga", cp: 29620, telephone: 952051248 },
    { name: "Consuelo", surname: "Lopez ", address: "Calle B", city: "Madrid", cp: 28011, telephone: 917057668 },
    { name: "Alberto", surname: "Hernandez", address: "Calle G", city: "Granada", cp: 18012, telephone: 911542536 }
  ]

  const [contacts, setContacts] = useState(initialState);

  return (
    <div className="container">

      <h2 className='my-4'>Agenda</h2>
      <Schedule contacts={contacts} setContacts={setContacts} />

      <h2 className='my-4'>Nuevo contacto</h2>
      <Form setContacts={setContacts} /> {/* Le pasamos la función setContacts de useState por parámetro (setContacts={setContacts}), para que 
      la tengamos disponible en el componente formulario. */}
    </div>
  );
}

export default App;
