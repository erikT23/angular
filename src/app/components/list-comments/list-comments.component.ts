import { Component, OnInit } from '@angular/core';
import { Commen } from 'src/app/interface/Comment';
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css'],
})
export class ListCommentsComponent implements OnInit {
  /*listComments : Commen[] = [
    {
      title : 'Test1',
      author : 'Erik Tapia',
      description : '..........',
      createAt : new Date()
    },
    {
      title : 'Test1',
      author : 'Erik Tapia',
      description : '..........',
      createAt : new Date()
    },
    {
      title : 'Test1',
      author : 'Erik Tapia',
      description : '..........',
      createAt : new Date()
    },
    {
      title : 'Test1',
      author : 'Erik Tapia',
      description : '..........',
      createAt : new Date()
    },
    {
      title : 'Test1',
      author : 'Erik Tapia',
      description : '..........',
      createAt : new Date()
    },

  ]¨*/

  listComments: Commen[] = [];

  ngOnInit(): void {
    this.getComments();
  }

  constructor(private _comentarioService: CommentService) {}

  getComments() {
    this._comentarioService.getComments().subscribe(
      (data) => {
        console.log(data);
        this.listComments = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteComment(id: number | undefined) {
    if (id === undefined) {
      console.error('Invalid comment id: undefined');
      return;
    }

    this._comentarioService.deleteComment(id).subscribe(
      (data) => {
        console.log(data);
        this.getComments();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
