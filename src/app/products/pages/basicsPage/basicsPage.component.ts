import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basicsPage.component.html',
  styleUrl: './basicsPage.component.css',
})
export class BasicsPageComponent {

  public nameLower: string = 'javier';
  public nameUpper: string = 'JAVIER';
  public fullName: string = 'jAviEr tIschiNA';

  public customDate: Date = new Date();

}
