import { Injectable } from '@angular/core';
import { Training } from 'src/app/model/training';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  listTrainings = [
    {id:1, name: 'Java', description:'Formation Java SE 8 sur 5 jours',price: 1500, quantity:1 }, 
    {id:2, name: 'dotNet', description:'Formation DotNet 3 jours',price: 1000, quantity:1 },
    {id:1, name: 'Python', description:'Formation Python/Django 5 jours',price:1500, quantity:1 }
  ];

  listCart : Training[] = []
  
  addTraining(training: Training) {
  this.listCart.push(training)

  }

  

 
}
