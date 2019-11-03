import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})
export class PaginaPrincipalComponent implements OnInit {

   listaPaises: any = {};
   email = new FormControl('', [Validators.required, Validators.email]);
   tipoDocumento = new FormControl('', [Validators.required]);
   pais = new FormControl('', [Validators.required]);
   nombreCompleto = new FormControl('', [Validators.required, Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*')]);
   numeroCedula  = new FormControl('', [Validators.required, Validators.pattern('[1-9 ]*')]);
   celular = new FormControl('', [Validators.required, Validators.pattern('[1-9 ]*')]);

   checked = false;

  constructor(private servicePais: PaisService) { }

  ngOnInit() {
    this.servicePais.datosPais().subscribe(data => {
      this.listaPaises = data;
      console.log(this.listaPaises);

    })
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
    return this.nombreCompleto.hasError('required') ? 'Debe ingresar nombre completo' :
           this.nombreCompleto.hasError('pattern') ? 'No puede llevar números' :
            '';
  }

  getNumeroCedulaMessage(){
    return this.numeroCedula.hasError('required') ? 'Ingrese número documento' :
           this.numeroCedula.hasError('pattern') ? 'No puede llevar letras' :
          //  this.numeroCedula.hasError('min') ? 'Debe ser mayor a 6 digitos' :
            '';
  }

  getPaisMessage(){
    return this.numeroCedula.hasError('required') ? 'Debe seleccionar un pais' :
            '';
  }

  getCelularMessage(){
    return this.celular.hasError('required') ? 'Debe ingresar numero celular' :
           this.celular.hasError('pattern') ? 'No puede llevar letras' :
            '';
  }

  enviar(){
    console.log(this.checked);

    if (this.checked === false) {
      Swal.fire(
        '',
        'Debe leer y aceptar las condiciones de las politicas de privacidad',
        'info'
      );
      return;
    }

    if (this.checked) {
      Swal.fire(
        '',
        'Datos almacenados con exito',
        'success'
      );
      return;
    }
  }
}


