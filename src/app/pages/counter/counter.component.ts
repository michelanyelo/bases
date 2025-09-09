import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter = 20;
  counterSignal = signal(20);

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  decreaseBy(value: number) {
    this.counter -= value;
    this.counterSignal.update((current) => current - value);
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
