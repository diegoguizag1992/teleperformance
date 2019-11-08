import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { Empleados } from 'src/app/models/empleados';



@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

   datos: Empleados = {};
   email = new FormControl('', [Validators.required, Validators.email]);
   tipoDocumento = new FormControl('', [Validators.required]);
   pais = new FormControl('', [Validators.required]);
   nombreCompleto = new FormControl('', [Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*')]);
   numeroCedula  = new FormControl('', [Validators.required, Validators.pattern('[1-9 ]*')]);
   celular = new FormControl('', [Validators.required, Validators.pattern('[1-9 ]*')]);
   apellido = new FormControl('', [Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*')]);
   direccion  = new FormControl('', [Validators.required]);





  constructor() { }

  ngOnInit() {

  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Debe ingresar un correo valido' :
        this.email.hasError('email') ? 'No es un correo valido' :
            '';
  }

  getTipoDocumentorMessage() {
    return this.tipoDocumento.hasError('required') ? 'Seleccione tipo documento' :
            '';
  }

  getNombreMessage() {
    return this.nombreCompleto.hasError('required') ? 'Debe ingresar Nombre' :
           this.nombreCompleto.hasError('pattern') ? 'No puede llevar números' :
            '';
  }

  getApellidoMessage() {
    return this.nombreCompleto.hasError('required') ? 'Debe ingresar Apellido' :
           this.nombreCompleto.hasError('pattern') ? 'No puede llevar números' :
            '';
  }

  getNumeroCedulaMessage(){
    return this.numeroCedula.hasError('required') ? 'Ingrese nick' :
           this.numeroCedula.hasError('pattern') ? 'No puede llevar letras' :
          //  this.numeroCedula.hasError('min') ? 'Debe ser mayor a 6 digitos' :
            '';
  }

  getPaisMessage(){
    return this.numeroCedula.hasError('required') ? 'Debe seleccionar un pais' :
            '';
  }

  getCelularMessage(){
    return this.celular.hasError('required') ? 'Debe ingresar numero telefono' :
           this.celular.hasError('pattern') ? 'No puede llevar letras' :
            '';
  }

  getDireccionMessage(){
    return this.direccion.hasError('required') ? 'Debe ingresar direccion' :
            '';
  }

  crearRequerimiento(){

      console.log(this.datos);

  }

}


