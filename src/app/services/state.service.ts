import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { State } from '../models/state';
import { STATES} from '../mocks/mock-states';

@Injectable({ providedIn: 'root' })
export class StateService {
  constructor() {}
  getStates(): Observable<State[]> {
    return of(STATES);
  }
}
