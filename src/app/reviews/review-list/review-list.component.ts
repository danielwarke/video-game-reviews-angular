import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ReviewsService} from '../reviews.service';

@Component({
	selector: 'app-review-list',
	templateUrl: './review-list.component.html',
	styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit, OnDestroy {
	reviewList: any[];
	private reviewListSubs: Subscription;
	loading = false;

	constructor(private reviewsService: ReviewsService) {
	}

	ngOnInit(): void {
		console.log('INIT REVIEWS');

		this.reviewListSubs = this.reviewsService.reviewsChanged.subscribe(reviews => {
			this.reviewList = reviews;
		});

		this.loading = true;
		this.reviewsService.fetchReviews().then(() => {
			this.loading = false;
		}).catch(() => {
			this.loading = false;
		});
	}

	ngOnDestroy(): void {
		this.reviewListSubs.unsubscribe();
	}

}
