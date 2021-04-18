import { Maze } from "../entities/Maze";
import { MazeGame } from "./MazeGame";
import { StandardMazeBuilder } from "./StandardMazeBuilder";

const game:MazeGame = new MazeGame();
const builder:StandardMazeBuilder = new StandardMazeBuilder();
const maze = game.createMaze(builder);
