import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Solicitud } from '../../solicitudes/solicitud';
import { SolicitudService } from '../../solicitudes/solicitudes.service';

@Component({
  selector: 'app-cliente-solicitudes',
  templateUrl: './cliente-solicitudes.component.html',
  styleUrls: ['./cliente-solicitudes.component.css']
})
export class ClienteSolicitudesComponent implements OnInit {

    solicitudes: Solicitud[];

    @Input() idCliente: number;

    constructor(
        private solicitudService: SolicitudService,
        private toastrService: ToastrService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private router: Router
    ) { }

    solicitudSeleccionada: Solicitud;

    public isCollapsed = true;

    /**
  * Shows or hides the edition of a request
  */
    showEdit: boolean;


    /**
     * The function called when a review is posted to update the reviews
     */
    updateSolicitud(sol): void {
        this.solicitudSeleccionada = sol;
        this.showHidEdit();
    }

    seleccionar(sol) {
        this.solicitudSeleccionada = sol;
    }

    deleteSolicitud(idSol): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Eliminar una solicitud',
            childComponent: SimpleModalComponent,
            data: { text: 'Seguro que quiere eliminar esta solicitud?' },
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-peligro',
                    onAction: () => {
                        this.solicitudService.deleteSolicitudCliente(this.idCliente, idSol).subscribe(book => {
                            this.toastrService.success("Solicitud", "Solicitud eliminada");
                            this.ngOnInit();
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                { text: 'No', onAction: () => true }
            ]
        });
    }

    showHidEdit(): void {
        this.showEdit = !this.showEdit;
    }

    ngOnInit() {
        this.solicitudService.getSolicitudesCliente(this.idCliente).subscribe(
          (rta) => { 
            this.solicitudes = rta;
          }, err => {
            this.toastrService.error(err, "Error");
          }
        );
        this.solicitudSeleccionada = new Solicitud();
        this.showEdit = false;
    }

}
