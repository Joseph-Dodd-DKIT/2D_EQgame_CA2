import Game from "../engine/game.js"
import Camera from "../engine/camera.js"
import Player from "./EarthPlayer.js"
import {Images} from "../engine/resources.js"
import Confiner from "../engine/Confiner.js"

class Level extends Game
{
    constructor(canvasId)
    {
        super(canvasId);
        const player = new Player(0, this.canvas.height/1 - 60, Images.player);
        this.addGameObject(player);
        this.camera.target=player;
        this.camera.confiner = new Confiner(0,0,1000,this.canvas.height);
    }
}
export default Level