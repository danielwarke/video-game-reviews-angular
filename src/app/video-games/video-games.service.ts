import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {DataService} from '../shared/data.service';

@Injectable({
    providedIn: 'root'
})
export class VideoGamesService {
    videoGamesChanged = new Subject<any[]>();

    private videoGames: any[];

    fetchVideoGames(): void {
        this.dataService.get('/video-games', false).then(response => {
            this.videoGames = response.videoGames;
            this.videoGamesChanged.next(response.videoGames);
        });
    }

    constructor(private dataService: DataService) {
    }
}
