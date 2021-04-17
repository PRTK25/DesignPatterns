import { Door } from "../entities/Door";
import { Maze } from "../entities/Maze";
import { Room } from "../entities/Room";
import { Wall } from "../entities/Wall";

export abstract class MazeFactory{

    public abstract createMaze() : Maze;
    public abstract createRoom(index: number) : Room;
    public abstract createWall() : Wall;
    public abstract createDoor(room1:Room,room2:Room) : Door;

}