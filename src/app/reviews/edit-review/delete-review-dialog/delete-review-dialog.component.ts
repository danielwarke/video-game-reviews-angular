import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
	selector: 'app-delete-review-dialog',
	templateUrl: 'delete-review-dialog.component.html',
})
export class DeleteReviewDialogComponent {
	constructor(public dialogRef: MatDialogRef<DeleteReviewDialogComponent>) {}
	
	onNoClick(): void {
		this.dialogRef.close(false);
	}
}
