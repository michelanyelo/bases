import {Component, inject} from '@angular/core';
import {CharacterListComponent} from '../../components/dragonball/character-list/character-list.component';
import {CharacterAddComponent} from '../../components/dragonball/character-add/character-add.component';
import {DragonballService} from '../../services/dragonball.service';

@Component({
  imports: [
    CharacterListComponent,
    CharacterAddComponent
  ],
  templateUrl: './dragonball-super.component.html'
})
export class DragonballSuperComponent {
  public dragonBallService = inject(DragonballService)
}
