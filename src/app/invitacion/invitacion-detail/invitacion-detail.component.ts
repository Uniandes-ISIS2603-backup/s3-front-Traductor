import { Component, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import {Invitacion} from '../invitacion';
import {InvitacionService} from '../invitacion.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-invitacion-detail',
  templateUrl: './invitacion-detail.component.html',
  styleUrls: ['./invitacion-detail.component.css']
})
export class InvitacionDetailComponent implements OnInit {

  /**
    * The constructor of the component
    * @param invitacionService The invitacion service which communicates with the API
    * @param route The route which helps to retrieves the id of the client to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
  */
 constructor(
  private invitacionService: InvitacionService,
  private route: ActivatedRoute,
  private router: Router,
  private toastrService: ToastrService
  ) {}

  /**
  * La invitacion de entrada
  */

  @Input() invitacion: Invitacion;

  /**
  * The invitacion id retrieved from the address
  */
 
 invitacion_id: number; 

  /**
  * The method which retrieves the details of the client that
  * we want to show
  * @returns The client with its information (details)
  */
 getInvitacion(): void {
  this.invitacionService.getInvitacion(this.invitacion_id)
    .subscribe(invitacion => {
        this.invitacion = invitacion;
    }, err => {
        this.toastrService.error(err, "Error");
  });
}

/**
* The method which initilizes the component
* We need to initialize the book and its editorial so that
* they are never considered undefined
*/
ngOnInit() {
  if (this.invitacion_id){
  this.invitacion_id = +this.route.snapshot.paramMap.get('id');
  this.invitacion = new Invitacion();
  this.getInvitacion(); 
  } 
}

}
