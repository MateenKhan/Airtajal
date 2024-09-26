import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'customer-info',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {

  public source_unit = "ft";
  public destination_unit = "in";
  public source_value = 1;
  public destination_value = 12;
  private apk_url = "https://github.com/MateenKhan/Airtajal_Apps/raw/master/app-release.apk";

  constructor(private storage: Storage, private toastController: ToastController) { }

  ngOnInit() { }

  convert() {
    if (this.source_unit === this.destination_unit) return;
    switch (this.source_unit) {
      case "ft":
        if (this.destination_unit == "in") {
          this.destination_value = this.source_value * 12;
        } else if (this.destination_unit == "cm") {
          this.destination_value = this.source_value * 30.48;
        } else if (this.destination_unit == "mm") {
          this.destination_value = this.source_value * 304.8;
        }
        break;
      case "in":
        if (this.destination_unit == "cm") {
          this.destination_value = this.source_value * 2.54;
        } else if (this.destination_unit == "mm") {
          this.destination_value = this.source_value * 25.4;
        } else if (this.destination_unit == "ft") {
          this.destination_value = this.source_value * 0.0833333;
          console.log(this.destination_value);

        }
        break;
      case "cm":
        if (this.destination_unit == "mm") {
          this.destination_value = this.source_value * 10;
        } else if (this.destination_unit == "ft") {
          this.destination_value = this.source_value * 0.0328084;
        } else if (this.destination_unit == "in") {
          this.destination_value = this.source_value * 0.3937008;
        }
        break;
    }
  }

  downloadApk(){
    window.open(this.apk_url, "_blank");
  }
}