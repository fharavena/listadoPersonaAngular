import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { loggingService } from './LogginService.service';
import { PersonaService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado de Personas';
  personas: Persona[] = [];
  
  constructor(private loggingService: loggingService,
    private personasServices: PersonaService){}
      ngOnInit(): void {
        this.personas = this.personasServices.personas;
      }

}
