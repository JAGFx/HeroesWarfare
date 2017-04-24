/**
 * Created by SMITHE on 13-Mar-17.
 */

/**
 * BaseEntity are an abstract class for all entity of project. It's created to provide TRUE object due to JavaScript limitation
 */
export abstract class BaseEntity {
	
	protected _id: string;
	
	/**
	 * Copy an entity from another
	 *
	 * @param {any} entity Entity to copy
	 */
	public abstract copyFrom( entity: any );
	
	/**
	 * Serialize current object in JSON string
	 *
	 * @return {string} Object serialized
	 *
	 */
	public abstract serialize(): string;
	
	/**
	 * Compare if two object are equal
	 *
	 * @param {any} entity Object to compare
	 * @return {boolean} True if two
	 */
	public abstract equal( entity: any ): boolean;
	
	/**
	 * Generate unique ID for entity. Will be remove with API interaction
	 *
	 * @returns {number} UUID
	 */
	public static generateUUID(): any {
		return Math.round( Math.random().valueOf() * ( 10 ** 16 ) )
			+ Math.round( Math.random().valueOf() * ( 10 ** 16 ) );
	}
	
	
	// ----------------------------------------------------------------------- GETTERS & SETTERS
	public get id(): string {
		return this._id;
	}
	
	public set id( value: string ) {
		this._id = value;
	}
}
