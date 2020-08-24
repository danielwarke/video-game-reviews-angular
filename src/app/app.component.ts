import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    sidenavOpen = false;
    title = 'Video Game Reviews';
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
        }
    ];

    toggleSideNav(): void {
        this.sidenavOpen = !this.sidenavOpen;
    }
}
