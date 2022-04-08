import { Component } from '@angular/core';
import { Item } from './item';
import { LocalStorage } from './localStorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-todo-FormsModule';

  public allItems: Item[] = [];
  public className: string = "text-decoration-line-through";
  public n: number = 0;
  localStorage: any;

  constructor(localStorage: LocalStorage) {

    if (localStorage) {
      this.localStorage = localStorage;
      if (this.localStorage['allItems']) {
        this.allItems = this.localStorage.get('allItems');
        this.n = [...this.allItems.filter((el: { done: boolean; }) => el.done == true)].length;
        console.log(this.n);
      }
    }
  }

  onSubmitParent(event: any) {
    this.allItems.push({
      description: event,
      done: false
    });
    this.localStorage.set("allItems", this.allItems);
  }


  selectCheckBox(event: Item) {
    event.done = !event.done;
    event.done ? this.n++ : this.n--;
    this.localStorage.set("allItems", this.allItems);
  }

  deleteItem(item: Item) {
    this.allItems = this.allItems.filter(function (el: Item) { return el != item });
    this.n--;
    this.localStorage.set("allItems", this.allItems);
  }

  deleteAllDoneItem() {
    this.allItems = this.allItems.filter(function (el: { done: boolean; }) { return el.done != true });
    this.n = 0;
    this.localStorage.set("allItems", this.allItems);
  }

}
