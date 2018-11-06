import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {PropuestaService} from '../propuesta.service';
import {Propuesta} from '../propuesta';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-propuesta-detail',
  templateUrl: './propuesta-detail.component.html',
  styleUrls: ['./propuesta-detail.component.css']
})
export class PropuestaDetailComponent implements OnInit { 
 

  constructor(
  private propuestaService:PropuestaService,
  private route: ActivatedRoute,
  private router: Router,
  private toastrService: ToastrService)   
  {}
  
  //Numero de la propuesta seleccionada.
  propuesta_id: number;
  
  //Propuesta pedida por ID
  @Input() propuesta: Propuesta;
  
  getPropuesta(): void {
	  this.propuestaService.getPropuestaDetail(this.propuesta_id)
            .subscribe(pPropuesta => {
                this.propuesta = pPropuesta
            });
    }

  ngOnInit() {	  
	  //Obtener el valor seleccionado por el usuario.
	  this.propuesta_id = +this.route.snapshot.paramMap.get('id');	  
	  
	  if (this.propuesta_id)
	  {
		  this.propuesta = new Propuesta();
		  this.getPropuesta();
	  }
  }

}
