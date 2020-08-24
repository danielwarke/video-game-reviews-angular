import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {ReviewListComponent} from './review-list/review-list.component';
import {ReviewComponent} from './review-list/review/review.component';
import {MatCardModule} from '@angular/material/card';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {ReviewsService} from './reviews.service';

@NgModule({
	declarations: [
		ReviewListComponent,
		ReviewComponent
	],
	imports: [
		CommonModule,
		MatProgressSpinnerModule,
		MatCardModule,
		SharedModule,
		HttpClientModule,
		BrowserModule
	],
	providers: [ReviewsService]
})
export class ReviewsModule {
}
