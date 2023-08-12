import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentService } from './../services/content.service';
import { userModel } from '../Models/user.interface';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private contentService: ContentService
  ) {}

  user$!: Observable<userModel>;
  private userId!: number;

  ngOnInit() {
    this.userId = parseInt(
      this.activatedRoute.snapshot.paramMap.get('id') as string
    );
    this.user$ = this.contentService.getUserById(this.userId);
  }
}
