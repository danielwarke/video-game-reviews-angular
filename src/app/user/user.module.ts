import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserModule} from '@angular/platform-browser';

import {UserComponent} from './user.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
	declarations: [
		UserComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		SharedModule,
		RouterModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule
	]
})
export class UserModule {}
