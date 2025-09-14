import {Component, computed, signal} from '@angular/core';
import {CharacterListComponent} from '../../components/dragonball/character-list/character-list.component';
import {Character} from '../../interfaces/character';
import {CharacterAddComponent} from '../../components/dragonball/character-add/character-add.component';

@Component({
  imports: [
    CharacterListComponent,
    CharacterAddComponent
  ],
  templateUrl: './dragonball-super.component.html'
})
export class DragonballSuperComponent {
  name = signal('');
  powerLevel = signal(0);

  characters = signal<Character[]>([
    {id: 2, name: 'Vegeta', powerLevel: 8500},
    {id: 3, name: 'Gohan', powerLevel: 7000},
    {id: 4, name: 'Piccolo', powerLevel: 6500},
    {id: 5, name: 'Frieza', powerLevel: 9500},
  ]);

  // con función + bootstrap

  addCharacter(character: Character){
    this.characters.update(characters => [...characters, character]);
  }

  //evitar que el front ingrese powerLevel NaN por input
  powerLevelValid = computed(() => isNaN(this.powerLevel()) ? 0 : this.powerLevel());


}
