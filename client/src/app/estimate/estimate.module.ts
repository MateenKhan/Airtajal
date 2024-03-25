import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './estimate-routing.module';

import { EstimatePage } from './estimate.page';
import { IonicStorageModule } from '@ionic/storage-angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    IonicStorageModule.forRoot()

  ],
  declarations: [EstimatePage]
})
export class EstimatePageModule { }
