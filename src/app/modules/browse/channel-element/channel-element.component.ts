import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-channel-element',
  templateUrl: './channel-element.component.html',
  styleUrls: ['./channel-element.component.scss']
})
export class ChannelElementComponent implements OnInit {

  @Input() stream: any;

  constructor() { }

  ngOnInit() {
  }

}
