import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isNavbarCollapsed = true;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout(): void {
    this.authService.logout()
  }
}
