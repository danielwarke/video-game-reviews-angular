import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoGameListComponent } from './video-games/video-game-list/video-game-list.component';

const routes: Routes = [
    {
        path: 'video-games',
        component: VideoGameListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
