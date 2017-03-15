import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeroService } from './services/hero.service';
import { UIRouterModule } from 'ui-router-ng2';
import { HeroListComponent } from './views/hero/hero-list/hero-list.componenrt';
import { HeroEditComponent } from './components/heroes/hero-crud/hero-edit';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/InMemoryDbService.service';
import { HeroFormComponent } from './views/hero/hero-form/hero-form';
import { HeroNewComponent } from './components/heroes/hero-crud/hero-new';
import { WeaponService } from './services/weapon.service';
import { WeaponListComponent } from './views/weapon/weapon-list/weapon-list.componenrt';
import { WeaponFormComponent } from './views/weapon/weapon-form/weapon-form';
import { WeaponDetailsComponent } from './views/weapon/weapons-details/weapon-details.component';
import { HeroDetailsComponent } from './views/hero/hero-details/hero-details.component';
import { WeaponEditComponent } from './components/weapons/weapon-crud/weapon-edit';
import { WeaponNewComponent } from './components/weapons/weapon-crud/weapon-new';

const routes = [
	// ---------------------------------------------------- APP
	// App : /
	{ name: 'app', url: '/', component: AppComponent },
	
	// ---------------------------------------------------- HEROES
	// HeroHome:  /heroes/list
	{ name: 'heroes', url: '/heroes', component: HeroListComponent },
	
	// HeroNew:  /heroes/new
	{ name: 'heroes_new', url: '/heroes/new', component: HeroNewComponent },
	
	// HeroEdit:  /heroes/{:id}/edit
	{ name: 'heroes_edit', url: '/heroes/:id/edit', component: HeroEditComponent },
	
	// HeroShow:  /heroes/{:id}
	{ name: 'heroes_show', url: '/heroes/:id/show', component: HeroDetailsComponent },
	
	// ---------------------------------------------------- WEAPONS
	// WeaponHome: /weapons
	{ name: 'weapons', url: '/weapons', component: WeaponListComponent },
	
	// WeaponNew:  /weapons/new
	{ name: 'weapons_new', url: '/weapons/new', component: WeaponNewComponent },
	
	// WeaponEdit:  /weapons/{:id}/edit
	{ name: 'weapons_edit', url: '/weapons/:id/edit', component: WeaponEditComponent },
	
	// WeaponShow:  /weapons/{:id}
	{ name: 'weapons_show', url: '/weapons/:id/show', component: WeaponDetailsComponent }
];

@NgModule( {
	declarations: [
		AppComponent,
		
		HeroListComponent,
		HeroDetailsComponent,
		HeroEditComponent,
		HeroNewComponent,
		HeroFormComponent,
		
		WeaponListComponent,
		WeaponFormComponent,
		WeaponDetailsComponent,
		WeaponEditComponent,
		WeaponNewComponent
	],
	imports:      [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		UIRouterModule.forRoot( { states: routes, useHash: true } ),
		InMemoryWebApiModule.forRoot( InMemoryDataService )
	],
	providers:    [ HeroService, WeaponService ],
	bootstrap:    [ AppComponent ]
} )

export class AppModule {
	
}
