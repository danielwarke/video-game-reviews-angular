import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ReviewsService} from '../reviews.service';

@Component({
	selector: 'app-review-details',
	templateUrl: './review-details.component.html',
	styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit {
	review: any;
	
	constructor(private reviewsService: ReviewsService,
	            private route: ActivatedRoute,
	            private router: Router) {
	}
	
	ngOnInit(): void {
		this.route.params.subscribe((params: Params) => {
			this.reviewsService.getReview(params.id).then(review => {
				this.review = review;
			});
		});
	}
	
	onUserReviewsClicked() {
		this.router.navigate(['/reviews'], { queryParams: { user: this.review.creator._id } });
	}
	
	editReview() {
		this.router.navigate(['/reviews/edit']);
	}
	
}
