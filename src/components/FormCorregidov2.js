import { useState } from "react";

export default function FormCorregidov2({ setContacts }) {

    // Guardamos el estado inicial para poder reutilizarlo cuando queramos hacer reset
    const initialState = { name: "", surname: "", telephone: "", address: "", cp: "", city: "" };

    // Creamos un único estado para todo el formulario, es un objeto con tantas propiedades como inputs tengamos
    const [form, setForm] = useState(initialState);

    // Actualizamos solo la propiedad relacionada con el input que nos llega a través del atributo "name"
    const handleInput = e => setForm({ ...form, [e.target.name]: e.target.value });

    function submit(e) {
        e.preventDefault();

        const newContact = {
            name: form.name, surname: form.surname, telephone: form.telephone,
            address: form.address, cp: form.cp, city: form.city
        }

        setContacts(currentContacts => [...currentContacts, newContact]); // Añadimos el nuevo contacto

        setForm(initialState); // Reiniciamos el formulario
    }
}

return (
    <form className="form-group" onSubmit={submit}>
        <input name="name" value={form.name} onChange={handleInput} className="form-control" type="text" placeholder="Introduce el nombre" />
        <input name="surname" value={form.surname} onChange={handleInput} className="form-control" type="text" placeholder="Introduce el apellid" />
        <input name="telephone" value={form.telephone} onChange={handleInput} className="form-control" type="text" placeholder="Introduce el teléfono" />
        <input name="address" value={form.address} onChange={handleInput} className="form-control" type="text" placeholder="Introduce la dirección" />
        <input name="cp" value={form.cp} onChange={handleInput} className="form-control" type="text" placeholder="Introduce el código postal" />
        <input name="city" value={form.city} onChange={handleInput} className="form-control" type="text" placeholder="Introduce la ciudad" />
        <input type="submit" className="btn btn-success" value="Registrar" />
    </form>
)