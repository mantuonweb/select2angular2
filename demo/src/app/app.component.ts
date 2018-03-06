import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ListItem } from './list-item.model';
import { ViewEncapsulation } from '@angular/core';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  selectedValue = {
    id: "4",
    text: 'wontfix'
  };
  data = [
    {
      id: "0",
      text: 'enhancement'
    },
    {
      id:"1",
      text: 'bug'
    },
    {
      id: "2",
      text: 'duplicate'
    },
    {
      id: "3",
      text: 'invalid'
    },
    {
      id: "4",
      text: 'wontfix'
    }
  ];
  changeValue() {
    console.log('changed');
    this.selectedValue =  {
      id: "3",
      text: 'enhancement'
    };
  }

  items: ListItem[];



  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('assets/data/items.json')
      .map(response => response.json())
      .subscribe(data => this.items = data);
  }
}
