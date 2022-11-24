import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeroesModule} from "./heroes/heroes.module";
import {CounterModule} from "./counter/counter.module";
import {DragonBallModule} from "./dragon-ball/dragon-ball.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    CounterModule,
    DragonBallModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
