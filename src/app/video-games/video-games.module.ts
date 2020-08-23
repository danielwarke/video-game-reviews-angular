import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';

import { VideoGamesService } from './video-games.service';
import { VideoGameListComponent } from './video-game-list/video-game-list/video-game-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [VideoGameListComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    MatCardModule
  ],
  providers: [VideoGamesService]
})
export class VideoGamesModule { }
