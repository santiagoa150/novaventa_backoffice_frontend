import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {MainPageComponent} from "./ui/main-page/main.page.component";
import {AllCharactersComponent} from "./ui/characters/all/all-characters.component";
import {CreateCharacterComponent} from "./ui/characters/create/create-character.component";
import {DragonBallService} from "./infrastructure/services/dragon-ball.service";

@NgModule({
    declarations: [
        MainPageComponent,
        AllCharactersComponent,
        CreateCharacterComponent,
    ],
  exports: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    DragonBallService,
  ]
})
export class DragonBallModule {
}
