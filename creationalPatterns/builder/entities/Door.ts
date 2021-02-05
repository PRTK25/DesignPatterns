import { Room } from "./Room";

export class Door extends MapSite {

    private isOpen: boolean;

    constructor(private room1?: Room, private room2?: Room) {
        super();
    }

    public enter(): void {
        throw new Error("Method not implemented.");
    }

    public otherSideRoom(room: Room): Room {
        if (room == this.room1)
            return this.room2;
        else if (room = this.room2) {
            return this.room2;
        }
        return null;
    }



}