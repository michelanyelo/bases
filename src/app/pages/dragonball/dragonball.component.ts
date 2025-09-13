import {Component, computed, signal} from '@angular/core';
import {NgClass} from '@angular/common';

interface Character {
  id: number;
  name: string;
  powerLevel: number;
}

@Component({
  imports: [
    NgClass
  ],
  templateUrl: './dragonball.component.html'
})
export class DragonballComponent {
  name = signal('');
  powerLevel = signal(0);

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', powerLevel: 9001},
    {id: 2, name: 'Vegeta', powerLevel: 8500},
    {id: 3, name: 'Gohan', powerLevel: 7000},
    {id: 4, name: 'Piccolo', powerLevel: 6500},
    {id: 5, name: 'Frieza', powerLevel: 9500},
    {id: 6, name: 'Cell', powerLevel: 8000},
    {id: 7, name: 'Majin Buu', powerLevel: 9200},
    {id: 8, name: 'Trunks', powerLevel: 6000},
    {id: 9, name: 'Krillin', powerLevel: 3000},
    {id: 10, name: 'Yamcha', powerLevel: 4000},
  ]);

  // con función + bootstrap
  getBadgeClass(character: Character) {
    if (character.powerLevel > 8000) {
      return 'bg-danger';   // rojo
    } else if (character.powerLevel > 5000) {
      return 'bg-success';  // amarillo/naranja
    } else {
      return 'bg-warning';  // verde
    }
  }

  addCharacter() {
    if (!this.name() || !this.powerLevelValid()) {
      return;
    }
    console.log('Agregando personaje:', this.name(), this.powerLevelValid());

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      powerLevel: this.powerLevelValid()
    }
    this.characters.update(characters => [...characters, newCharacter]);

    this.resetInputs();
  }

  resetInputs() {
    this.name.set('');
    this.powerLevel.set(0);
  }

  //evitar que el front ingrese powerLevel NaN por input
  powerLevelValid = computed(() => isNaN(this.powerLevel()) ? 0 : this.powerLevel());


}
