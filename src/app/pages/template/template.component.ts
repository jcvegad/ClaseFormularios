import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Jose Carlos',
    apellido: 'Vega Defilippi',
    correo: 'jcvegad@gmail.com',
    pais: 'PER',
    genero: 'M'
  };
  paises: any[] = [];

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
    this.paisService.getPaises().subscribe(
      paises => {
        // console.log(paises);
        this.paises = paises;
        this.paises.unshift({
          nombre: '[ Seleccione País ]',
          codigo: ''
        });
      }
    );
  }

  guardar( forma: NgForm ) {
    if ( forma.invalid ) {
      Object.values( forma.controls ).forEach( control => {
        control.markAsTouched();
      });
    } else {
      console.log( forma );
      console.log( forma.value );
    }
  }
}
