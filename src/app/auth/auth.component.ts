import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

import {ForgotPasswordDialogComponent} from './forgot-password-dialog/forgot-password-dialog.component';
import {AlertService} from '../shared/alert.service';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
	isSignup = false;
	loading = false;
	
	constructor(public dialog: MatDialog,
	            private alertService: AlertService,
	            private authService: AuthService,
	            private router: Router) {
	}
	
	ngOnInit(): void {
	}
	
	onAuthSubmit(form: NgForm) {
		const email = form.value.email;
		const username = form.value.username;
		const password = form.value.password;
		
		if (this.isSignup) {
		
		} else {
			this.login(email, password);
		}
	}
	
	toggleSignup(): void {
		this.isSignup = !this.isSignup;
	}
	
	forgotPasswordButtonHandler(form: NgForm): void {
		const email = form.value.email;
		if (!email) {
			this.alertService.show('Please enter an email address first.', 'warning');
			return;
		}
		
		const dialogRef = this.dialog.open(ForgotPasswordDialogComponent);
		
		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.forgotPassword(email);
			}
		});
	}
	
	forgotPassword(email: string) {
		this.loading = true;
		
		this.authService.forgotPassword(email).then(() => {
			this.loading = false;
		}).catch(() => {
			this.loading = false;
		});
	}
	
	login(email: string, password: string) {
		this.loading = true;
		
		this.authService.login(email, password).then(() => {
			this.router.navigate(['/reviews']);
			this.loading = false;
		}).catch(() => {
			this.loading = false;
		});
	}
	
}
