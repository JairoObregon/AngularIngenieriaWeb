import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web';
  cards: any[] = []

  ngOnInit(){

  }

  add(event:any){
    this.cards.push({ name: event.name, link: event.link })
  }

}
