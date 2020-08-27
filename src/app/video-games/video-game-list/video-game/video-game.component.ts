import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
	selector: 'app-video-game',
	templateUrl: './video-game.component.html',
	styleUrls: ['./video-game.component.css']
})
export class VideoGameComponent implements OnInit {
	@Input() videoGame: any;

	constructor(private router: Router) {
	}

	ngOnInit(): void {
	}
	
	seeVideoGameReviews() {
		this.router.navigate(['/reviews/'], { queryParams: { videoGame: this.videoGame._id } });
	}

}
