import {Component} from '@angular/core';

@Component({
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter = 10;

  increaseBy(value: number) {
    this.counter += value;
  }

  decreaseBy(value: number) {
    this.counter -= value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
