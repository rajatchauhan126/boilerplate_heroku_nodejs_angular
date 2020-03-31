import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PostService } from '../../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  posts;
  createPost;

  constructor(private router: Router, private formBuilder: FormBuilder, private postService: PostService) {
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
    this.router.navigateByUrl('shared/posts');
  }
}
