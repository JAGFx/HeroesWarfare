import { BaseFormComponent } from './base-form';
/**
 * Created by SMITHE on 13-Mar-17.
 */

/**
 *  Interface for controller of BaseFormComponent
 */
export interface BaseFormController<T> {
	
	/**
	 * View child used in component
	 */
	form: BaseFormComponent<T>;
	
	/**
	 * Method call when submit event was called
	 *
	 * @param entity
	 */
	validate( entity: T );
}