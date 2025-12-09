import Game from "../engine/game.js"
import Camera from "../engine/camera.js"
import Player from "./EarthPlayer.js"
import {Images} from "../engine/resources.js"
import Confiner from "../engine/Confiner.js"
import Rock from "./EarthRock.js"
import Roof from "./EarthRoof.js"

class Level extends Game
{
    constructor(canvasId)
    {
        super(canvasId);
        const player = new Player(0, this.canvas.height/1 - 145, Images.player);
        this.addGameObject(player);
        this.camera.target=player;
        this.camera.confiner = new Confiner(0,0,1000,this.canvas.height);
        
        let rok = [
            new Rock (-580, this.canvas.height/7 - 175, Images.rock), //155
            new Rock (-425, this.canvas.height/7 - 175, Images.rock),
            new Rock (-270, this.canvas.height/7 - 175, Images.rock),
            new Rock (-115, this.canvas.height/7 - 175, Images.rock),
            new Rock (40, this.canvas.height/7 - 175, Images.rock),
            new Rock (195, this.canvas.height/7 - 175, Images.rock),
            new Rock (350, this.canvas.height/7 - 175, Images.rock),
            new Rock (505, this.canvas.height/7 - 175, Images.rock),
            new Rock (660, this.canvas.height/7 - 175, Images.rock),
            new Rock (815, this.canvas.height/7 - 175, Images.rock)
        ];
        
        for (const RK of rok)
        {
            this.addGameObject(RK);
        }
        
        let rof = [
            new Roof (-580, this.canvas.height/1.5 - 50, Images.roof),
            new Roof (-425, this.canvas.height/1.5 - 50, Images.roof),
            new Roof (-270, this.canvas.height/1.5 - 50, Images.roof),
            new Roof (-115, this.canvas.height/1.5 - 50, Images.roof),
            new Roof (40, this.canvas.height/1.5 - 50, Images.roof),
            new Roof (195, this.canvas.height/1.5 - 50, Images.roof),
            new Roof (350, this.canvas.height/1.5 - 50, Images.roof),
            new Roof (505, this.canvas.height/1.5 - 50, Images.roof),
            new Roof (660, this.canvas.height/1.5 - 50, Images.roof),
            new Roof (815, this.canvas.height/1.5 - 50, Images.roof)
        ];
        
        for (const RF of rof)
        {
            this.addGameObject(RF);
        }
        
        
        
        
        
    }
}
export default Level