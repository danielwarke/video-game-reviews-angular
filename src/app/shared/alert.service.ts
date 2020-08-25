import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
	providedIn: 'root'
})
export class AlertService {
	snackBarRef;
	
	constructor(private snackBar: MatSnackBar) {
	}
	
	show(message: string, type: string = 'default', duration = 5000) {
		if (this.snackBarRef) {
			this.snackBarRef.dismiss();
		}
		
		const options = {
			duration,
			panelClass: ''
		};
		
		switch (type) {
			case 'success':
				options.panelClass = 'alert-success';
				break;
			case 'warning':
				options.panelClass = 'alert-warning';
				break;
			case 'error':
				options.panelClass = 'alert-error';
				break;
		}
		
		this.snackBarRef = this.snackBar.open(message, 'Close', options);
	}
}
