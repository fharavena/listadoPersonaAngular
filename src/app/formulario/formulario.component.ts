import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../persona.model';
import { loggingService } from '../LogginService.service';
import { PersonaService } from '../personas.service';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  // nombreInput: string;
  // apellidoInput: string;
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  

  constructor(private loggingService:loggingService,
    private personasServices: PersonaService) { }

  ngOnInit() {
  }

  onAgregarPersona() {
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.loggingService.enviarMensajeAConsola("Enviamos persona con nombre: " + persona1.nombre + " apellido: " +persona1.apellido);    
    //this.personaCreada.emit(persona1);
    this.personasServices.agregarPersona(persona1);
  }
}
