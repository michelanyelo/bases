import {Component, input} from '@angular/core';
import {Character} from '../../../interfaces/character';
import {NgClass} from '@angular/common';

@Component({
  selector: 'dragonball-character-list',
  standalone: true,
  imports: [NgClass],
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  characters = input.required<Character[]>();
  listName = input.required<string>();

  getBadgeClass(character: Character) {
    if (character.powerLevel > 8000) {
      return 'bg-danger';
    } else if (character.powerLevel > 5000) {
      return 'bg-success';
    } else {
      return 'bg-warning';
    }
  }
}

