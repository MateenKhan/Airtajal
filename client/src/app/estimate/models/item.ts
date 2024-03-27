import { _2d } from "./_2d";
import { _3d } from "./_3d";

export class item {
    public name = "";
    public _2d_arr: [_2d] = [new _2d()];
    public _3d_arr: [_3d] = [new _3d()];
    public area = 0;
    constructor() { }
}