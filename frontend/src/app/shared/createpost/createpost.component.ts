import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { PostService } from '../../post.service';

const URL = `http://localhost:3000/api/post/upload`;
// const URL = 'http://localhost:3000/api/post/create-post';
@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  posts;
  createPost;
  selectedFile: File = null;
  attachmentList: any = [];

  uploader: FileUploader = new FileUploader({
    url: URL,

    // disableMultipart: false,
    // autoUpload: true,
    // method: 'post',
    // itemAlias: 'attachment',
    // allowedFileType: ['image', 'pdf']
  });



  constructor(private router: Router, private formBuilder: FormBuilder, private postService: PostService) {
 
    this.uploader.onCompleteItem = (item: any, response: any, status: any, header: any ) => {
      this.attachmentList.push(JSON.parse(response))
    }
 
 
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
    // this.onUpload();
    postData.userId = 'Edgymnerch';
    postData.image = 'temp';
    this.postService.createPost(postData)
      .subscribe(post => this.posts = post);
    // this.createPost.reset();
    // this.router.navigateByUrl('shared/posts');
  }

  // public onFileSelected(event) {
  //   this.selectedFile = <File>event.target.files[0];
 
  // }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.postService.upload(fd).
      subscribe()
  }

}
