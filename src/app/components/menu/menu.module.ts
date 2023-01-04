import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list'



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatSidenavModule,
    FormsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatToolbarModule,
    MatListModule

  ],
  exports:[
    MenuComponent
  ]
})
export class MenuModule { }
