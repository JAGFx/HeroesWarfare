import { FormBuilder, FormGroup } from '@angular/forms';
import { EventEmitter, Output } from '@angular/core';
/**
 * Created by SMITHE on 13-Mar-17.
 */

export abstract class BaseFormComponent<T> {
	public entity: T;
	public feedback   = {
		asError: false,
		type:    'error',
		message: ''
	};
	
	@Output()
	public onValidate: EventEmitter<T> = new EventEmitter();
	
	protected entityBack: T;
	protected form: FormGroup;
	
	public abstract init( entity: T ): void;
	
	protected abstract updateForm(): void;
	
	protected abstract onChangeEntity( value ): void;
	
	protected abstract buildForm( fb: FormBuilder ): void;
	
	public reset(): void {
		this.init( this.entityBack );
	}
	
	public validate(): void {
		this.onValidate.emit( this.entity );
	}
}