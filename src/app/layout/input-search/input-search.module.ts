import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import { InputSearchComponent } from './input-search.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		FlexLayoutModule,
		MatInputModule
	],
	exports: [
		InputSearchComponent
	],
	declarations: [
		InputSearchComponent
	],
	providers: [
	],
	schemas: [
	]
})
export class InputSearchModule { }
