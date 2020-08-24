import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {DataService} from '../shared/data.service';

@Injectable({
	providedIn: 'root'
})
export class ReviewsService {
	reviewsChanged = new Subject<any[]>();

	private reviews: any[];

	fetchReviews(url = '/reviews', auth = false): Promise<any> {
		return new Promise((resolve, reject) => {
			this.dataService.get(url, auth).then(response => {
				this.reviews = response.reviews;
				this.reviewsChanged.next(response.reviews);
				resolve(response);
			}).catch(err => reject(err));
		});
	}

	constructor(private dataService: DataService) {
	}
}
