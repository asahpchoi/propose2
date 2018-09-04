import { Component } from '@angular/core';
import { CoreSvcService } from './core/core/core-svc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(svc: CoreSvcService) {
    this.title = svc.getTitle();
  }
}
