import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TwitchService} from '../../services/twitch/twitch.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit, OnChanges, DoCheck {
  streams: Array<any>;
  types: Array<any>;
  @Input() selectedType: string;
  oldSelectedType: string;
  constructor(private twitchService: TwitchService, private router: Router) {
  }

  onStreamClick = (stream) => {
    const {channelId} = stream;
    this.router.navigate(['/stream', channelId]);
  }
  onGameClick = (game) => {
    const {name} = game;
    this.router.navigate(['/game',encodeURI(name)]);
  }


  getSelections() {
      if (this.selectedType === 'games') {
        this.getGames();
      } else if (this.selectedType === 'channels') {
        this.getStreams();
      }

  }

  getGames() {
    this.twitchService.getTopGames().subscribe((response: any) => {
      const {top} = response;
      console.log(top);
      this.streams =  top.map(({game}) => ({
        name: game.name,
        box: game.box,
        viewers: game.popularity,
        channels: game.channels,
        channelId: game._id
      }));
    });

  }

  getStreams() {
   this.twitchService.getStreams(null).subscribe((response: any) => {
     const {streams} = response;
     console.log(streams);
     this.streams =  streams.map(stream => ({
       name: stream.channel.status,
       preview: stream.preview,
       channelId: stream.channel._id,
       viewers: stream.viewers,
       channel: {
         logo: stream.channel.logo,
         name: stream.channel.name
       },
       game: stream.game
     }));
   });
  }

  ngDoCheck() {
    if (this.oldSelectedType !== this.selectedType) {
        this.oldSelectedType = this.selectedType;
        this.getSelections();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
    this.types = [
      {
        value: 'channels',
        viewValue: 'Channels'
      },
      {
        value: 'games',
        viewValue: 'Games'
      }
    ];
    this.selectedType = 'games';
  }

}
