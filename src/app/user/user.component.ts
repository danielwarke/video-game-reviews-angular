import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	username: string;
	email: string;
	isChangingPassword = false;
	
	constructor(private authService: AuthService,
	            private router: Router) {
	}
	
	ngOnInit(): void {
		this.username = this.authService.username;
		this.email = this.authService.email;
	}
	
	userReviewsButtonHandler() {
		this.router.navigate(['/reviews'], { queryParams: { user: this.authService.userId } });
	}
}
