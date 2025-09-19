import {effect, Injectable, signal} from '@angular/core';
import {Character} from '../interfaces/character';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
};

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  characters = signal<Character[]>(loadFromLocalStorage());

  // Local Storage
  saveToLocalStorage = effect(() => {
    // console.log(`Character count ${this.characters().length}`);
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  // con función + bootstrap

  addCharacter(character: Character) {
    this.characters.update(characters => [...characters, character]);
  }
}
