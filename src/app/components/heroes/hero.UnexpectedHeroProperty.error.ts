import { Hero } from './hero';
/**
 * Created by emsm on 11/02/2017.
 */

export class UnexpectedHeroProperty extends Error {
	
	public static readonly ERR_NAME: string = "Unexpected Hero Property";
	public static readonly MESSAGES         = {
		MIN_VALUE: ': Min value of properties ( Attack, Dodge, Damage & HP ) must be > ',
		MAX_SUM:   ': Max sum of properties ( Attack, Dodge, Damage & HP ) must be <= ',
	};
	public static readonly PROPERTIES       = {
		ATTACK: 'Attack',
		DODGE:  'Dodge',
		DAMAGE: 'Damage',
		HP:     'HP'
	};
	
	constructor( property: string, message: string = UnexpectedHeroProperty.MESSAGES.MAX_SUM ) {
		super( UnexpectedHeroProperty.ERR_NAME );
		this.name    = UnexpectedHeroProperty.ERR_NAME;
		this.message = UnexpectedHeroProperty.ERR_NAME + ' for ' + property + message;
		this.message += ( message === UnexpectedHeroProperty.MESSAGES.MIN_VALUE )
			? Hero.MIN_VALUE.toString()
			: Hero.MAX_SUM.toString();
	}
}