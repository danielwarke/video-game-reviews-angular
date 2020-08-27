import {Component} from '@angular/core';
import {AuthService} from './auth/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	sidenavOpen = false;
	menuLinks = this.getMenuLinks();
	
	constructor(private authService: AuthService) {
	}
	
	getMenuLinks() {
		const token = this.authService.getToken();
		
		const menuLinks = [
			{
				sectionBreak: false,
				path: '',
				label: 'Latest Reviews',
				icon: 'stars'
			},
			{
				sectionBreak: false,
				path: '/video-games',
				label: 'Video Games',
				icon: 'videogame_asset'
			}
		];
		
		if (!!token) {
			menuLinks.push({
				sectionBreak: false,
				path: '/review/create',
				label: 'Write New Review',
				icon: 'create'
			});
		}
		
		menuLinks.push({
			sectionBreak: true,
			path: '/about',
			label: 'About',
			icon: 'info'
		});
		
		return menuLinks;
	}

	toggleSideNav(): void {
		this.sidenavOpen = !this.sidenavOpen;
	}

	onMenuLinkClicked(): void {
		this.sidenavOpen = false;
	}
}
