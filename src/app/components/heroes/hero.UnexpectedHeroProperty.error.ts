import { Hero } from './hero';
/**
 * Created by emsm on 11/02/2017.
 */

export class UnexpectedHeroProperty extends Error {
	
	public static readonly ERR_NAME: string = "UnexpectedHeroProperty";
	public static readonly PROPERTIES       = {
		ATTACK: 'Attack',
		DODGE:  'Dodge',
		DAMAGE: 'Damage',
		HP:     'HP'
	};
	
	constructor( property: string ) {
		super( UnexpectedHeroProperty.ERR_NAME );
		this.name    = UnexpectedHeroProperty.ERR_NAME;
		this.message = UnexpectedHeroProperty.ERR_NAME + ' for ' + property + ': Max sum of properties ( Attack, Dodge, Damage & HP ) must be <= ' + Hero.MAX_SUM;
	}
}