import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TwitchService} from '../../services/twitch/twitch.service';
declare const Twitch: any;

@Component({
  selector: 'app-stream-detail',
  templateUrl: './stream-detail.component.html',
  styleUrls: ['./stream-detail.component.scss']
})
export class StreamDetailComponent implements OnInit {
  stream: any;
  player: any;

  constructor(private route: ActivatedRoute, private twitch: TwitchService) { }

  getStreamDetail() {
    const id = this.route.snapshot.paramMap.get('id');
    this.twitch.getStream(id).subscribe((value : any) => {
      const {stream} = value;
      this.stream = stream;
      console.log(stream);
      const options = {
        width: window.innerWidth,
        height: 768,
        channel: stream.channel.name
      };
      const embed = new Twitch.Embed('twitch-embed', options);
      embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
        this.player = embed.getPlayer();
        this.player.play();
      });

    });

  }

  ngOnInit() {
    this.getStreamDetail();
  }

}
