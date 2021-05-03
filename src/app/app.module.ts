import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './modules/about/about.component';
import { ImageComponent } from './modules/about/components/image/image.component';
import { ParagraphComponent } from './modules/about/components/paragraph/paragraph.component';
import { FrontEndComponent } from './modules/dev/components/front-end/front-end.component';
import { BackEndComponent } from './modules/dev/components/back-end/back-end.component';
import { HomeComponent } from './modules/home/home.component';
import { BlogComponent } from './modules/blog/blog.component';
import { PostComponent } from './modules/blog/components/post/post.component';
import { LayoutComponent } from './layout/layout.component';
import { GameComponent } from './modules/game/game.component';
import { PlayComponent } from './modules/game/play/play.component';
import { HistoryComponent } from './modules/game/history/history.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ImageComponent,
    ParagraphComponent,
    FrontEndComponent,
    BackEndComponent,
    HomeComponent,
    BlogComponent,
    PostComponent,
    LayoutComponent,
    GameComponent,
    PlayComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
