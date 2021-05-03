import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './modules/about/about.component';
import { HomeComponent } from './modules/home/home.component';
import { BlogComponent } from './modules/blog/blog.component';
import { LayoutComponent } from './layout/layout.component';
import { FrontEndComponent } from './modules/dev/components/front-end/front-end.component';
import { BackEndComponent } from './modules/dev/components/back-end/back-end.component';
import { PlayComponent } from './modules/game/play/play.component';
import { HistoryComponent } from './modules/game/history/history.component'
import { compileComponentFromMetadata } from '@angular/compiler';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
      { path: '', component: HomeComponent},
      { path: 'about', component: AboutComponent},
      { path: 'blog', component: BlogComponent},
      { path: 'dev/front-end', component: FrontEndComponent},
      { path: 'dev/back-end', component: BackEndComponent},
      { path: 'game/play', component: PlayComponent},
      { path: 'game/history', component: HistoryComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutComponent, BlogComponent, FrontEndComponent, BackEndComponent, PlayComponent, HistoryComponent]
