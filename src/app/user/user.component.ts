import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {AlertService} from '../shared/alert.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	username: string;
	email: string;
	isChangingPassword = false;
	loading = false;
	
	constructor(private authService: AuthService,
	            private router: Router,
	            private alertService: AlertService) {
	}
	
	ngOnInit(): void {
		this.username = this.authService.username;
		this.email = this.authService.email;
	}
	
	userReviewsButtonHandler() {
		this.router.navigate(['/reviews'], { queryParams: { user: this.authService.userId } });
	}
	
	onChangePasswordSubmit(form: NgForm) {
		const currentPassword = form.value.currentPassword;
		const newPassword1 = form.value.newPassword1;
		const newPassword2 = form.value.newPassword2;
		
		if (newPassword1 !== newPassword2) {
			this.alertService.show('Passwords do not match!', 'warning');
			return;
		}
		
		this.loading = true;
		
		this.authService.changePassword(currentPassword, newPassword1).then(response => {
			this.loading = false;
			this.alertService.show(response.message, 'success');
			this.isChangingPassword = false;
			form.reset();
		}).catch(() => {
			this.loading = false;
		});
	}
}
