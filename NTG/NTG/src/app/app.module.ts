import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RpsComponent } from './rps/rps.component';
import { GameChoiceComponent } from './game-choice/game-choice.component';
import { TttComponent } from './ttt/ttt.component';

@NgModule({
  declarations: [
    AppComponent,
    RpsComponent,
    GameChoiceComponent,
    TttComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
