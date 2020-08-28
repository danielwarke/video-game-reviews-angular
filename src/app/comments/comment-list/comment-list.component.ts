import {Component, Input, OnInit} from '@angular/core';
import {CommentsService} from '../comments.service';

@Component({
	selector: 'app-comment-list',
	templateUrl: './comment-list.component.html',
	styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
	@Input() reviewId: string;
	comments = [];
	loading = false;
	
	constructor(private commentsService: CommentsService) {
	}
	
	ngOnInit(): void {
		this.loading = true;
		
		this.commentsService.getComments(this.reviewId).then(response => {
			this.comments = response.comments;
			this.loading = false;
		}).catch(err => {
			this.loading = false;
		});
	}
	
	onCommentCreated(comment) {
		this.comments.push(comment);
	}
	
	onCommentDeleted(commentId: string) {
		this.comments = this.comments.filter(comment => {
			return comment._id !== commentId;
		});
	}
	
	onCommentEdited(updatedComment) {
		const commentId = updatedComment._id;
		const newBody = updatedComment.body;
		
		const commentIndex = this.comments.findIndex(comment => comment._id === commentId);
		this.comments[commentIndex].body = newBody;
	}
}
