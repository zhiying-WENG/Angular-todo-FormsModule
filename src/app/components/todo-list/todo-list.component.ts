import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() item: any;
  @Input() filter!: String;
  @Output() itemChange = new EventEmitter();
  @Output() itemDelete = new EventEmitter();

  public className: string = "text-decoration-line-through";

  constructor() { }

  ngOnInit(): void {
  }

  selectCheckBox(item: Item) {
    this.itemChange.emit(item);
  }

  deleteItem(item: Item) {
    this.itemDelete.emit(item);
  }
}