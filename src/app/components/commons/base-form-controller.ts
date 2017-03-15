import { BaseFormComponent } from './base-form';
/**
 * Created by SMITHE on 13-Mar-17.
 */

export interface BaseFormController<T> {
	form: BaseFormComponent<T>;
	validate( entity: T );
}