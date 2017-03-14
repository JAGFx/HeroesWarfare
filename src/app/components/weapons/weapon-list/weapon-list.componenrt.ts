/**
 * Created by SMITHE on 10-Feb-17.
 */
import { Component, Input } from '@angular/core';
import { Weapon } from '../weapon';
import { WeaponService } from '../../../services/weapon.service';

@Component( {
	selector:    'weapon-list',
	templateUrl: 'weapon-list.component.html',
	providers:   [ WeaponService ]
} )

export class WeaponListComponent {
	@Input()
	public weapons: Weapon[];
	
	/*@Output()
	 public onSelectHero = new EventEmitter<Hero>();
	 
	 public changeHero( hero: Hero ) {
	 this.onSelectHero.emit( hero );
	 }*/
	
}