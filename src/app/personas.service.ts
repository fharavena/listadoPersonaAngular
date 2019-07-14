import { Persona } from './persona.model';
import { loggingService } from './LogginService.service';
import { Injectable, EventEmitter } from '@angular/core';
import { DataServices } from './data.services';

@Injectable()
export class PersonaService{
    personas: Persona[] = [];

        saludar = new EventEmitter<number>();

        constructor(private loggingService:loggingService,
            private dataService: DataServices
          ){}

        setPersonas(personas: Persona[]){
          this.personas = personas;
        }

        obtenerPersonas(){
          return this.dataService.cargarPersonas();
        }

        agregarPersona(persona:Persona){
          this.loggingService.enviarMensajeAConsola("agregar persona: " +persona.nombre);
          if(this.personas == null){
            this.personas = [];
          }
          this.personas.push(persona);
          this.dataService.guardarPersonas(this.personas);
          }

          encontrarPersona(index: number){
            let persona: Persona = this.personas[index];
            return persona;
          }

          modificarPersona(index: number, persona: Persona){
            let persona1 = this.personas[index];
            persona1.nombre = persona.nombre;
            persona1.apellido = persona.apellido;
            this.dataService.modificarPersona(index,persona);
          }

          eliminarPersona(index: number){
            this.personas.splice(index,1);
            this.dataService.eliminarPersona(index);
            //se vuelve a guardar el arreglo
            this.modificarPersonas();
          }

          modificarPersonas(){
            if(this.personas != null){
              this.dataService.guardarPersonas(this.personas);
            }
          }
}