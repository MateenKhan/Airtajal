import { _2d } from "./_2d";
import { _3d } from "./_3d";
import { item } from "./item";

export class Customer {
    public name = "";
    public phone = "";
    public _items: [item] = [new item()];
    public _3d_sheets = "";
    public _2d_sheets = "";
    public area = 0;
    public area_price = 0;
    public price = 0;
    public start_date !: string;
    public end_date !: string;
    constructor() { }
}