import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';
import { Llaves } from 'server';

@Injectable()
export class DataServices{
    constructor(private httpClient: HttpClient,
        private loginService: LoginService){}

    cargarPersonas(){
        const token = this.loginService.getIdToken();
        
        return this.httpClient.get(Llaves.servidor + '.json?auth='+ token);
    }
    //Guardar personas
    guardarPersonas(personas: Persona[]){
        const token = this.loginService.getIdToken();
        this.httpClient.put(Llaves.servidor + '.json?auth=' + token, personas)
        .subscribe(
            response => console.log("Resultado guardar las Personas " + response),
            error => console.log("Error al guardar Personas: " + error)
        );
    }

    modificarPersona(index: number, persona: Persona){
        const token = this.loginService.getIdToken();
        let url: string;
        url = Llaves.servidor + '/'+index+'.json?auth=' + token;
        this.httpClient.put(url,persona)
        .subscribe(
            response => console.log("Resultado editar las Personas " + response),
            error => console.log('Error al editar Personas: ' + error)
        )
    }

    eliminarPersona(index:number){
        const token = this.loginService.getIdToken();
        let url: string;
        url = Llaves.servidor + '/' + index + '.json?auth=' + token;
        this.httpClient.delete(url)
        .subscribe(
            response => console.log("Resultado eliminar las Personas " + response),
            error => console.log("Error al eliminar Personas: " + error)
        )
    }
}