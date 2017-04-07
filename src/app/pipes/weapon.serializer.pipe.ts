import { Pipe, PipeTransform } from '@angular/core';
import { Weapon } from '../components/weapons/weapon';
import { WeaponService } from '../services/weapon.service';
/**
 * Created by SMITHE on 17-Mar-17.
 */

@Pipe( { name: 'srzWeapon' } )
export class WeaponSerializedPipe implements PipeTransform {
	transform( weapon: Weapon ): string {
		return WeaponService.jsonStringify( weapon );
	}
}
