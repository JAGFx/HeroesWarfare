/**
 * Created by SMITHE on 13-Mar-17.
 */

export abstract class BaseEntity {
	
	protected _id: string;
	
	public abstract copyFrom( entity: any );
	
	public abstract serialize(): any;
	
	public abstract equal( entity: any ): boolean;
	
	public static generateUUID(): any {
		return Math.round( Math.random().valueOf() * ( 10 ** 16 ) )
			+ Math.round( Math.random().valueOf() * ( 10 ** 16 ) );
	}
	
	public get id(): string {
		return this._id;
	}
	
	public set id( value: string ) {
		this._id = value;
	}
}