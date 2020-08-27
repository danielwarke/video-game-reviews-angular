import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ReviewsService} from '../reviews.service';
import {AuthService} from '../../auth/auth.service';

@Component({
	selector: 'app-review-details',
	templateUrl: './review-details.component.html',
	styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit {
	review: any;
	loading = false;
	isCreator = false;
	
	constructor(private reviewsService: ReviewsService,
	            private route: ActivatedRoute,
	            private router: Router,
	            private authService: AuthService) {
	}
	
	ngOnInit(): void {
		this.route.params.subscribe((params: Params) => {
			this.loading = true;
			
			this.reviewsService.getReview(params.reviewId).then(review => {
				this.review = review;
				if (review.creator._id === this.authService.userId) {
					this.isCreator = true;
				}
				
				this.loading = false;
			}).catch(() => {
				this.loading = false;
			});
		});
	}
	
	onEditReviewClicked() {
		this.router.navigate(['/review/' + this.review._id + '/edit']);
	}
	
	onUserReviewsClicked() {
		this.router.navigate(['/reviews'], { queryParams: { user: this.review.creator._id } });
	}
	
}
