import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonaService } from '../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];
  
  constructor(    
    private personasServices: PersonaService,
    private router: Router
    ){}
      ngOnInit(): void {
        this.personas = this.personasServices.personas;
      }

      agregar() {
        this.router.navigate(['personas/agregar']);
      }

}
