import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {DataService} from '../shared/data.service';
import {ErrorService} from '../shared/error.service';

@Injectable({
	providedIn: 'root'
})
export class ReviewsService {
	reviewsChanged = new Subject<any[]>();
	private reviews: any[];
	
	constructor(private errorService: ErrorService, private dataService: DataService) {
	}

	fetchReviews(url = '/reviews', auth = false): Promise<any> {
		return new Promise((resolve, reject) => {
			this.dataService.get(url, auth).then(response => {
				this.reviews = response.reviews;
				this.reviewsChanged.next(response.reviews);
				resolve(response);
			}).catch(err => {
				this.errorService.handleError(err);
				reject(err);
			});
		});
	}
	
	getReview(reviewId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.dataService.get('/review/' + reviewId, false).then(response => {
				resolve(response.review);
			}).catch(err => {
				this.errorService.handleError(err);
				reject(err);
			});
		});
	}
}
