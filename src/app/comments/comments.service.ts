import {Injectable} from '@angular/core';
import {DataService} from '../shared/data.service';
import {ErrorService} from '../shared/error.service';

@Injectable({
	providedIn: 'root'
})
export class CommentsService {
	
	constructor(private dataService: DataService,
	            private errorService: ErrorService) {
	}
	
	getComments(reviewId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.dataService.get('/reviews/' + reviewId + '/comments').then(response => {
				resolve(response);
			}).catch(err => {
				this.errorService.handleError(err);
				reject(err);
			});
		});
	}
	
	createComment(reviewId: string, body: string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.dataService.post('/reviews/' + reviewId + '/comment', { body }, true).then(response => {
				resolve(response);
			}).catch(err => {
				this.errorService.handleError(err);
				reject(err);
			});
		});
	}
	
	updateComment(reviewId: string, commentId: string, body: string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.dataService.put('/reviews/' + reviewId + '/comment/' + commentId, { body }, true).then(response => {
				resolve(response);
			}).catch(err => {
				this.errorService.handleError(err);
				reject(err);
			});
		});
	}
	
	deleteComment(reviewId: string, commentId: string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.dataService.delete('/reviews/' + reviewId + '/comment/' + commentId).then(response => {
				resolve(response);
			}).catch(err => {
				this.errorService.handleError(err);
				reject(err);
			});
		});
	}
}
