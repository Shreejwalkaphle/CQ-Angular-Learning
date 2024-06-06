import { Component } from '@angular/core';

interface FoodItem {
  name: string;
  image: string;
}

interface FoodBucket {
  title: string;
  items: FoodItem[];
}

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomeComponent {
  foodBuckets: FoodBucket[] = [
    {
      title: 'Fruits',
      items: [
        { name: 'Apple', image: 'assets/images/apple.jpg' },
        { name: 'Banana', image: 'assets/images/banana.jpg' },
        { name: 'Orange', image: 'assets/images/orange.jpg' },
        { name: 'Strawberry', image: 'assets/images/strawberry.jpg' },
        { name: 'Pineapple', image: 'assets/images/pineapple.jpg' }
      ]
    },
    {
      title: 'Vegetables',
      items: [
        { name: 'Carrot', image: 'assets/images/carrot.jpg' },
        { name: 'Broccoli', image: 'assets/images/broccoli.jpg' },
        { name: 'Tomato', image: 'assets/images/tomato.jpg' },
        { name: 'Spinach', image: 'assets/images/spinach.jpg' },
        { name: 'Potato', image: 'assets/images/potato.jpg' }
      ]
    },
    {
      title: 'Dairy',
      items: [
        { name: 'Milk', image: 'assets/images/milk.jpg' },
        { name: 'Cheese', image: 'assets/images/cheese.jpg' },
        { name: 'Yogurt', image: 'assets/images/yogurt.jpg' },
        { name: 'Butter', image: 'assets/images/butter.jpg' },
        { name: 'Cream', image: 'assets/images/cream.jpg' }
      ]
    },
    {
      title: 'Meats',
      items: [
        { name: 'Chicken', image: 'assets/images/chicken.jpg' },
        { name: 'Beef', image: 'assets/images/beef.jpg' },
        { name: 'Pork', image: 'assets/images/pork.jpg' },
        { name: 'Fish', image: 'assets/images/fish.jpg' },
        { name: 'Lamb', image: 'assets/images/lamb.jpg' }
      ]
    },
    {
      title: 'Desserts',
      items: [
        { name: 'Cake', image: 'assets/images/cake.jpg' },
        { name: 'Ice Cream', image: 'assets/images/ice-cream.jpg' },
        { name: 'Brownie', image: 'assets/images/brownie.jpg' },
        { name: 'Donut', image: 'assets/images/donut.jpg' },
        { name: 'Cupcake', image: 'assets/images/cupcake.jpg' }
      ]
    }
  ];
}
