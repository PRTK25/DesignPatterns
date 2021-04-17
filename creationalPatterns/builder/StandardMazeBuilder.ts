import { Direction } from "../entities/Directions";
import { Door } from "../entities/Door";
import { Maze } from "../entities/Maze";
import { Room } from "../entities/Room";
import { Wall } from "../entities/Wall";
import { MazeBuilder } from "./MazeBuilder";

export class StandardMazeBuilder implements MazeBuilder {

    private currentMaze: Maze;

    constructor() {
        this.currentMaze = null;
    }

    buildDoor(roomFrom: number, roomTo: number): void {
        const r1:Room = this.currentMaze.getRoom(roomFrom);
        const r2:Room = this.currentMaze.getRoom(roomTo);
        const d = new Door(r1,r2);
        r1.setSide(this.commonWall(r1,r2),d);
        r2.setSide(this.commonWall(r1,r2),d);
    }

    buildMaze(): void {
        this.currentMaze = new Maze();
    }



    buildRoom(n: number): void {
        if (this.currentMaze.getRoom(n) != null) {
            const room = new Room(n);
            this.currentMaze.addRoom(room);

            room.setSide(Direction.North, new Wall());
            room.setSide(Direction.South, new Wall());
            room.setSide(Direction.East, new Wall());
            room.setSide(Direction.West, new Wall());

        }
    }

    getMaze(): Maze {
        return this.currentMaze;
    }

    private commonWall(room1:Room, room2:Room): Direction{
        let w: Wall;
        return null;
    }



}