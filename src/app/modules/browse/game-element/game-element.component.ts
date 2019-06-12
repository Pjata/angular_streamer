import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-element',
  templateUrl: './game-element.component.html',
  styleUrls: ['./game-element.component.scss']
})
export class GameElementComponent implements OnInit {
  @Input() game: any;

  constructor() { }

  ngOnInit() {
  }

}
