import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  posts;
  createPost;

  constructor(private formBuilder: FormBuilder, private postService: PostService, private router: Router) {
    this.createPost = this.formBuilder.group({
      community: '',
      title: '',
      optionaltext: '',
      image: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(postData) {
    postData.userId = 'Edgymnerch';
    postData.image = 'temp';
    this.postService.createPost(postData)
      .subscribe(post => this.posts = post);
    this.createPost.reset();

    let path = '/';

    this.router.navigate([path]);
  }
}
