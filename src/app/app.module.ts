import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeroService } from './services/hero.service';
import { UIRouterModule } from 'ui-router-ng2';
import { HeroListComponent } from './components/heroes/hero-list/hero-list.componenrt';
import { HeroView } from './views/hero/hero.component';
import { HeroDetailsComponent } from './components/heroes/hero-details/hero-details.component';

const routes = [
	// App : /
	{ name: 'app', url: '/', component: AppComponent },
	
	// HeroHome:  /heroes/list
	{ name: 'heroes', url: '/heroes/list', component: HeroView }
];

@NgModule( {
	declarations: [
		AppComponent,
		HeroView,
		HeroListComponent,
		HeroDetailsComponent
	],
	imports:      [
		BrowserModule,
		FormsModule,
		HttpModule,
		UIRouterModule.forRoot( { states: routes, useHash: true } )
	],
	providers:    [ HeroService ],
	bootstrap:    [ AppComponent ]
} )
export class AppModule {
	
}
