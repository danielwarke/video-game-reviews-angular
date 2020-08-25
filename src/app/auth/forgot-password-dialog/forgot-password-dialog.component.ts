import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
	selector: 'app-forgot-password-dialog',
	templateUrl: 'forgot-password-dialog.component.html',
})
export class ForgotPasswordDialogComponent {
	constructor(public dialogRef: MatDialogRef<ForgotPasswordDialogComponent>) {}
	
	onNoClick(): void {
		this.dialogRef.close(false);
	}
}
