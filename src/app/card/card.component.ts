import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  public image:string="https://i.blogs.es/31a15a/blue-lock/840_560.jpeg";
  public Titulo:string="Reseña sobre la animacion";
  constructor() { }

  ngOnInit(): void {
    
  }

}
