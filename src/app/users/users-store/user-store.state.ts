
import { UserEntity } from "./models/user";
import { IBaseEntityState, StoreStateFactory } from "ngrx-app-store";


export interface UserState extends IBaseEntityState<UserEntity> {
}

export const userStateFactory = new StoreStateFactory<UserEntity>();

export const userAdapter = userStateFactory.GetEntityAdapter();

export const baseUserInitialState = userStateFactory.GetEntityInitialState();

