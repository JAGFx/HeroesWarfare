import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TooltipModule } from 'ng2-bootstrap/tooltip';
import { UIRouterModule } from 'ui-router-ng2';
import { AppComponent } from './app.component';
import { WarfareEntityHeaderComponent } from './components/commons/warfareEntities/warfare-entity-header/warfare-entity-header';
import { HeroEditComponent } from './components/heroes/hero-crud/hero-edit';
import { HeroNewComponent } from './components/heroes/hero-crud/hero-new';
import { WeaponEditComponent } from './components/weapons/weapon-crud/weapon-edit';
import { WeaponNewComponent } from './components/weapons/weapon-crud/weapon-new';
import { FlatizerLabelFormDirective } from './directives/flatizer-label-form.directive';
import { LimitPipe } from './pipes/limit.pipe';
import { SearchFilterPipe } from './pipes/searchFilter.pipe';
import { WeaponSerializedPipe } from './pipes/weapon.serializer.pipe';
import { HeroService } from './services/hero.service';
import { InMemoryDataService } from './services/InMemoryDbService.service';
import { WeaponService } from './services/weapon.service';
import { FilteringComponent } from './views/filtering/filtering.component';
import { HeroDetailsComponent } from './views/hero/hero-details/hero-details.component';
import { HeroFormComponent } from './views/hero/hero-form/hero-form';
import { HeroListComponent } from './views/hero/hero-list/hero-list.componenrt';
import { WeaponFormComponent } from './views/weapon/weapon-form/weapon-form';
import { WeaponListComponent } from './views/weapon/weapon-list/weapon-list.componenrt';
import { WeaponDetailsComponent } from './views/weapon/weapons-details/weapon-details.component';

/**
 *  ROUTING
 *  2 views:
 *    - Left menu : List of entity + filtering by name
 *    - Content: Main view
 *
 *  Each views use one component
 */

const routes = [
	
	// ---------------------------------------------------- FILTERING
	{
		name:  'filtering', url: '/',
		views: {
			content: { component: FilteringComponent },
		}
	},
	
	// ---------------------------------------------------- HEROES
	// HeroHome:  /heroes/list
	{
		name:  'heroes', url: '/heroes',
		views: {
			subMenu: { component: HeroListComponent }
		}
	},
	
	// HeroNew:  /heroes/new
	{
		name:  'heroes_new', url: '/heroes/new',
		views: {
			subMenu: { component: HeroListComponent },
			content: { component: HeroNewComponent },
		}
	},
	
	// HeroEdit:  /heroes/{id:string}/edit
	{
		name:  'heroes_edit', url: '/heroes/{id:string}/edit',
		views: {
			subMenu: { component: HeroListComponent },
			content: { component: HeroEditComponent },
		}
	},
	
	// HeroShow:  /heroes/{id:string}
	{
		name:  'heroes_show', url: '/heroes/{id:string}/',
		views: {
			subMenu: { component: HeroListComponent },
			content: { component: HeroDetailsComponent },
		}
	},
	
	// ---------------------------------------------------- WEAPONS
	// WeaponHome: /weapons
	{
		name:  'weapons', url: '/weapons',
		views: {
			subMenu: { component: WeaponListComponent }
		}
	},
	
	// WeaponNew:  /weapons/new
	{
		name:  'weapons_new', url: '/weapons/new',
		views: {
			subMenu: { component: WeaponListComponent },
			content: { component: WeaponNewComponent },
		}
	},
	
	// WeaponEdit:  /weapons/{id:string}/edit
	{
		name:  'weapons_edit', url: '/weapons/{id:string}/edit',
		views: {
			subMenu: { component: WeaponListComponent },
			content: { component: WeaponEditComponent },
		}
	},
	
	// WeaponShow:  /weapons/{id:string}
	{
		name:  'weapons_show', url: '/weapons/{id:string}/',
		views: {
			subMenu: { component: WeaponListComponent },
			content: { component: WeaponDetailsComponent },
		}
	}
];

@NgModule( {
	declarations: [
		AppComponent,
		WarfareEntityHeaderComponent,
		FlatizerLabelFormDirective,
		SearchFilterPipe,
		
		HeroListComponent,
		HeroDetailsComponent,
		HeroEditComponent,
		HeroNewComponent,
		HeroFormComponent,
		
		WeaponListComponent,
		WeaponFormComponent,
		WeaponDetailsComponent,
		WeaponEditComponent,
		WeaponNewComponent,
		WeaponSerializedPipe,
		
		FilteringComponent,
		
		LimitPipe
	],
	imports:      [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		TooltipModule.forRoot(),
		UIRouterModule.forRoot( { states: routes, useHash: true } ),
		InMemoryWebApiModule.forRoot( InMemoryDataService )
	],
	providers:    [ HeroService, WeaponService ],
	bootstrap:    [ AppComponent ]
} )

export class AppModule {
	
}
