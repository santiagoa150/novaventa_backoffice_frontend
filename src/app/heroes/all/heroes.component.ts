import {Component} from "@angular/core";

@Component({
  selector: 'heroes-component',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.scss'],
})
export class HeroesComponent {

  public newHero: string = '';
  public list: Array<string> = [
    'Batman',
    'Superman',
    'Spiderman',
    'Thor',
    'Hulk',
    'Captain America',
    'Captain America 2',
    'Captain America 3',
    'Captain America 4',
    'Captain America 5',
    'AntMan',
  ];
  public deleted = '';

  changeNewHero(newHero: string){
    this.newHero = newHero;
  }

  addValue(): void {
    this.list.push(this.newHero);
    this.newHero = '';
  }

  deleteOne(index: number): void {
    if (this.list[index]){
      this.deleted = this.list.splice(index, 1)[0] || '';
    }
  }
}
