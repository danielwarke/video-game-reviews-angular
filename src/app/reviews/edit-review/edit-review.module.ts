import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {EditReviewComponent} from './edit-review.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
	declarations: [EditReviewComponent],
	imports: [
		CommonModule,
		MatProgressSpinnerModule,
		FormsModule,
		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatFormFieldModule,
		MatSelectModule,
		BrowserAnimationsModule,
		SharedModule
	]
})
export class EditReviewModule {
}
