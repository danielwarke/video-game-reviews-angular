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
				response.review.videoGameId = response.review.videoGame._id;
				resolve(response.review);
			}).catch(err => {
				this.errorService.handleError(err);
				reject(err);
			});
		});
	}
	
	createReview(title: string, rating: number, body: string, videoGameId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			const newReview = {
				title,
				rating,
				body,
				videoGameId
			};
			
			this.dataService.post('/review', newReview, true).then(response => {
				resolve(response);
			}).catch(err => {
				this.errorService.handleError(err);
				reject(err);
			});
		});
	}
	
	editReview(reviewId: string, title: string, rating: number, body: string, videoGameId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			const updatedReview = {
				title,
				rating,
				body,
				videoGameId
			};
			
			this.dataService.put('/review/' + reviewId, updatedReview, true).then(response => {
				resolve(response);
			}).catch(err => {
				this.errorService.handleError(err);
				reject(err);
			});
		});
	}
	
	deleteReview(reviewId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.dataService.delete('/review/' + reviewId).then(response => {
				resolve(response);
			}).catch(err => {
				this.errorService.handleError(err);
				reject(err);
			});
		});
	}
}
