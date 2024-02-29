import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
listCart : Training[] | undefined
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.listCart = this.cartService.listCart
  }
}
