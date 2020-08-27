import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DataService} from './data.service';
import {AlertService} from './alert.service';
import {ErrorService} from './error.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import {StarRatingComponent} from './star-rating/star-rating.component';

@NgModule({
	declarations: [
		StarRatingComponent
	],
	imports: [
		CommonModule,
		MatSnackBarModule,
		NgbRatingModule
	],
	providers: [
		DataService,
		AlertService,
		ErrorService
	],
	exports: [
		StarRatingComponent
	]
})
export class SharedModule {
}
