import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import { Component, OnInit,Input,ViewContainerRef } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TarjetaDeCredito } from '../tarjetaDeCredito';
import { ClienteService } from '../cliente.service';



@Component({
  selector: 'app-cliente-tarjetas',
  templateUrl: './cliente-tarjetas.component.html',
  styleUrls: ['./cliente-tarjetas.component.css']
})
export class ClienteTarjetasComponent implements OnInit {

  @Input() tarjetasCliente : TarjetaDeCredito [];

  @Input() idCliente : number;

  constructor(
    private clienteService: ClienteService,
    private toastrService: ToastrService, 
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef,
    private router: Router
) { }

  tarjetaSeleccionada:TarjetaDeCredito;
    
    public isCollapsed = true;

      /**
    * Shows or hides the edition of an credit card
    */
   showEdit: boolean;

    
    /**
     * The function called when a review is posted to update the reviews
     */
    updateTarjetas(tarjetas:TarjetaDeCredito[]): void {
        this.tarjetasCliente = tarjetas;
    }

    guardarTarjeta(idTarjeta:number,ccv:number,anioExpiracion:number,mesExpiracion:number,nombreTitular:string,numeroTarjetaCredito:number,redBancaria:string)
    {
      this.tarjetaSeleccionada.idTarjeta=idTarjeta;
this.tarjetaSeleccionada.ccv=ccv;
this.tarjetaSeleccionada.anioExpiracion=anioExpiracion;
this.tarjetaSeleccionada.mesExpiracion=mesExpiracion;
this.tarjetaSeleccionada.nombreTitular=nombreTitular;
this.tarjetaSeleccionada.numeroTarjetaCredito=numeroTarjetaCredito;
this.tarjetaSeleccionada.redBancaria=redBancaria;
this.showHidEdit();
    }

    deleteTarjeta(idTarjeta:number): void {
      this.modalDialogService.openDialog(this.viewRef, {
          title: 'Eliminar una tarjeta',
          childComponent: SimpleModalComponent,
          data: {text: 'Seguro que quiere eliminar esta tarjeta?'},
          actionButtons: [
              {
                  text: 'Yes',
                  buttonClass: 'btn btn-danger',
                  onAction: () => {
                      this.clienteService.deleteTarjeta(this.idCliente,idTarjeta).subscribe(book => {
                          this.toastrService.success("Tarjeta  ", "Tarjeta eliminada");
                          this.router.navigate(['clientes/'+this.idCliente]);
                      }, err => {
                          this.toastrService.error(err, "Error");
                      });
                      return true;
                  }
              },
              {text: 'No', onAction: () => true}
          ]
      });
  }

    showHidEdit(): void {
      this.showEdit = !this.showEdit;
  }
    
    ngOnInit(){
      this.tarjetaSeleccionada=new TarjetaDeCredito;
      this.showEdit=false;
    }

}
