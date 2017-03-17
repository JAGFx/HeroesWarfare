import { Pipe, PipeTransform } from '@angular/core';
import { Weapon } from '../components/weapons/weapon';
/**
 * Created by SMITHE on 17-Mar-17.
 */

@Pipe( { name: 'srzWeapon' } )
export class WeaponSerializedPipe implements PipeTransform {
	transform( weapon ): string {
		let w: Weapon = new Weapon();
		w.copyFrom( weapon );
		console.log( w.serialize() );
		return w.serialize();
	}
}
