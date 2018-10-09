import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-input-search',
	templateUrl: './input-search.component.html',
	styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

	@Input() public actionsearch: any;

	query: string;

	@Input() public placeholder: string;

	constructor() { }

	ngOnInit() {
	}

	searchControlTimeOut;

	searchControlTime(query: string) {
		if (this.searchControlTimeOut) {
			clearTimeout(this.searchControlTimeOut);
		}
		this.searchControlTimeOut = setTimeout((() => {
			this.actionsearch(query)
		}).bind(this), 400);
	}

}
