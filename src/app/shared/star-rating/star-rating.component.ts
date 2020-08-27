import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
	selector: 'app-star-rating',
	templateUrl: './star-rating.component.html',
	styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
	@Input() rating: number;
	@Input() readonly: boolean;
	@Output() ratingChanged = new EventEmitter<any>();
	
	constructor() {
	}
	
	ngOnInit(): void {
	}
	
	onRateChanged(newValue) {
		this.ratingChanged.emit(newValue);
	}
}
