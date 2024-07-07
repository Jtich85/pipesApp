import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbersPage.component.html',
  styleUrl: './numbersPage.component.css'
})
export class NumbersPageComponent {

  public totalSells: number = 2567789.5567;
  public percent: number = 0.4856;

}

