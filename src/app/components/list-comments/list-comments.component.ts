import { Component } from '@angular/core';
import { Commen } from 'src/app/interface/Comment';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent {
  listComments : Commen[] = [
    {
      title : 'Test1',
      author : 'Javier Aranda',
      description : '..........',
      createAt : new Date()
    },
    {
      title : 'Test1',
      author : 'Javier Aranda',
      description : '..........',
      createAt : new Date()
    },
    {
      title : 'Test1',
      author : 'Javier Aranda',
      description : '..........',
      createAt : new Date()
    },
    {
      title : 'Test1',
      author : 'Javier Aranda',
      description : '..........',
      createAt : new Date()
    },
    {
      title : 'Test1',
      author : 'Javier Aranda',
      description : '..........',
      createAt : new Date()
    },

  ]
}
