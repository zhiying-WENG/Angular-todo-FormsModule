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
  public n: number = 0;
  private todostorage: any;

  constructor(storage: LocalStorage) {
    this.todostorage = storage;
    if (this.todostorage.localStorage.allItems) {
      this.allItems = this.todostorage.get("allItems");
      this.n = [...this.allItems.filter((el: { done: boolean; }) => el.done == true)].length;
    }
  }

  onSubmitParent(event: string) {
    this.allItems.push({
      description: event,
      done: false
    });
    this.todostorage.set('allItems', this.allItems);
  }

  selectCheckBoxParent(item: Item) {
    item.done = !item.done;
    item.done ? this.n++ : this.n--;
    this.todostorage.set("allItems", this.allItems);
  }

  deleteItemParent(item: Item) {
    this.allItems = this.allItems.filter(function (el: Item) { return el != item });
    this.n--;
    this.todostorage.set("allItems", this.allItems);
  }

  deleteAllDoneItem() {
    this.allItems = this.allItems.filter(function (el: { done: boolean; }) { return el.done != true });
    this.n = 0;
    this.todostorage.set("allItems", this.allItems);
  }

}
