import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ReviewsService} from '../reviews.service';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector: 'app-review-list',
	templateUrl: './review-list.component.html',
	styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit, OnDestroy {
	reviewList: any[];
	userFilter: string;
	private reviewListSubs: Subscription;
	loading = false;

	constructor(private reviewsService: ReviewsService,
	            private route: ActivatedRoute) {
	}

	ngOnInit(): void {
		this.reviewListSubs = this.reviewsService.reviewsChanged.subscribe(reviews => {
			this.reviewList = reviews;
		});
		
		this.route.queryParams.subscribe(params => {
			this.userFilter = params.user;
		});

		this.getReviews();
	}
	
	getReviews() {
		let url: string;
		
		if (this.userFilter) {
			url = '/user/reviews/' + this.userFilter;
		}
		
		this.loading = true;
		this.reviewsService.fetchReviews(url).then(() => {
			this.loading = false;
		}).catch(() => {
			this.loading = false;
		});
	}

	ngOnDestroy(): void {
		this.reviewListSubs.unsubscribe();
	}

}
