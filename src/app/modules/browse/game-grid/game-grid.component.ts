import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-grid',
  templateUrl: './game-grid.component.html',
  styleUrls: ['./game-grid.component.scss']
})
export class GameGridComponent implements OnInit {

  @Input() games: Array<any>;
  @Input() onGameClick : any;
  constructor() { }

  ngOnInit() {
  }

}
