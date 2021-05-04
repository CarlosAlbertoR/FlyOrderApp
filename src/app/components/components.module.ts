import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BackgroundComponent } from './background/background.component';



@NgModule({
  declarations: [
    BackgroundComponent
  ],
  exports: [
    BackgroundComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule {

}
