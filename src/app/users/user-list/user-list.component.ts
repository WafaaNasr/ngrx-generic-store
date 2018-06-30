import { UserEntity } from "./../users-store/models/user";
import { Component, OnInit } from "@angular/core";
import { UserState } from "../users-store/user-store.state";
import { UserStoreDispatcherService, UserStoreSelectorService } from "../users-store/user.store.service";
import * as wafaa from "../users-store/user.store.service";
import { Observable } from "rxjs";


@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  users$: Observable<Array<UserEntity>>;

  constructor(private dispatcherService: UserStoreDispatcherService,
     private selectorService: UserStoreSelectorService) {}

  ngOnInit() {
    debugger
   this.users$ = this.selectorService.getAll(this.selectorService.selectors.selectAll);
  }

  onCreateUser() {
    this.dispatcherService.dispatchCreateAction(new UserEntity("Tewst"), "http://localhost:2500/flights");
  }

  onRemoveUser(id) {
    this.dispatcherService.dispatchRemoveAction(id, "http://localhost:2500/flights/" + id);
  } 

  onUpdateUser(event) {
    event.title = "Updated";
    this.dispatcherService.dispatchUpdateAction(event, "http://localhost:2500/flights/" + event.id);
  }
}
