import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDialog, MatDialogModule, MatIconModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import { ConfirmDialog } from './confirm-dialog.component';
import { ConfirmDialogService } from './confirm-dialog.service';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserModule,
		MatIconModule,
		MatButtonModule,
        FlexLayoutModule,
        MatDialogModule
	],
	exports: [
		ConfirmDialog
	],
	declarations: [
		ConfirmDialog
	],
	providers: [
        ConfirmDialogService,
        MatDialog
    ],
    entryComponents: [
        ConfirmDialog
    ],
	schemas: [
	]
})
export class ConfirmDialogModule { }
