import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class NotificationService {
	constructor(public snackBar: MatSnackBar) { }

	/**
	 * Mostra uma mensgen em tela com o componente snackBar do framework AngularMaterial.
	 * @param message - string com a mensagem desejada
	 * @param action - descrição que deseja que apareça no botão.
	 * @param time - tempo que a mensegem aparece em tela se sofrer ação do usuário
	 */
	showMessage(message: string, action: string, time: number) {
		this.snackBar.open(message, action, {
			duration: time,
		});
	}

}
