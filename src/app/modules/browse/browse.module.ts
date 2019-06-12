import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from './browse.component';
import {MaterialModule} from '../material/material.module';
import { ChannelElementComponent } from './channel-element/channel-element.component';
import { ChannelGridComponent } from './channel-grid/channel-grid.component';
import { GameGridComponent } from './game-grid/game-grid.component';
import { GameElementComponent } from './game-element/game-element.component';
import { GameChannelsComponent } from './game-channels/game-channels.component';

@NgModule({
  declarations: [BrowseComponent, ChannelElementComponent, ChannelGridComponent, GameGridComponent, GameElementComponent, GameChannelsComponent],
  exports: [
    BrowseComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class BrowseModule { }
