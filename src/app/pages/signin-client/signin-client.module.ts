import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninClientPageRoutingModule } from './signin-client-routing.module';

import { SigninClientPage } from './signin-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninClientPageRoutingModule
  ],
  declarations: [SigninClientPage]
})
export class SigninClientPageModule {}
