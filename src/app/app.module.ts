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
import { HeroEditComponent } from './components/heroes/hero-edit/hero-edit';

const routes = [
	// App : /
	{ name: 'app', url: '/', component: AppComponent },
	
	// HeroHome:  /heroes/list
	{ name: 'heroes', url: '/heroes/list', component: HeroView },
	
	// HeroEdit:  /heroes/{:id}/edit
	{ name: 'heroes_edit', url: '/heroes/:id/edit', component: HeroEditComponent }
];

@NgModule( {
	declarations: [
		AppComponent,
		HeroView,
		HeroListComponent,
		HeroDetailsComponent,
		HeroEditComponent
	],
	imports:      [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		UIRouterModule.forRoot( { states: routes, useHash: true } )
	],
	providers:    [ HeroService ],
	bootstrap:    [ AppComponent ]
} )

export class AppModule {
	
}
