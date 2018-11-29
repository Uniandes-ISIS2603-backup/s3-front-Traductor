import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoDetail } from '../empleado-detail';

@Component({
  selector: 'app-empleado-edit',
  templateUrl: './empleado-edit.component.html',
  styleUrls: ['./empleado-edit.component.css']
})
export class EmpleadoEditComponent implements OnInit {

  constructor( private empleadoService: EmpleadoService,
    private toastrService: ToastrService,
    private router: Router) { }

       /**
    * The empleado as received from the parent component
    */
   @Input() idEmpleado: number;

   empleado:EmpleadoDetail;

   /**
   * The output which tells the parent component
   * that the user no longer wants to create an author
   */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user updated a new author
  */
  @Output() updateEmpleado = new EventEmitter();

  public isCollapsed = true;

  /**
    * Updates the information of the Empleado
    */
   editarEmpleado(): void {
   
    this.empleadoService.updateEmpleado(this.empleado)
        .subscribe(() => {
            this.toastrService.success("La info del perfil se actualizo", "Actualizacion del perfil del empleado");
            let rol:string=localStorage.getItem('rol');
if(rol=='EMPLEADO')
{
            this.router.navigate(['empleados/miperfil']);
}else
{
  this.router.navigate(['empleados/'+this.idEmpleado]);
}
        });
    this.updateEmpleado.emit();
    this.isCollapsed=true;
    
}

  /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
   cancelEdition(): void {
       
    this.cancel.emit();
    this.isCollapsed = true;
}

getEmpleado():void{
  this.empleadoService.getEmpleado(this.idEmpleado)
  .subscribe(empleado => {
      this.empleado = empleado;
  }, err => {
      this.toastrService.error(err, "Error");
});
}

  ngOnInit() {
    this.empleado=new EmpleadoDetail;
    this.getEmpleado();
  }

}
