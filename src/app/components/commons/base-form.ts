import { Hero } from '../heroes/hero';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventEmitter, Output } from '@angular/core';
/**
 * Created by SMITHE on 13-Mar-17.
 */

export abstract class BaseFormComponent {
	public hero: Hero = new Hero();
	public feedback   = {
		asError: false,
		type:    'error',
		message: ''
	};
	
	@Output()
	public onValidate: EventEmitter<Hero> = new EventEmitter();
	
	protected heroBack: Hero;
	protected form: FormGroup;
	
	public abstract init( hero: Hero ): void;
	
	protected abstract updateForm(): void;
	
	protected abstract onChangeEntity( value ): void;
	
	protected abstract buildForm( fb: FormBuilder ): void;
	
	public reset(): void {
		this.init( this.heroBack );
	}
	
	public validate(): void {
		this.onValidate.emit( this.hero );
	}
}