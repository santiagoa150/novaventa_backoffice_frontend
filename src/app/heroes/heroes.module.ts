import { CommonModule } from "@angular/common";
import {NgModule} from "@angular/core";
import {HeroesComponent} from "./all/heroes.component";

@NgModule({
  declarations: [
    HeroesComponent,
  ],
  exports: [
    HeroesComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class HeroesModule{
}
