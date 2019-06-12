import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-channel-grid',
  templateUrl: './channel-grid.component.html',
  styleUrls: ['./channel-grid.component.scss']
})
export class ChannelGridComponent implements OnInit {

  @Input() streams : any;
  @Input() onStreamClick: any;
  
  constructor() { }

  ngOnInit() {
  }

}
