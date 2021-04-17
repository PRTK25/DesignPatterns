import { Maze } from "../entities/Maze";
import { MazeBuilder } from "./MazeBuilder";

export class MazeGame {
    public createMaze(builder: MazeBuilder): Maze {
        builder.buildMaze();
        builder.buildRoom(1);
        builder.buildRoom(2);
        builder.buildDoor(1, 2);
        return builder.getMaze();
    }
}