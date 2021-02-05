import { Room } from "./Room"

export class Maze {
    private rooms:Map<number,Room>;
    constructor(){
        this.rooms = new Map<number,Room>();
    }

    public addRoom(room:Room):void{
        this.rooms.set(room.getRoomNo(),room);
    }

    public getRoom(roomNo: number):Room{
       return this.rooms.get(roomNo);
    }


}