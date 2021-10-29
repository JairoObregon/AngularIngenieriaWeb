import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card!: any
  data : number = 0
  constructor() { }


  ngOnInit(): void {
  }

  aumentar(){
    this.data = this.data+1

  }

  quitar(){
    if(this.data >0){
      this.data = this.data-1
    }
  }

}
