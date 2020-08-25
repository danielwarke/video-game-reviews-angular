import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DataService} from './data.service';
import {AlertService} from './alert.service';
import {ErrorService} from './error.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatSnackBarModule
	],
	providers: [
		DataService,
		AlertService,
		ErrorService
	]
})
export class SharedModule {
}
