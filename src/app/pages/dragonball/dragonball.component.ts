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
  characters = signal<Character[]>([
    {id: 1, name: 'Goku', powerLevel: 9001},
    {id: 2, name: 'Vegeta', powerLevel: 8500},
    {id: 3, name: 'Gohan', powerLevel: 7000}
  ]);

  // con computed + css en el componente html
  // powerClass = computed(() => {
  //   return {
  //     'high-power': this.characters().some(c => c.powerLevel > 9000),
  //     'medium-power': this.characters().some(c => c.powerLevel > 8000 && c.powerLevel <= 9000),
  //     'low-power': this.characters().every(c => c.powerLevel <= 8000)
  //   }
  // });

  // con función + bootstrap
  getBadgeClass(character: Character) {
    if (character.powerLevel > 9000) {
      return 'bg-danger';   // rojo
    } else if (character.powerLevel > 8000) {
      return 'bg-warning';  // amarillo/naranja
    } else {
      return 'bg-success';  // verde
    }
  }

}
