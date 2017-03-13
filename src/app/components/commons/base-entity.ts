/**
 * Created by SMITHE on 13-Mar-17.
 */

export abstract class BaseEntity {
	
	protected _id: string;
	
	public abstract copyFrom( entity: any );
	
	public abstract serialize(): any;
	
	public abstract equal( entity: any ): boolean;
	
	public static generateUUID(): string {
		return Math.random().toString( 16 ).substring( 2, 15 ) +
			Math.random().toString( 16 ).substring( 2, 15 );
	}
	
	public get id(): string {
		return this._id;
	}
	
	public set id( value: string ) {
		this._id = value;
	}
}