import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VideoGameListComponent} from './video-games/video-game-list/video-game-list.component';
import {ReviewListComponent} from './reviews/review-list/review-list.component';
import {ReviewDetailsComponent} from './reviews/review-details/review-details.component';
import {AboutComponent} from './about/about.component';
import {AuthComponent} from './auth/auth.component';
import {UserComponent} from './user/user.component';
import {EditReviewComponent} from './reviews/edit-review/edit-review.component';

const routes: Routes = [
	{
		path: '',
		component: ReviewListComponent
	},
	{
		path: 'reviews',
		component: ReviewListComponent
	},
	{
		path: 'review-details/:reviewId',
		component: ReviewDetailsComponent
	},
	{
		path: 'review/:reviewId/edit',
		component: EditReviewComponent
	},
	{
		path: 'video-games',
		component: VideoGameListComponent
	},
	{
		path: 'auth',
		component: AuthComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'user',
		component: UserComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
