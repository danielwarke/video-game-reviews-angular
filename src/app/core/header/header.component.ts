import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	@Output() menuClickEvent = new EventEmitter<any>();
	isLoggedIn = false;

	constructor(private authService: AuthService,
	            private router: Router,
	            private location: Location) {
	}

	ngOnInit(): void {
		this.authService.hasToken.subscribe(hasToken => {
			this.isLoggedIn = hasToken;
		});
		
		this.authService.checkState();
	}

	onMenuClicked(): void {
		this.menuClickEvent.emit();
	}
	
	logoutButtonHandler(): void {
		this.authService.logout();
		this.router.navigate(['/auth']);
		this.location.replaceState('/auth');
	}

}
