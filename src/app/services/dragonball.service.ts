import {Injectable, signal} from '@angular/core';
import {Character} from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  characters = signal<Character[]>([
    {id: 2, name: 'Vegeta', powerLevel: 8500},
    {id: 3, name: 'Gohan', powerLevel: 7000},
    {id: 4, name: 'Piccolo', powerLevel: 6500},
    {id: 5, name: 'Frieza', powerLevel: 9500},
  ]);

  // con función + bootstrap

  addCharacter(character: Character) {
    this.characters.update(characters => [...characters, character]);
  }
}
