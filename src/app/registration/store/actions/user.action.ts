import { Action } from '@ngrx/store';
import { User } from '../../../models/user';
import { Partner } from '../../../models/partner';
import { Institute } from '../../../models/institute';

// load user
export const LOAD_USER = '[User] Load User';
export const LOAD_USER_FAIL = '[User] Load User Fail';
export const LOAD_USER_SUCCESS = '[User] Load User Success';

// update user
export const UPDATE_INSTITUTES = '[User] Update Institutes';
export const UPDATE_NOTES = '[User] Update Notes';
export const UPDATE_USER = '[User] Update User';

export const SEND_REGISTRATION = '[User] Send Registration';
export const SEND_REGISTRATION_SUCCESS = '[User] Send Registration Success';
export const SEND_REGISTRATION_FAIL = '[User] Send Registration Fail';

export const SIGNOUT = '[User] Signout';
export const SIGNOUT_SUCCESS = '[User] Signout Success';
export const SIGNOUT_FAIL = '[User] Signout Fail';

export class LoadUser implements Action {
  readonly type = LOAD_USER;
}
export class LoadUserSuccess implements Action {
  readonly type = LOAD_USER_SUCCESS;
  constructor(public payload: User) {}
}
export class LoadUserFail implements Action {
  readonly type = LOAD_USER_FAIL;
  constructor(public payload: any) {}
}

export class UpdateInstitutes implements Action {
  readonly type = UPDATE_INSTITUTES;
  constructor(public payload: Institute[]) {}
}
export class UpdateNotes implements Action {
  readonly type = UPDATE_NOTES;
  constructor(public payload: string) {}
}
export class UpdateUser implements Action {
  readonly type = UPDATE_USER;
  constructor(public payload: User) {}
}

export class SendRegistration implements Action {
  readonly type = SEND_REGISTRATION;
}

export class SendRegistrationSuccess implements Action {
  readonly type = SEND_REGISTRATION_SUCCESS;
  constructor(public payload: User) {}
}

export class SendRegistrationFail implements Action {
  readonly type = SEND_REGISTRATION_FAIL;
  constructor(public payload: any) {}
}

export class Signout implements Action {
  readonly type = SIGNOUT;
}

export class SignoutSuccess implements Action {
  readonly type = SIGNOUT_SUCCESS;
}

export class SignoutFail implements Action {
  readonly type = SIGNOUT_FAIL;
  constructor(public payload: any) {}
}

export type UserAction =
  | LoadUser
  | LoadUserFail
  | LoadUserSuccess
  | UpdateInstitutes
  | UpdateNotes
  | UpdateUser
  | SendRegistration
  | SendRegistrationSuccess
  | SendRegistrationFail
  | Signout
  | SignoutSuccess
  | SignoutFail;
