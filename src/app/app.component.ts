import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  /**
  * @ignore
  */
  constructor(private authService: AuthService) { }

  /**
  * Assigns a title to the web page
  */
  ngOnInit(): void {
    this.authService.start();
  }

}
