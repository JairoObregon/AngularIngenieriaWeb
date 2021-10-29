import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title = ""
  link = ""
  @Output() data = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    this.data.emit({ name : this.title, link : this.link})
    this.title = ""
    this.link = ""
  }

}
