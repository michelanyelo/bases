import {Component, computed, signal} from '@angular/core';
import {UpperCasePipe} from '@angular/common';

@Component({
  templateUrl: './hero-page.component.html',
  imports: [
    UpperCasePipe
  ]
})
export class HeroComponent {
  name = signal('Ironman');
  age = signal(45);

  // getHeroDescription() {
  //   return `${this.name()} - ${this.age()}`;
  // }

  heroDescription = computed(() => {
    return `${this.name()} - ${this.age()}`;
  });

  capitalizedName = computed(() => this.name().toUpperCase());

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge() {
    this.age.set(60);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

}


