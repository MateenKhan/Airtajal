import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';
import { item } from '../estimate/models/item';
import { _2d } from '../estimate/models/_2d';
import { temp_item } from '../estimate/models/temp_item';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {

  public items:temp_item[] = [
    {id:1,name:"cuboard",price:20000,selected:true},
    {id:2,name:"counter",price:12000,selected:true},
    {id:2,name:"boss conuter",price:12500,selected:true},
    {id:2,name:"door",price:3000,selected:true},
    {id:2,name:"mirror",price:4700,selected:true},
    {id:2,name:"fluted pannel",price:31020,selected:true},
    {id:2,name:"false ceiling",price:32000,selected:true}
  ];
  public total=0;
  constructor(private storage: Storage, private toastController: ToastController) { }

  ngOnInit() {this.calculateTotal(); }

  delete( index:number){
    this.items.splice(index,1);
    this.calculateTotal();
  }

  calculateTotal(){
    this.total = 0;
    this.items.forEach((item=>{
      if(item.selected){
        this.total+=item.price
      }
    }));
  }
}