import {Component} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	sidenavOpen = false;
	menuLinks = [
		{
			path: '',
			label: 'Latest Reviews',
			icon: 'stars'
		},
		{
			path: '/video-games',
			label: 'Video Games',
			icon: 'videogame_asset'
		},
		{
			sectionBreak: true,
			path: '/about',
			label: 'About',
			icon: 'info'
		}
	];

	toggleSideNav(): void {
		this.sidenavOpen = !this.sidenavOpen;
	}

	onMenuLinkClicked(): void {
		this.sidenavOpen = false;
	}
}
