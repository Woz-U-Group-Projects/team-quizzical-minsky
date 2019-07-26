import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GameChoiceComponent } from './game-choice/game-choice.component';
import { RpsComponent } from './rps/rps.component';
import { TttComponent } from './ttt/ttt.component';

const routes: Routes = [
  {
    path: 'game',
    component: GameChoiceComponent
  },
  {
    path: 'rps',
    component: RpsComponent
  },
  {
    path: 'ttt',
    component: TttComponent
  },
  {
    path: '',
    redirectTo: '/game',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
