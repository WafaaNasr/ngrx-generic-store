
import { ReducersManager } from "ngrx-app-store";
import { UserEntity } from "./models/user";


export const  userReducer = new ReducersManager<UserEntity>();
