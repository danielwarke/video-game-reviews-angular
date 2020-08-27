import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {VideoGamesModule} from './video-games/video-games.module';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {ReviewsModule} from './reviews/reviews.module';
import {AuthModule} from './auth/auth.module';
import {UserModule} from './user/user.module';
import {EditReviewModule} from './reviews/edit-review/edit-review.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		VideoGamesModule,
		ReviewsModule,
		AuthModule,
		UserModule,
		SharedModule,
		BrowserAnimationsModule,
		NgbModule,
		CoreModule,
		MatSidenavModule,
		MatListModule,
		MatIconModule,
		EditReviewModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
