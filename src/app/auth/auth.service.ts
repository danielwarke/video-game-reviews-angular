import {Injectable} from '@angular/core';

import {DataService} from '../shared/data.service';
import {AlertService} from '../shared/alert.service';
import {ErrorService} from '../shared/error.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	
	constructor(private dataService: DataService,
	            private alertService: AlertService,
	            private errorService: ErrorService) {
	}
	
	login(email: string, password: string) {
		return new Promise((resolve, reject) => {
			this.dataService.post('/login', { email, password }).then(response => {
				this.alertService.show(response.data.message, 'success');
				resolve(response);
			}).catch(err => {
				this.errorService.handleError(err);
				reject(err);
			});
		});
	}
	
	forgotPassword(email: string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.dataService.post('/forgot-password', { email }).then(response => {
				this.alertService.show(response.data.message, 'success');
				resolve(response);
			}).catch(err => {
				this.errorService.handleError(err);
				reject(err);
			});
		});
	}
}
