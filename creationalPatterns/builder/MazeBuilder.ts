import { Maze } from "../entities/Maze";

export interface MazeBuilder {

    buildMaze(): void;

    buildRoom(room: number): void;

    buildDoor(roomFrom: number, roomTo: number): void;

    getMaze(): Maze;

}