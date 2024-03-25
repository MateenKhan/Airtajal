import { _1d } from "./_1d";

export class _2d {
    public area!: number;
    public _1d_arr: [_1d] = [new _1d()];
    public plywood_sheet!: number;
    public plywood_wastage!: number;
    public dimension = "ft";
    public material_name!: string;
    public area_label!: string;
    public converted_label!: string;
    public conversion_dimension = "ft";

    constructor() { }

}