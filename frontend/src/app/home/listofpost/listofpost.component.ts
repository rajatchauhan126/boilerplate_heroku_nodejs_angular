import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-listofpost',
  templateUrl: './listofpost.component.html',
  styleUrls: ['./listofpost.component.css']
})
export class ListofpostComponent implements OnInit {

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
  }

  getAllPost() {
    this.postService.getAllPost()
      .subscribe(posts => this.posts = posts);
  }

  onSubmit(commentData) {
    console.log(commentData);
    this.postService.createPost(commentData)
      .subscribe(post => this.posts = post);
    this.createComment.reset();
    console.warn('Your order has been submitted', this.createComment);
  }
}
