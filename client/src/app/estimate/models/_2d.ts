import { _1d } from "./_1d";

export class _2d {
    public area!: number;
    public _1d_arr: [_1d] = [new _1d()];
    public total_plywood_sheets!: number;
    public plywood_sheet_wastage!: number;
    public dimension = "ft";
    public material!: string;
    public name!: string;
    public area_label!: string;
    public converted_label!: string;
    public conversion_dimension = "ft";

    constructor() { }

}