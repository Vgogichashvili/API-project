import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentService } from '../services/content.service';
import { unsub } from '../unsub.class';
import { userModel } from '../Models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent extends unsub implements OnInit {
  users$!: Observable<userModel[]>;
  private contentService = inject(ContentService);

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.users$ = this.contentService.getAllUser();
  }

  trackByFn(index: number, item: userModel) {
    return item?.id;
  }
}
