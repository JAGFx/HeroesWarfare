import { HeroFormComponent } from '../heroes/hero-form/hero-form';
import { ViewChild } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../heroes/hero';
import { BaseFormComponent } from './base-form';
/**
 * Created by SMITHE on 13-Mar-17.
 */

export interface BaseFormController<T> {
	form: BaseFormComponent<T>;
	validate( entity: T );
}