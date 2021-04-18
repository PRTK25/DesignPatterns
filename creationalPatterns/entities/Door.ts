import { Room } from "./Room";
import { MapSite } from "./Mapsite";

export class Door extends MapSite {

    private isOpen: boolean;

    constructor(private room1?: Room, private room2?: Room) {
        super();
        this.isOpen = false;
    }

    public enter(): void {
        throw new Error("Method not implemented.");
    }

    public otherSideRoom(room: Room): Room | undefined{
        if (room == this.room1)
            return this.room2;
        else {
            return this.room2;
        }
    }
}