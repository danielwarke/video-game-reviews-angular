import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

import {DataService} from '../shared/data.service';
import {AlertService} from '../shared/alert.service';
import {ErrorService} from '../shared/error.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	hasToken = new Subject<boolean>();
	usernameChanged = new Subject<string>();
	
	private token: string;
	userId: string;
	username: string;
	email: string;
	private isAdmin = false;
	
	constructor(private dataService: DataService,
	            private alertService: AlertService,
	            private errorService: ErrorService) {
	}
	
	signUp(email: string, username: string, password: string) {
		return new Promise((resolve, reject) => {
			this.dataService.put('/signup', { email, username, password }).then(response => {
				this.alertService.show(response.message, 'success');
				resolve(response);
			}).catch(err => {
				this.errorService.handleError(err);
				reject(err);
			});
		});
	}
	
	login(email: string, password: string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.dataService.post('/login', { email, password }).then(response => {
				
				localStorage.setItem('token', response.token);
				localStorage.setItem('userId', response.userId);
				localStorage.setItem('username', response.username);
				localStorage.setItem('email', response.email);
				localStorage.setItem('admin', response.admin);
				
				const expirationDate = new Date(new Date().getTime() + (+response.expiresIn * 60 * 1000));
				localStorage.setItem('expirationDate', expirationDate.toISOString());
				
				this.token = response.token;
				this.userId = response.userId;
				this.username = response.username;
				this.email = response.email;
				this.isAdmin = response.admin;
				
				this.usernameChanged.next(this.username);
				this.hasToken.next(true);
				
				resolve(response);
			}).catch(err => {
				this.errorService.handleError(err);
				reject(err);
			});
		});
	}
	
	logout() {
		localStorage.removeItem('token');
		localStorage.removeItem('userId');
		localStorage.removeItem('username');
		localStorage.removeItem('email');
		localStorage.removeItem('admin');
		localStorage.removeItem('expirationDate');
		
		this.token = null;
		this.userId = null;
		this.username = null;
		this.email = null;
		this.isAdmin = false;
		
		this.usernameChanged.next(null);
		this.hasToken.next(false);
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
	
	checkState() {
		const token = localStorage.getItem('token');
		
		if (!token) {
			this.logout();
			return false;
		}
		
		const expirationDate = new Date(localStorage.getItem('expirationDate'));
		if (expirationDate > new Date()) {
			const userId = localStorage.getItem('userId');
			const isAdmin = localStorage.getItem('admin');
			const username = localStorage.getItem('username');
			const email = localStorage.getItem('email');
			
			this.token = token;
			this.userId = userId;
			this.username = username;
			this.email = email;
			this.isAdmin = isAdmin === 'true';
			
			this.usernameChanged.next(this.username);
			this.hasToken.next(true);
			
			return true;
		} else {
			this.logout();
			return false;
		}
	}
}
