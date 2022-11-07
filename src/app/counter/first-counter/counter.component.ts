import {Component} from "@angular/core";

@Component({
  selector: 'counter-component',
  templateUrl: './counter.component.html',
  styleUrls: ['counter.component.scss'],
})
export class CounterComponent{
  public title: string = 'Counter Component';
  public number: number = 10;
  public base: number = 5;

  addValue (value: number): void {
    if(value > 0 || this.number != 0){
      this.number += value;
    }
  }
}
