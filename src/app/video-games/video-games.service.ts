import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {DataService} from '../shared/data.service';
import {ErrorService} from '../shared/error.service';

@Injectable({
	providedIn: 'root'
})
export class VideoGamesService {
	videoGamesChanged = new Subject<any[]>();
	private videoGames: any[];
	
	constructor(private dataService: DataService, private errorService: ErrorService) {
	}

	fetchVideoGames(): Promise<any> {
		return new Promise((resolve, reject) => {
			this.dataService.get('/video-games', false).then(response => {
				this.videoGames = response.videoGames;
				this.videoGamesChanged.next(response.videoGames);
				resolve(response);
			}).catch(err => {
				this.errorService.handleError(err);
				reject(err);
			});
		});
	}

	
}
