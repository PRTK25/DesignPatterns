import { Direction } from "./Directions";
import {MapSite} from "./Mapsite";

export class Room extends MapSite {

    private roomNo: number;
    private sides: Array<MapSite>;

    constructor(roomNo: number) {
        super();
        this.roomNo = roomNo;
        this.sides = Array<MapSite>(4);
    }

    public enter(): void {

    }

    public setSide(direction: Direction, mapsite: MapSite): void {
        this.sides[direction] = mapsite;
    }

    public getSide(direction: Direction): MapSite {
        return this.sides[direction];
    }

    public getRoomNo(): number {
        return this.roomNo;
    }


}