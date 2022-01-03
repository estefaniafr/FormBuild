
export default function Schedule({ contacts, setContacts }) {
    // Pasando por props así la propiedad, ya no tenemos un objeto, tenemos un array 

    //Para poder pasarle el argumento teléfono que mandamos desde el onClick del botón, hay que hacerlo de 
    //la siguiente manera.
    const removeContact = telephone => {
        return e => setContacts(contacts.filter(contact => contact.telephone !== telephone));
    }

    return (
        <div className="row">
            {/* {JSON.stringify(props.contacts)} */}
            {contacts.map((contact, index) => {
                return <ul className="list-group mb-3 col-12 col-sm-6 col-xl-3" key={contact.telephone}>
                    <li className="list-group-item active" aria-current="true">Contacto {index + 1}</li>
                    <li className="list-group-item">{contact.name}</li>
                    <li className="list-group-item">{contact.surname}</li>
                    <li className="list-group-item">{contact.telephone}</li>
                    <li className="list-group-item">{contact.address}, {contact.cp}, {contact.city}</li>
                    <li className="list-group-item">
                        {/* Llamamos a la función , cosa que no hacemos normalmente, para pasarle un identificador
                        único que pueda ayudarle a distinguir que contacto hay que borrar */}
                        <button className="btn btn-warning" onClick={removeContact(contact.telephone)}>Eliminar</button>
                    </li>
                </ul>
            })}
        </div>
    )
}
