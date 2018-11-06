import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ToastrService } from 'ngx-toastr';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';


@Component({
    selector: 'app-empleado-create',
    templateUrl: './empleado-create.component.html',
    styleUrls: ['./empleado-create.component.css'],
    providers : [DatePipe]
})
export class EmpleadoCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param empleadoService The empleado's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private empleadoService: EmpleadoService,
        private toastrService: ToastrService
    ) { }

    /**
    * The new empleado
    */
   empleado: Empleado;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an empleado
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new empleado
    */
    @Output() create = new EventEmitter();

    /**
    * Creates an empleado
    */
    createEmpleado(): Empleado {
        console.log(this.empleado);
        this.empleadoService.createEmpleado(this.empleado)
            .subscribe((empleado) => {
                this.empleado = empleado;
                this.create.emit();
                this.toastrService.success('The empleado was created', 'Empleado creation');

            });
            return this.empleado;
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }
    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.empleado = new Empleado();
    }

}
