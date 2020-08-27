import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
	selector: 'app-delete-comment-dialog',
	templateUrl: 'delete-comment-dialog.component.html',
})
export class DeleteCommentDialogComponent {
	constructor(public dialogRef: MatDialogRef<DeleteCommentDialogComponent>) {}
	
	onNoClick(): void {
		this.dialogRef.close(false);
	}
}
