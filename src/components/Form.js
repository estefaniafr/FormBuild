import { useState } from "react";


export default function Form({ setContacts }) {  //En lugar de poner props, es mejor poner la función tal cual aquí

    //Mucho más facil que la que está activa

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [telephone, setTelephone] = useState("")
    const [address, setAddress] = useState("");
    const [cp, setCp] = useState("");
    const [city, setCity] = useState("");

    //Hacemos un useState por cada input
    const handleName = event => setName(event.target.value);

    const handleSurname = event => setSurname(event.target.value);

    const handleTelephone = event => setTelephone(event.target.value);

    const handleAddress = event => setAddress(event.target.value);

    const handleCp = event => setCp(event.target.value);

    const handleCity = event => setCity(event.target.value);

    //Segunda forma
    // const initialState = {
    //     name: "",
    //     surname: "",
    //     address: "",
    //     telephone: "",
    //     cp: "",
    //     city: ""
    // }

    //Segunda forma
    //const [form, setForm] = useState(initialState)

    // function handleInput(event) {
    //     const inputName = event.target.id;
    //     const newValue = event.target.value
    //     setForm({ ...form, ...{ [inputName]: newValue } })
    //     //tendrá todas las propiedades de form y sobreescribe lo que ponemos en los segundos ...
    //     //Es decir, sobreescribe el formulario primero y le pone los valores que escribimos en el input.
    // }

    //Creamos la función para crear un nuevo contacto
    function submit(event) { //Función pasada por parámetro al formulario con el atributo onSubmit
        event.preventDefault();

        //Si lo hacemos de la primera forma, se quita el form.
        //Si lo hacemos de la segunda, antes de cada propiedad ponemos form. ("name: form.name")
        const newContact = {
            name: name,
            surname: surname,
            telephone: telephone,
            address: address,
            cp: cp,
            city: city
        }


        //Es igual que lo de arriba, pero al tener el mismo nombre la propiedad que el valor, se puede abreviar así
        //const newContact = { name, surname, telephone, address, cp, city };

        //Alternativa a pasarle por props el array contacts, para mi es mas fácil eso, pero aquí lo dejo
        //setContacts([...contacts, newContact]) //pásandoselo por props.
        setContacts(currentContacts => [...currentContacts, newContact]);

        //Segunda forma
        //setForm(initialState);

        //Primera forma
        setName("");
        setSurname("");
        setAddress("");
        setCity("");
        setCp("");
        setTelephone("");
    };

    return (
        <div>
            {/* Si quiero hacer la primera forma que es más facil, quitamos name, en value quitamos form. y en onChange ponemos el nombre de cada función
            de cada useState de cada input  */}
            {/* Si queremos hacer la segunda que es más dificil y más corta, ponemos en todas la propuedad name="name", surname="surname", etc..
            En la propiedad value ponemos form. antes de cada propiedad
            y en el onChange de todos, ponemos siempre handleInput */}
            <form className="form-group mt-4" onSubmit={submit}>
                <input value={name} onChange={handleName} className="form-control mb-3" type="text" placeholder="Introduce el nombre" />
                <input value={surname} onChange={handleSurname} className="form-control mb-3" type="text" placeholder="Introduce los apellidos" />
                <input value={telephone} onChange={handleTelephone} className="form-control mb-3" type="text" placeholder="Introduce el teléfono" />
                <input value={address} onChange={handleAddress} className="form-control mb-3" type="text" placeholder="Introduce la dirección" />
                <input value={cp} onChange={handleCp} className="form-control mb-3" type="text" placeholder="Introduce el código postal" />
                <input value={city} onChange={handleCity} className="form-control mb-3" type="text" placeholder="Introduce la ciudad" />
                <input type="submit" className="btn btn-success" value="Registrar" />

            </form>
        </div>
    )
}
