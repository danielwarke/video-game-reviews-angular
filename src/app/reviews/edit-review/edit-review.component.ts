import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';

import {ReviewsService} from '../reviews.service';
import {VideoGamesService} from '../../video-games/video-games.service';
import {AlertService} from '../../shared/alert.service';

@Component({
	selector: 'app-edit-review',
	templateUrl: './edit-review.component.html',
	styleUrls: ['./edit-review.component.css']
})
export class EditReviewComponent implements OnInit, OnDestroy {
	review: any;
	videoGames = [];
	loading = false;
	private videoGameListSubs: Subscription;
	
	constructor(private reviewsService: ReviewsService,
	            private videoGamesService: VideoGamesService,
	            private route: ActivatedRoute,
	            private router: Router,
	            private alertService: AlertService) {
	}
	
	ngOnInit(): void {
		this.route.params.subscribe((params: Params) => {
			if (params.reviewId) {
				this.loading = true;
				
				this.reviewsService.getReview(params.reviewId).then(review => {
					this.review = review;
					console.log(review);
					this.loading = false;
				}).catch(() => {
					this.loading = false;
				});
			} else {
				this.review = {};
			}
		});
		
		this.videoGameListSubs = this.videoGamesService.videoGamesChanged.subscribe(videoGames => {
			this.videoGames = videoGames;
		});
		
		this.videoGamesService.fetchVideoGames();
	}
	
	ngOnDestroy(): void {
		this.videoGameListSubs.unsubscribe();
	}
	
	createReview(title: string, rating: number, body: string, videoGameId: string) {
		this.loading = true;
		
		this.reviewsService.createReview(title, rating, body, videoGameId).then(() => {
			this.loading = false;
			this.router.navigate(['/']);
		}).catch(err => {
			this.loading = false;
		});
	}
	
	editReview(title: string, rating: number, body: string, videoGameId: string) {
		this.loading = true;
		
		this.reviewsService.editReview(this.review._id, title, rating, body, videoGameId).then(response => {
			this.loading = false;
			
			this.alertService.show(response.message, 'success');
			
			setTimeout(() => {
				this.router.navigate(['/review-details/' + this.review._id]);
			}, 1000);
		}).catch(err => {
			this.loading = false;
		});
	}
	
	onReviewSubmit(): void {
		const title = this.review.title;
		const rating = this.review.rating;
		const body = this.review.body;
		const videoGameId = this.review.videoGameId;
		
		if (this.review._id) {
			this.editReview(title, rating, body, videoGameId);
		} else {
			this.createReview(title, rating, body, videoGameId);
		}
	}
	
	onDeleteButtonClicked(): void {
		this.loading = true;
		
		this.reviewsService.deleteReview(this.review._id).then(() => {
			this.loading = false;
			
			this.alertService.show('Review Deleted Successfully', 'warning');
			
			setTimeout(() => {
				this.router.navigate(['/']);
			}, 1000);
		}).catch(err => {
			this.loading = false;
		});
	}
}
