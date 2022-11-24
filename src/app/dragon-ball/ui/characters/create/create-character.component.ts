import {Component} from "@angular/core";
import {Character} from "../../../domain/Character";
import {DragonBallService} from "../../../infrastructure/services/dragon-ball.service";

@Component({
  selector: 'create-character-component',
  templateUrl: 'create-character.component.html',
  styleUrls: ['create-character.component.scss',
    '../../main-page/main-page.component.scss']
})
export class CreateCharacterComponent {

  constructor(
    private readonly dbService: DragonBallService,
  ) {
  }

  public newCharacter: Character = {
    name: '',
    power: 0
  }
  public createCharacter = () => {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }
    this.dbService.createCharacter(this.newCharacter);
    this.newCharacter = {
      name: '',
      power: 0
    };
  }
}
