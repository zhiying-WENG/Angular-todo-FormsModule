import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() textForm = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(myform: any) {
    this.textForm.emit(myform.value.description);
    // console.log(myform.value.description);
  }
}
