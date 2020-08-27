import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/auth.service';
import {CommentsService} from '../../comments.service';

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
	@Input() comment: any;
	@Input() loading: boolean;
	isCreator = false;
	isWriting = false;
	
	constructor(private authService: AuthService,
	            private commentsService: CommentsService) {
	}
	
	ngOnInit(): void {
		console.log(this.comment);
		
		if (this.authService.username === this.comment.creator.username) {
			this.isCreator = true;
		}
	}
	
	deleteComment() {
		this.loading = true;
		
		this.commentsService.deleteComment(this.comment.review, this.comment._id).then();
	}
	
}
