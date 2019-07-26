import { Component, OnInit } from '@angular/core'
import { JsonPlaceholderService } from '../../service/json-placeholder.service'
import { FormGroup, FormControl, Validators} from '@angular/forms'

// export class Posts {
//   userId: number
//   title: string
//   id: number
//   body: string
// }

export class Feed {
	// author: any = ''
	// body: any = ''
	// liked: number = 0
  // disliked: number = 0
  // userId:number = 0
  // title: any = ''
  userId: any = 0
  title: any = ''
  id: any = 0
  body: any = ''

	constructor(userId = 1, body = '') {
    this.userId = userId
		this.body = body
	}
}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
  posts: any
  postForm: FormGroup
	feed = new Feed()
  constructor(private jsonService: JsonPlaceholderService) {
    this.getPosts();
  }

  ngOnInit() {}

  getPosts() {
    this.jsonService.getPosts().subscribe(posts => {
      this.posts = posts;
      // this.posts = JSON.stringify(posts);

      console.log(posts);
    })
  }

  createForm() {
    this.postForm = new FormGroup({
      body: new FormControl('', [Validators.required]),
      userId: new FormControl('', [Validators.required])
    });
  }



	post() {
		this.posts.push(this.feed)
		this.posts.reverse()
		this.feed = new Feed()
	}
}
