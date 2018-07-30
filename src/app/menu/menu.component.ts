import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { State } from '../models/state';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  states: State[] = [];
  constructor(private stateService: StateService,
              private location: Location) {}

  ngOnInit() {
    this.getStates();
  }

  getStates(): void {
    this.stateService.getStates()
      .subscribe( states => this.states = states);
  }
}
