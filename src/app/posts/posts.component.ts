import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from './../services/content.service';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { postModel } from '../Models/post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private contentService: ContentService,
    private router:Router,
  ) {}

  private userId!: number;
  user$!: Observable<postModel[]>;

  ngOnInit() {
    this.userId = parseInt(
      this.activatedRoute.snapshot.paramMap.get('id') as string
    );
    this.user$ = this.contentService.getPostsById(this.userId);
  }

  goBack(){
    this.router.navigate([`user/${this.userId}`]);
  }

  trackByFn(index: number, item: postModel) {
    return item?.id;
  }
}
