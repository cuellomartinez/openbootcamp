import React from 'react';
import { Contact } from '../../models/contact.class';
import StateComponent from '../pure/state_contact';
import { STATE } from '../../models/levels.enum';

const ContactComponent = () => {
    const newContact = new Contact('Mairon','Cuello','mmairon@gmail.com', STATE.DISCONNECTED, null);

    if(newContact.connected){
        newContact.msg = 'CONTACTO EN LINEA';
        console.log(newContact);
        
    }else{
        newContact.msg = 'CONTACTO NO DISPONIBLE';
    };
    return (
        <div>
            <div>
               <h1> Contacto:</h1>
            </div>
            <StateComponent contact={ newContact} ></StateComponent>
        </div>
    );
};

export default ContactComponent;
 