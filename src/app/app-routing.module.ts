import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StreamDetailComponent} from './modules/stream-detail/stream-detail.component';
import {BrowseComponent} from './modules/browse/browse.component';
import { GameChannelsComponent } from './modules/browse/game-channels/game-channels.component';

const routes: Routes = [
  {path: 'stream/:id', component: StreamDetailComponent},
  {path: 'browse', component: BrowseComponent},
  {path: 'game/:id',component: GameChannelsComponent},
  {path: '', redirectTo: '/browse', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
