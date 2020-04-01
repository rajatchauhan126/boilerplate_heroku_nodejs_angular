import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { PostService } from '../../post.service';

const URL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  posts;
  createPost;


  public uploader: FileUploader = new FileUploader({
    url: URL,
    disableMultipart: false,
    autoUpload: true,
    method: 'post',
    itemAlias: 'attachment',
    allowedFileType: ['image', 'pdf']


  });

  public onFileSelected(event: EventEmitter<File[]>) {
    const file: File = event[0];
    console.log(file);

  }

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
    // this.fileUploader();
    this.postService.createPost(postData)
      .subscribe(post => this.posts = post);
    this.createPost.reset();
    this.router.navigateByUrl('shared/posts');
  }

  // fileUploader() {
  //   this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
  //   this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
  //     console.log('ImageUpload:uploaded:', item, status, response);
  //     alert('File uploaded successfully');
  //   };
  // }
}
