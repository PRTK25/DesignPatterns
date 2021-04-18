import { Maze } from "../entities/Maze";

//builder interface provides methods to build
export interface MazeBuilder {

    buildMaze(): void;

    buildRoom(room: number): void;

    buildDoor(roomFrom: number, roomTo: number): void;

    getMaze(): Maze | null;

}