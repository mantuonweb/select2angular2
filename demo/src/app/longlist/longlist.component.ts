import { Component, OnInit,ViewChild } from '@angular/core';
import { VirtualScrollComponent } from 'angular2-virtual-scroll';
@Component({
  selector: 'longlist',
  templateUrl: './longlist.component.html',
  styleUrls: ['./longlist.component.css']
})
export class LonglistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public items = ['Item1', 'Item2', 'Item3','Item1', 'Item2', 'Item3','Item1', 'Item2', 'Item3','Item1', 'Item2', 'Item3','Item1', 'Item2', 'Item3','Item1', 'Item2', 'Item3','Item1', 'Item2', 'Item3'];

  @ViewChild(VirtualScrollComponent)
  private virtualScroll: VirtualScrollComponent;

  // call this function whenever you have to focus on second item
  focusOnAnItem() {
      this.virtualScroll.items = this.items;
      this.virtualScroll.scrollInto(this.items[1]);
  }
}
