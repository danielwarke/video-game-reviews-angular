import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthService} from '../../../auth/auth.service';
import {CommentsService} from '../../comments.service';
import {NgForm} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {DeleteCommentDialogComponent} from './delete-comment-dialog/delete-comment-dialog.component';

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
	@Input() comment: any;
	@Input() loading: boolean;
	@Output() commentDeleted = new EventEmitter<any>();
	@Output() commentEdited = new EventEmitter<any>();
	
	isCreator = false;
	isWriting = false;
	
	constructor(private authService: AuthService,
	            private commentsService: CommentsService,
	            private dialog: MatDialog) {
	}
	
	ngOnInit(): void {
		console.log(this.comment);
		
		if (this.authService.username === this.comment.creator.username) {
			this.isCreator = true;
		}
	}
	
	deleteComment() {
		this.loading = true;
		
		this.commentsService.deleteComment(this.comment.review, this.comment._id).then(response => {
			this.loading = false;
			this.commentDeleted.emit(this.comment._id);
		}).catch(() => {
			this.loading = false;
		});
	}
	
	onDeleteButtonClicked(): void {
		const dialogRef = this.dialog.open(DeleteCommentDialogComponent);
		
		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.deleteComment();
			}
		});
	}
	
	editComment(form: NgForm) {
		this.loading = true;
		
		const newBody = form.value.newBody;
		
		this.commentsService.updateComment(this.comment.review, this.comment._id, newBody).then(response => {
			this.loading = false;
			this.isWriting = false;
			this.commentEdited.emit({
				_id: this.comment._id,
				body: newBody
			});
		}).catch(() => {
			this.loading = false;
		});
	}
	
}
