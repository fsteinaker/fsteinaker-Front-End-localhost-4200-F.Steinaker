import { Component } from '@angular/core';
import { PorfolioService } from './servicios/porfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PorfolioService],
})
export class AppComponent {
  title = 'angular_mc3';
}
