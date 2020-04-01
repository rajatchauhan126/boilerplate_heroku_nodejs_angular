import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

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
  }

  callAfterTimeout() {
    setTimeout(() => {
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
            let temp4 = [];
              temp4.push(posts[posts.length - 3]);
              temp4.push(posts[posts.length - 2]);
              temp4.push(posts[posts.length - 1]);
              this.posts = temp4;            
          }
        }
      )
  }

  onSubmit(commentData) {
    console.log(commentData);
    this.postService.createPost(commentData)
      .subscribe(post => this.posts = post);
    this.createComment.reset();

    console.warn('Your order has been submitted', this.createComment);
  }


}
