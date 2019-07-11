import { Persona } from './persona.model';
import { loggingService } from './LogginService.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonaService{
    personas: Persona[] = [
        new Persona("Juan", "Perez"), 
        new Persona("Laura", "Juarez")];

        saludar = new EventEmitter<number>();

        constructor(private loggingService:loggingService){}

        agregarPersona(persona:Persona){
          this.loggingService.enviarMensajeAConsola("agregar persona: " +persona.nombre);
          this.personas.push(persona);
          }

          encontrarPersona(index: number){
            let persona: Persona = this.personas[index];
            return persona;
          }

          modificarPersona(index: number, persona: Persona){
            let persona1 = this.personas[index];
            persona1.nombre = persona.nombre;
            persona1.apellido = persona.apellido;
          }

          eliminarPersona(index: number){
            this.personas.splice(index,1);
          }
}