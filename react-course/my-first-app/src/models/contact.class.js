import { STATE } from "./levels.enum";

export class Contact {
  constructor(name, lastname, email, msg ){
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.connected = STATE.DISCONNECTED;
    this.msg = '';
  }
}
