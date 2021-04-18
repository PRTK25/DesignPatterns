//Adapter

import { Shape } from "./Shape";
import { TextView } from "./TextView";

export class TextShape extends Shape {

    private textView: TextView;

    constructor(textView: TextView) {
        super();
        this.textView = textView;
    }

    public boundingBox(bottomLeft: number, topRight: number) {
        //internally uses textview to draw the bounding box. 
    }

    public createManipulator(): any {
        //create and return manipulator object
    }
}