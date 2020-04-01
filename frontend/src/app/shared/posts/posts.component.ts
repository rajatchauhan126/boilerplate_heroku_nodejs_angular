import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;
  createComment;
  constructor(private formBuilder: FormBuilder, private postService: PostService) {

    this.createComment = this.formBuilder.group({
      postId: '',
      comment: ''
    })
  }

  ngOnInit() {
    this.getAllPost();
    this.callAfterTimeout();
    this.callAfterTimeout2();
  }

  callAfterTimeout() {
    setTimeout(() => {
      this.getAllPost();
    }, 300);
  }
  callAfterTimeout2() {
    setTimeout(() => {
      this.getAllPost();
      this.getAllPost();
    }, 500);
  }

  getAllPost() {
    this.postService.getAllPost()
      .subscribe(
        posts => {
          if (posts === null) {
            this.posts = [];
          } else {
            this.posts = posts
          }
        }
      )
  }

}
