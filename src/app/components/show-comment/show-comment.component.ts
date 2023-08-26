import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commen } from 'src/app/interface/Comment';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-show-comment',
  templateUrl: './show-comment.component.html',
  styleUrls: ['./show-comment.component.css'],
})
export class ShowCommentComponent implements OnInit {
  id: number;

  comment: any;

  ngOnInit(): void {
    this.getComment();
  }

  constructor(
    private activateRoute: ActivatedRoute,
    private _commentService: CommentService
  ) {
    this.id = +activateRoute.snapshot.params['id']!;
    console.log(this.activateRoute.snapshot.params['id']);
  }

  getComment() {
    this._commentService.showComment(this.id).subscribe(
      (data) => {
        console.log(data);
        this.comment = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
