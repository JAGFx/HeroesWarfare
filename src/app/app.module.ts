import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeroService } from './services/hero.service';
import { UIRouterModule } from 'ui-router-ng2';
import { HeroListComponent } from './components/heroes/hero-list/hero-list.componenrt';
import { HeroView } from './views/hero/hero.component';
import { HeroDetailsComponent } from './components/heroes/hero-details/hero-details.component';
import { HeroEditComponent } from './components/heroes/hero-crud/hero-edit';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/InMemoryDbService.service';
import { HeroFormComponent } from './components/heroes/hero-form/hero-form';
import { HeroNewComponent } from './components/heroes/hero-crud/hero-new';

const routes = [
	// App : /
	{ name: 'app', url: '/', component: AppComponent },
	
	// HeroHome:  /heroes/list
	{ name: 'heroes', url: '/heroes/list', component: HeroView },
	
	// HeroNew:  /heroes/new
	{ name: 'heroes_new', url: '/heroes/new', component: HeroNewComponent },
	
	// HeroEdit:  /heroes/{:id}/edit
	{ name: 'heroes_edit', url: '/heroes/:id/edit', component: HeroEditComponent }
];

@NgModule( {
	declarations: [
		AppComponent,
		HeroView,
		HeroListComponent,
		HeroDetailsComponent,
		HeroEditComponent,
		HeroNewComponent,
		HeroFormComponent
	],
	imports:      [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		UIRouterModule.forRoot( { states: routes, useHash: true } ),
		InMemoryWebApiModule.forRoot( InMemoryDataService )
	],
	providers:    [ HeroService ],
	bootstrap:    [ AppComponent ]
} )

export class AppModule {
	
}
