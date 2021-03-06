/**
 * Copyright 2017 The Mifos Initiative.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import * as employeeActions from '../employee.actions';
import {Router} from '@angular/router';

@Injectable()
export class EmployeeRouteEffects {

  @Effect({ dispatch: false })
  createEmployeeSuccess$: Observable<Action> = this.actions$
    .ofType(employeeActions.CREATE_SUCCESS, employeeActions.UPDATE_SUCCESS)
    .map(action => action.payload)
    .do(payload => this.router.navigate(['../'], { relativeTo: payload.activatedRoute} ));

  @Effect({ dispatch: false })
  deleteEmployeeSuccess$: Observable<Action> = this.actions$
    .ofType(employeeActions.DELETE_SUCCESS)
    .map(action => action.payload)
    .do(payload => this.router.navigate(['../../'], { relativeTo: payload.activatedRoute }));

  constructor(private actions$: Actions, private router: Router) { }
}
