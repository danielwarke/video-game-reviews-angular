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

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		VideoGamesModule,
		ReviewsModule,
		SharedModule,
		BrowserAnimationsModule,
		NgbModule,
		CoreModule,
		MatSidenavModule,
		MatListModule,
		MatIconModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
