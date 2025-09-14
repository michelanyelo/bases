import {Component, computed, output, signal} from '@angular/core';
import {Character} from '../../../interfaces/character';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  styleUrl: './character-add.component.css'
})
export class CharacterAddComponent {
  name = signal('');
  powerLevel = signal(0);
  newCharacter = output<Character>();

  addCharacter() {
    if (!this.name() || !this.powerLevelValid()) {
      return;
    }

    const newCharacter: Character = {
      //id: this.characters().length + 1,
      id: Math.floor(Math.random() * 10000), // generar un id aleatorio
      name: this.name(),
      powerLevel: this.powerLevelValid()
    }
    //this.characters.update(characters => [...characters, newCharacter]);

    this.newCharacter.emit(newCharacter);
    this.resetInputs();
  }

  resetInputs() {
    this.name.set('');
    this.powerLevel.set(0);
  }

  //evitar que el front ingrese powerLevel NaN por input
  powerLevelValid = computed(() => isNaN(this.powerLevel()) ? 0 : this.powerLevel());
}
