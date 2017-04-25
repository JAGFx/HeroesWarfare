import { EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
/**
 * Created by SMITHE on 13-Mar-17.
 */

/**
 *  Class for manage form of entity with check inside (Throw exception)
 */
export abstract class BaseFormComponent<T> {
	/**
	 * Class entity
	 *
	 * @type {T}
	 */
	public entity: T;
	
	/**
	 * Old entity set with init method
	 *
	 * @type {T}
	 */
	public entityBack: T;
	
	
	public feedback = {
		asError: false,
		type:    'error',
		message: ''
	};
	
	protected form: FormGroup;
	
	/**
	 * Object to pass data through an event
	 *
	 * @type {EventEmitter}
	 */
	@Output()
	public onValidate: EventEmitter<T> = new EventEmitter();
	
	/**
	 *  Init current class entity
	 *
	 * @param {T} entity Entity to set in class entity
	 */
	public abstract init( entity: T ): void;
	
	/**
	 *  Update form entity
	 */
	protected abstract updateForm(): void;
	
	/**
	 *  Call when form entity changes. Use to catch errors thrown
	 *
	 * @param value Current value in form
	 */
	protected abstract onChangeEntity( value ): void;
	
	/**
	 * Build form to use it after
	 *
	 * @param fb  Object FormBuilder with fields necessary
	 */
	protected abstract buildForm( fb: FormBuilder ): void;
	
	/**
	 * Reset current class entity with old entity
	 */
	public reset(): void {
		this.init( this.entityBack );
	}
	
	/**
	 *  Call in submit form. Emit event with form entity
	 */
	public validate(): void {
		this.onValidate.emit( this.entity );
	}
}