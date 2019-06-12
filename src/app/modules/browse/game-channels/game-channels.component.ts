import { Component, OnInit } from '@angular/core';
import { TwitchService } from 'src/app/services/twitch/twitch.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-channels',
  templateUrl: './game-channels.component.html',
  styleUrls: ['./game-channels.component.scss']
})
export class GameChannelsComponent implements OnInit {
  streams: any
  gameName: string

  constructor(private twitchService: TwitchService, private route: ActivatedRoute, private router: Router) { }

  onStreamClick = (stream) => {
    const {channelId} = stream;
    this.router.navigate(['/stream', channelId]);
  }

  getStreams() {
   const gameId = this.route.snapshot.paramMap.get('id');
   this.gameName = decodeURI(gameId)
    this.twitchService.getStreams(gameId).subscribe((response: any) => {
      const {streams} = response;
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
  ngOnInit() {
    this.getStreams()

  }

}
