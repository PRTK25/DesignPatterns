import { MazeFactory } from "./MazeFactory";

//Client is unaware of the concrete implementation of
//Factory class supplied at runtime.  
export function createMaze(mazeFactory: MazeFactory){

    const maze = mazeFactory.createMaze();
    const room1 = mazeFactory.createRoom(1);
    const room2 = mazeFactory.createRoom(2);
    const door = mazeFactory.createDoor(room1,room2);
    maze.addRoom(room1);
    maze.addRoom(room2);
}