//Target Class
export abstract class Shape {

    public abstract boundingBox(bottomLeft: number, topRight: number): void;

    public abstract createManipulator(): any;

}
