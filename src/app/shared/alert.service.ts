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
			panelClass: ['alert']
		};
		
		switch (type) {
			case 'success':
				options.panelClass.push('alert-success');
				break;
			case 'warning':
				options.panelClass.push('alert-warning');
				break;
			case 'error':
				options.panelClass.push('alert-error');
				break;
		}
		
		this.snackBarRef = this.snackBar.open(message, null, options);
	}
}
