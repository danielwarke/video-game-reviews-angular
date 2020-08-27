import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentListComponent} from './comment-list/comment-list.component';
import {CommentComponent} from './comment-list/comment/comment.component';
import {NewCommentComponent} from './new-comment/new-comment.component';
import {CommentsService} from './comments.service';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {DeleteCommentDialogComponent} from './comment-list/comment/delete-comment-dialog/delete-comment-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
	declarations: [
		CommentListComponent,
		CommentComponent,
		NewCommentComponent,
		DeleteCommentDialogComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		FormsModule,
		MatFormFieldModule,
		MatProgressSpinnerModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		MatInputModule,
		MatDialogModule
	],
	providers: [
		CommentsService
	],
	exports: [
		CommentListComponent
	]
})
export class CommentsModule {
}
