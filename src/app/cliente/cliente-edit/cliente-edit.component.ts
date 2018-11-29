import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {

  constructor( private clienteService: ClienteService,
    private toastrService: ToastrService,
    private router: Router) { }

    @Input() idCliente: number;

    cliente:Cliente;

     /**
   * The output which tells the parent component
   * that the user no longer wants to create an author
   */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user updated a new author
  */
  @Output() updateCliente = new EventEmitter();


  public isCollapsed = true;

  editarCliente(): void {
   
    this.clienteService.updateCliente(this.cliente)
        .subscribe(() => {
            this.toastrService.success("La info del perfil se actualizo", "Actualizacion del perfil del cliente");
           let rol:string=localStorage.getItem('rol');
if(rol=='CLIENTE')
{
            this.router.navigate(['clientes/miperfil']);
}else
{
  this.router.navigate(['clientes/'+this.idCliente]);
}

        });
    this.updateCliente.emit();
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

gettCliente():void{
  this.clienteService.getCliente(this.idCliente)
  .subscribe(cliente => {
      this.cliente = cliente;
  }, err => {
      this.toastrService.error(err, "Error");
});
}

  ngOnInit() {
    this.cliente=new Cliente;
    this.gettCliente();
  }


}
