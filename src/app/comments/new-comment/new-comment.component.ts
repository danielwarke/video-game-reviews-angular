import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommentsService} from '../comments.service';
import {AlertService} from '../../shared/alert.service';
import {AuthService} from '../../auth/auth.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
	selector: 'app-new-comment',
	templateUrl: './new-comment.component.html',
	styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {
	@Input() reviewId: string;
	@Output() commentCreated = new EventEmitter<any>();
	isWriting = false;
	loading = false;
	isAuth = false;
	
	constructor(private commentsService: CommentsService,
	            private alertService: AlertService,
	            private authService: AuthService,
	            private router: Router) {
	}
	
	ngOnInit(): void {
		const token = this.authService.getToken();
		this.isAuth = !!token;
	}
	
	createComment(form: NgForm) {
		const newComment = form.value.comment;
		
		if (!newComment) {
			return;
		}
		
		this.commentsService.createComment(this.reviewId, newComment).then(response => {
			this.loading = false;
			form.reset();
			this.isWriting = false;
			
			this.alertService.show('Your comment has been added.', 'success');
			
			const comment = response.comment;
			comment.creator = response.creator;
			
			this.commentCreated.emit(comment);
		});
		
		this.loading = true;
	}
	
	writeCommentButtonHandler() {
		if (this.isAuth) {
			this.isWriting = true;
		} else {
			this.router.navigate(['/auth']);
		}
	}
	
}
