import { useState } from "react";

export default function FormCorregidov1({ setContacts }) {
    // Un estado por cada input
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [telephone, setTelephone] = useState("");
    const [address, setAddress] = useState("");
    const [cp, setCp] = useState("");
    const [city, setCity] = useState("");
}

// Estas funciones reciben el valor del inputen cuestión y actualizan los estados.
const handleName = e => setName(e.targe.value);
const handleSurname = e => setSurname(e.target.value);
const handleTelephone = e => setTelephone(e.targe.value);
const handleAddress = e => setAddress(e.targe.value);
const handleCp = e => setCp(e.targe.value);
const handleCity = e => setCity(e.targe.value);

function submit(e) {
    e.preventDefault();

    // Podemos crear una propiedad de un objeto directamente con una variable
    // Asignará el nombre de la variable y su valor a una nueva propiedad.
    const newContact = { nombre, surname, telephone, address, cp, city };

    //setContacts([...contacts, newContact]) // Necesitaría recibir "contacts" por props
    setContacts(currentContacts => [...currentContacts, newContact]);

    //e.targe.reset(); // NO nos vale, no actualiza los estados.
    setName("");
    setSurname("");
    setTelephone("");
    setAddress("");
    setCp("");
    setCity("");
}

return (
    <form className="form-group" onSubmit={submit}>
        <input className="form-control mb-3" type="text" value={nombre} onChange={handleName} placeholder="Introduce el nombre" />
        <input className="form-control mb-3" type="text" value={surname} onChange={handleSurname} placeholder="Introduce el apellido" />
        <input className="form-control mb-3" type="text" value={telephone} onChange={handleTelephone} placeholder="Introduce el teléfono" />
        <input className="form-control mb-3" type="text" value={address} onChange={handleAddress} placeholder="Introduce la dirección" />
        <input className="form-control mb-3" type="text" value={cp} onChange={handleCp} placeholder="Introduce el código postal" />
        <input className="form-control mb-3" type="text" value={city} onChange={handleCity} placeholder="Introduce la ciudad" />
        <input type="submit" className="btn btn-success" value="Registrar" />
    </form>
)