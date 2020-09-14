import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { IDeactivateGuard } from './../services/guards/deactivate-guard.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit, IDeactivateGuard {
  user: { id: string; name: string };
  editUserDetails: { id: string; name: string };
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.data.subscribe(data => {
      console.log(data);
      this.user = {
        id: data['user']['id'],
        name: data['user']['name'],
      };
      this.editUserDetails = { ...this.user };
    })

  }

  canExit() {
    console.log(this.user);
    console.log(this.editUserDetails);

    if (
      this.editUserDetails.id !== this.user.id ||
      this.editUserDetails.name !== this.user.name
    ) {
      if (confirm('All changes will be lost if you move to another page')) {
        return true;
      } else {
        return false;
      }
    }

    return true;
  }
}
