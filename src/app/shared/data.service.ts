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

	get(url, auth): Promise<any> {
		return new Promise((resolve, reject) => {
			this.http.get<any>(`${this.baseUrl}${url}`).subscribe(response => {
				console.log(response);
				resolve(response);
			}, err => {
				reject(err);
			});
		});
	}
}
