import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {VideoGamesService} from '../../video-games.service';

@Component({
    selector: 'app-video-game-list',
    templateUrl: './video-game-list.component.html',
    styleUrls: ['./video-game-list.component.css']
})
export class VideoGameListComponent implements OnInit, OnDestroy {
    videoGameList: any[];
    private videoGameListSubs: Subscription;

    constructor(private videoGamesService: VideoGamesService) {
    }

    ngOnInit(): void {
        this.videoGamesService.videoGamesChanged.subscribe(videoGames => {
            this.videoGameList = videoGames;
        });

        this.videoGamesService.fetchVideoGames();
    }

    ngOnDestroy(): void {
        this.videoGameListSubs.unsubscribe();
    }

}
