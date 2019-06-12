import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'streamer';
  goToBrowse() {
    this.router.navigate(['/browse']);
  }
  constructor(private router: Router) {

  }
}
