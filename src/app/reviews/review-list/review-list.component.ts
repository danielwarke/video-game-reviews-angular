import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ReviewsService} from '../reviews.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
	selector: 'app-review-list',
	templateUrl: './review-list.component.html',
	styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit, OnDestroy {
	reviewList: any[];
	userFilter: string;
	videoGameFilter: string;
	isLoggedIn = false;
	
	private reviewListSubs: Subscription;
	loading = false;

	constructor(private reviewsService: ReviewsService,
	            private route: ActivatedRoute,
	            private router: Router,
	            private authService: AuthService) {
	}

	ngOnInit(): void {
		const token = this.authService.getToken();
		this.isLoggedIn = !!token;
		
		this.reviewListSubs = this.reviewsService.reviewsChanged.subscribe(reviews => {
			this.reviewList = reviews;
		});
		
		this.route.queryParams.subscribe(params => {
			this.userFilter = params.user;
			this.videoGameFilter = params.videoGame;
		});

		this.getReviews();
	}
	
	getReviews() {
		let url: string;
		
		if (this.userFilter) {
			url = '/user/reviews/' + this.userFilter;
		}
		
		if (this.videoGameFilter) {
			url = '/video-games/' + this.videoGameFilter + '/reviews';
		}
		
		this.loading = true;
		this.reviewsService.fetchReviews(url).then(() => {
			this.loading = false;
		}).catch(() => {
			this.loading = false;
		});
	}
	
	onWriteNewReviewClicked() {
		if (this.isLoggedIn) {
			this.router.navigate(['/review/create']);
		} else {
			this.router.navigate(['/auth']);
		}
	}

	ngOnDestroy(): void {
		this.reviewListSubs.unsubscribe();
	}

}
