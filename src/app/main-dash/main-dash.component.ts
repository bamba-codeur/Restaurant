import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {QuickLunchService} from "../services/quick-lunch.service";
import {FoodInterface} from "../models/food.interface";

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.scss']
})
export class MainDashComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [

          { title: 'Burgers', cols: 1, rows: 1,id:'brg' },
          { title: 'Galettes/crepes', cols: 1, rows: 1,id:'glt' },
          { title: 'Pizzas', cols: 1, rows: 1,id:'pzz' }
        ];
      }

      return [

        { title: 'Burgers', cols: 1, rows: 1,id:'brg' },
        { title: 'Galettes/crepes', cols: 1, rows: 1,id:'glt' },
        { title: 'Pizzas', cols: 1, rows: 1,id:'pzz' }
      ];
    })
  );
  burgers!:FoodInterface[];
  pizzas!:FoodInterface[];
  galletes!:FoodInterface[];

  constructor(private breakpointObserver: BreakpointObserver,private qls:QuickLunchService) {}

  ngOnInit(): void {
      this.burgers=this.qls.getBurgers();
      this.pizzas=this.qls.getPizzas();
      this.galletes=this.qls.getGalletes();
  }
}
