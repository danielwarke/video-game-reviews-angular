import {Injectable} from '@angular/core';
import {AlertService} from './alert.service';

@Injectable({
	providedIn: 'root'
})
export class ErrorService {
	constructor(private alertService: AlertService) {
	}
	
	handleError(err) {
		console.log('ERROR', err);
		
		const error = err.response && err.response.data ? err.response.data : {};
		let message = error.data && error.data.length && error.data[0].msg ? error.data[0].msg : error.message;
		
		if (!message) {
			message = err.error && err.error.message ? err.error.message : null;
		}
		
		if (!message) {
			message = 'Something went wrong!';
		}
		
		this.alertService.show(message, 'error');
	}
}
