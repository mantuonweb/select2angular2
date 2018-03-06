import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
}
