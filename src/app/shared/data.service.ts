import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	production = false;
	baseUrl = this.production ? 'https://video-game-reviews-backend.herokuapp.com' : 'http://localhost:8080';

	constructor(private http: HttpClient) {
	}

	get(url, auth = false): Promise<any> {
		return new Promise((resolve, reject) => {
			this.http.get<any>(`${this.baseUrl}${url}`).subscribe(response => {
				resolve(response);
			}, err => {
				reject(err);
			});
		});
	}
	
	put(url, body, auth = false): Promise<any> {
		return new Promise((resolve, reject) => {
			this.http.put<any>(`${this.baseUrl}${url}`, body).subscribe(response => {
				resolve(response);
			}, err => {
				reject(err);
			});
		});
	}
	
	post(url, body, auth = false): Promise<any> {
		return new Promise((resolve, reject) => {
			this.http.post<any>(`${this.baseUrl}${url}`, body).subscribe(response => {
				resolve(response);
			}, err => {
				reject(err);
			});
		});
	}
}
