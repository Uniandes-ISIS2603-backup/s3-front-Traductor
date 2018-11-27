import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.usuario = this.authService.getUser();
  }

  logout(): void {
    this.usuario = undefined;
    this.authService.logout()
  }
}
