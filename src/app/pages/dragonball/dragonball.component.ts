import {Component, signal} from '@angular/core';

interface Character {
  id: number;
  name: string;
  powerLevel: number;
}

@Component({
  templateUrl: './dragonball.component.html'
})
export class DragonballComponent {
  characters = signal<Character[]>([
    {id: 1, name: 'Goku', powerLevel: 9001},
    {id: 2, name: 'Vegeta', powerLevel: 8500},
    {id: 3, name: 'Gohan', powerLevel: 7000}
  ]);
}
