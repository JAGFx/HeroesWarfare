import { BaseEntityWarfare } from './base-entity-warfare';
/**
 * Created by SMITHE on 13-Mar-17.
 */

/**
 *  Exception thrown if an entity have invalid properties
 */
export class UnexpectedWarfareEntityProperty extends Error {
	
	/**
	 * @type {string} Name of exception
	 */
	public static readonly ERR_NAME: string = "Unexpected Entity Property";
	
	/**
	 * @type {any} Message to show
	 */
	public static readonly MESSAGES = {
		MIN_VALUE: ': Min value of properties ( Attack, Dodge, Damage & HP ) must be > ',
		MAX_VALUE: ': Max value of properties ( Attack, Dodge, Damage & HP ) must be <= ',
		MAX_SUM:   ': Max sum of properties ( Attack, Dodge, Damage & HP ) must be <= ',
	};
	
	/**
	 * @type {any} Property engaged in exception
	 */
	public static readonly PROPERTIES = {
		ATTACK: 'Attack',
		DODGE:  'Dodge',
		DAMAGE: 'Damage',
		HP:     'HP',
		ANY:    'Any'
	};
	
	/**
	 *  Constructor of UnexpectedWarfareEntityProperty
	 *
	 * @param entity Entity engaged
	 * @param property Property engaged
	 * @param message Message to show
	 */
	constructor( entity: BaseEntityWarfare,
	             property: string,
	             message: string = UnexpectedWarfareEntityProperty.MESSAGES.MAX_SUM ) {
		
		super( UnexpectedWarfareEntityProperty.ERR_NAME );
		
		this.name    = UnexpectedWarfareEntityProperty.ERR_NAME;
		this.message = UnexpectedWarfareEntityProperty.ERR_NAME + ' for (' + property + ') ' + message;
		
		this.message += ( message === UnexpectedWarfareEntityProperty.MESSAGES.MIN_VALUE )
			? entity.getMinValue().toString()
			: entity.getMaxValue().toString();
	}
}