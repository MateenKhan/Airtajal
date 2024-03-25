import { Component, inject, OnInit } from '@angular/core';
import { _2d } from './models/_2d';
import { _3d } from './models/_3d';
import { Customer } from './models/customer';
import { Storage } from '@ionic/storage-angular';
import { item } from './models/item';
import { ToastController } from '@ionic/angular';
import { _1d } from './models/_1d';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.page.html',
  styleUrls: ['./estimate.page.scss'],
})
export class EstimatePage implements OnInit {
  public toastButtons = [
    {
      text: 'Dismiss',
      role: 'cancel',
    },
  ];
  public customer = new Customer();

  constructor(private storage: Storage, private toastController: ToastController) { }

  ngOnInit() {
    // this.customer._items = [new item()];

  }

  calculate_3d(_3d: _3d) {
    _3d.area =
      (2 * (_3d.x * _3d.y)) +
      (2 * (_3d.y * _3d.z)) +
      (2 * (_3d.z * _3d.x));
    return _3d.area;
  }
  refresh_3d(_3d_arr: [_3d], _3d_ctr: number) {
    _3d_arr[_3d_ctr] = new _3d();
    this.presentToast("Refreshed!");
  }
  delete_3d(_3d_arr: [_3d], _3d_ctr: number) {
    _3d_arr.splice(_3d_ctr, 1);
    this.presentToast("Refreshed!");
  }
  add2dItem(_items: [item], item_ctr: number) {
    _items[item_ctr]._2d_arr.push(new _2d());
  }
  add3dItem(_items: [item], item_ctr: number) {
    _items[item_ctr]._3d_arr.push(new _3d());
  }


  convert_3d_dimension(_3d: _3d) {
    let area_temp = 0;

    switch (_3d.conversion_dimension) {
      case "ft":
        if (_3d.dimension === "in") {
          area_temp = _3d.area / 144;
        }
        break;
      case "in":
        if (_3d.dimension === "ft") {
          area_temp = _3d.area * 144;
        }
        break;
      case "cm":
        break;
    }
    _3d.converted_label = "sq. " + _3d.conversion_dimension + ":" + area_temp;
  }

  calculate_1d(item: _1d) {
    item.area = item.x * item.y;
    return item.area;
  }

  delete_1d_index(_1d_arr: [_1d], _1d_ctr: number) {
    _1d_arr.splice(_1d_ctr, 1);
  }


  add_1d_index(_1d_arr: [_1d]) {
    _1d_arr.push(new _1d());
  }

  convert_2d_dimension(_2d: _2d) {
    let area_temp = 0;
    switch (_2d.conversion_dimension) {
      case "ft":
        if (_2d.dimension === "in") {
          area_temp = _2d.area / 144;
        }
        break;
      case "in":
        if (_2d.dimension === "ft") {
          area_temp = _2d.area * 144;
        }
        break;
      case "cm":
        break;
    }
    _2d.converted_label = "sq. " + _2d.conversion_dimension + ":" + area_temp;
  }

  calculate2dDimensions(_2d: _2d, _2d_arr: [_2d]) {
    _2d.area = 0;

    _2d_arr.forEach((_2d) => {
      _2d._1d_arr.forEach((_1d) => {
        _1d.area = this.calculate_1d(_1d);
        _2d.area += _1d.area;
      });
    });
    _2d.area_label = "sq." + _2d.dimension + ":" + _2d.area;
  }

  async save() {
    this.presentToast("Saved!");
    await this.storage.set("customer", this.customer);
  }
  async delete() {
    this.presentToast("Deleted!");
    await this.storage.set("customer", new Customer());
    this.customer = new Customer();
  }

  async presentToast(toast_message: string) {
    const toast = await this.toastController.create({
      message: toast_message,
      duration: 1000,
      position: 'bottom',
      cssClass: 'custom-toast',
      buttons: [
        {
          icon: 'close',
          htmlAttributes: {
            'aria-label': 'close'
          },
        },
      ],
    });

    await toast.present();
  }

  addItem() {
    this.customer._items.push(new item());
  }

  deleteItem(_items: [item], item_ctr: number) {
    _items.splice(item_ctr, 1);
  }

  delete_2d_item(_2d_arr: [_2d], _2d_ctr: number) {
    console.log(_2d_ctr);
    _2d_arr.splice(_2d_ctr, 1);
    console.log(_2d_ctr);
  }

  completeAreaCalculate() {
    this.customer.area = 0;
    this.customer._items.forEach((item) => {
      item.area = 0;
      item._2d_arr.forEach((_2d) => {
        _2d.area = 0;
        _2d._1d_arr.forEach((_1d) => {
          _1d.area = this.calculate_1d(_1d);
          _2d.area += _1d.area;
        });
        item.area += _2d.area;
      });
      item._3d_arr.forEach((_3d) => {
        _3d.area = this.calculate_3d(_3d);
        item.area += _3d.area;
      });
      this.customer.area += item.area;
      this.customer.price = this.customer.area * this.customer.area_price;
    });
  }
















  // calculate3dSheets() {
  //   let sheets = 0;
  //   console.log(sheets);
  //   switch (this._3d_conversion_dimension) {
  //     case "ft":
  //       console.log("ft", sheets);
  //       sheets = this.customer._3d.area / 32;
  //       break;
  //     case "in":
  //       sheets = (this.customer._3d.area / 144) / 32;
  //       break;
  //     case "cm":
  //       break;
  //   }

  //   let sheetsStr = sheets.toFixed(2);
  //   console.log("sheetsStr", sheetsStr);

  //   // let wastage = 0;
  //   // let sheetsStr = sheets.toString();
  //   // if (sheetsStr.indexOf(".") != -1) {
  //   //   wastage = sheets.toString().indexOf(".");
  //   //   wastage = Math.round(Math.round(
  //   //     parseInt(sheetsStr.substring(sheetsStr.indexOf(".") + 1))) 
  //   //     / 100);

  //   // }
  //   this._3d_sheets = "total sheets:" + sheetsStr;

  // }

  // calculate2dSheets() {
  //   let sheets = 0;
  //   console.log(sheets);
  //   switch (this._2d_conversion_dimension) {
  //     case "ft":
  //       console.log("ft", sheets);
  //       sheets = this.customer._2d_area / 32;
  //       break;
  //     case "in":
  //       sheets = (this.customer._2d_area / 144) / 32;
  //       break;
  //     case "cm":
  //       break;
  //   }

  //   let sheetsStr = sheets.toFixed(2);
  //   console.log("sheetsStr", sheetsStr);

  //   // let wastage = 0;
  //   // let sheetsStr = sheets.toString();
  //   // if (sheetsStr.indexOf(".") != -1) {
  //   //   wastage = sheets.toString().indexOf(".");
  //   //   wastage = Math.round(Math.round(
  //   //     parseInt(sheetsStr.substring(sheetsStr.indexOf(".") + 1))) 
  //   //     / 100);

  //   // }
  //   this._2d_sheets = "total sheets:" + sheetsStr;
  // }

  async ionViewWillEnter() {
    await this.storage.create();
    this.retrive();
  }




  async retrive() {
    let tempCustomer = await this.storage.get("customer");
    if (tempCustomer != null) {
      this.customer = tempCustomer;
    }
  }














}
