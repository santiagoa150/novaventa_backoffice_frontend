import {Component, Input} from "@angular/core";
import {Character} from "../../../domain/Character";
import {DragonBallService} from "../../../infrastructure/services/dragon-ball.service";

@Component({
  selector: 'all-characters',
  templateUrl: 'all-characters.component.html',
  styleUrls: [
    'all-characters.component.scss',
    '../../main-page/main-page.component.scss'
  ]
})
export class AllCharactersComponent{

  constructor(
    private readonly dbService: DragonBallService,
  ) {
  }

  get characters (): Array<Character> {
    return this.dbService.getCharacters;
  };
}
