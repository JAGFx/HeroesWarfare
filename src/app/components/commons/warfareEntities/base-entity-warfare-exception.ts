import { BaseEntityWarfare } from './base-entity-warfare';
/**
 * Created by SMITHE on 13-Mar-17.
 */

export class UnexpectedWarfareEntityProperty extends Error {
	
	public static readonly ERR_NAME: string = "Unexpected Entity Property";
	public static readonly MESSAGES         = {
		MIN_VALUE: ': Min value of properties ( Attack, Dodge, Damage & HP ) must be > ',
		MAX_VALUE: ': Max value of properties ( Attack, Dodge, Damage & HP ) must be <= ',
		MAX_SUM:   ': Max sum of properties ( Attack, Dodge, Damage & HP ) must be <= ',
	};
	public static readonly PROPERTIES       = {
		ATTACK: 'Attack',
		DODGE:  'Dodge',
		DAMAGE: 'Damage',
		HP:     'HP'
	};
	
	constructor( entity: BaseEntityWarfare,
	             property: string,
	             message: string = UnexpectedWarfareEntityProperty.MESSAGES.MAX_SUM ) {
		super( UnexpectedWarfareEntityProperty.ERR_NAME );
		this.name    = UnexpectedWarfareEntityProperty.ERR_NAME;
		this.message = UnexpectedWarfareEntityProperty.ERR_NAME + ' for (' + property + ') ' + message;
		
		// TODO Improve feedback => Check error message
		this.message += ( message === UnexpectedWarfareEntityProperty.MESSAGES.MIN_VALUE )
			? entity.getMinValue().toString()
			: entity.getMaxValue().toString();
	}
}