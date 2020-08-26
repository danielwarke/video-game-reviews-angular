import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	production = false;
	baseUrl = this.production ? 'https://video-game-reviews-backend.herokuapp.com' : 'http://localhost:8080';

	constructor(private http: HttpClient) {
	}
	
	getAuthHttpOptions() {
		const token = localStorage.getItem('token');
		
		if (!token) {
			console.warn('Token is undefined');
			return;
		}
		
		const authHeaders = {
			Authorization: 'Bearer ' + token
		};
		
		return {
			headers: new HttpHeaders(authHeaders)
		};
	}

	get(url, auth = false): Promise<any> {
		let headers;
		
		if (auth) {
			headers = this.getAuthHttpOptions();
		}
		
		return new Promise((resolve, reject) => {
			this.http.get<any>(`${this.baseUrl}${url}`, headers).subscribe(response => {
				resolve(response);
			}, err => {
				reject(err);
			});
		});
	}
	
	put(url, body, auth = false): Promise<any> {
		let headers;
		
		if (auth) {
			headers = this.getAuthHttpOptions();
		}
		
		return new Promise((resolve, reject) => {
			this.http.put<any>(`${this.baseUrl}${url}`, body, headers).subscribe(response => {
				resolve(response);
			}, err => {
				reject(err);
			});
		});
	}
	
	post(url, body, auth = false): Promise<any> {
		let headers;
		
		if (auth) {
			headers = this.getAuthHttpOptions();
		}
		
		return new Promise((resolve, reject) => {
			this.http.post<any>(`${this.baseUrl}${url}`, body, headers).subscribe(response => {
				resolve(response);
			}, err => {
				reject(err);
			});
		});
	}
}
