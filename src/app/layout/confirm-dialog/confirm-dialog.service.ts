import { Observable } from 'rxjs/Rx';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';
import { ConfirmDialog } from './confirm-dialog.component';

@Injectable()
export class ConfirmDialogService {

    constructor(private dialog: MatDialog) { }

    /**
     * Método que executa um modal em tela, para confirmação de uma ação.
     * @param title Título do modal.
     * @param message informação que deseja perguntar.
     */
    public confirm(title: string, message: string): Observable<boolean> {

        let dialogRef: MatDialogRef<ConfirmDialog>;

        dialogRef = this.dialog.open(ConfirmDialog);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }
}