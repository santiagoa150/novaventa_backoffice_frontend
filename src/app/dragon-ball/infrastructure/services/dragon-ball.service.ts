import {Injectable} from "@angular/core";
import {Character} from "../../domain/Character";

@Injectable()
export class DragonBallService {
  constructor() {
  }

  private _characters: Array<Character> = [
    {
      name: 'Goku',
      power: 10000,
    },
    {
      name: 'Picoro',
      power: 9999,
    }
  ]
  get getCharacters(): Character[] {
    return [...this._characters];
  }

  public createCharacter = (newCharacter: Character) => {
    this._characters.push(newCharacter);
  }
}
