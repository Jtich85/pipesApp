import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { BasicsPageComponent } from './pages/basicsPage/basicsPage.component';
import { NumbersPageComponent } from './pages/numbersPage/numbersPage.component';
import { UncommonPageComponent } from './pages/uncommonPage/uncommonPage.component';


@NgModule({
  declarations: [
    ProductsComponent,
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
