import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {AuthComponent} from './auth.component';
import {AuthService} from './auth.service';
import {SharedModule} from '../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {ForgotPasswordDialogComponent} from './forgot-password-dialog/forgot-password-dialog.component';

@NgModule({
	declarations: [
		AuthComponent,
		ForgotPasswordDialogComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		HttpClientModule,
		BrowserModule,
		RouterModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatDialogModule,
		FormsModule
	],
	providers: [AuthService]
})
export class AuthModule {
}
