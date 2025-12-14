import Game from "../engine/game.js"
import Camera from "../engine/camera.js"
import Player from "./EarthPlayer.js"
import {Images} from "../engine/resources.js"
import Confiner from "../engine/Confiner.js"
import Rock from "./EarthRock.js"
import Roof from "./EarthRoof.js"
import ShakeableCamera from "../engine/ShakeableCamera.js"

class Level extends Game
{
    constructor(canvasId)
    {
        super(canvasId);
        const player = new Player(0, this.canvas.height/1 - 145, Images.player);
        this.addGameObject(player);
        
        this.camera = new ShakeableCamera(null, this.canvas.width, this.canvas.height);
        
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
        
        //this.RockDelay = 4;
        for (const RK of rok)
        {
                this.addGameObject(RK);   
        }
        
        let rof = [
            new Roof (-580, this.canvas.height/1.5 - 50),
            new Roof (-425, this.canvas.height/1.5 - 50),
            new Roof (-270, this.canvas.height/1.5 - 50),
            new Roof (-115, this.canvas.height/1.5 - 50),
            new Roof (40, this.canvas.height/1.5 - 50),
            new Roof (195, this.canvas.height/1.5 - 50),
            new Roof (350, this.canvas.height/1.5 - 50),
            new Roof (505, this.canvas.height/1.5 - 50),
            new Roof (660, this.canvas.height/1.5 - 50),
            new Roof (815, this.canvas.height/1.5 - 50)
        ];
        
        for (const RF of rof)
        {
            this.addGameObject(RF);
        }
        
        this.camera.Intensity = 10; 
        this.delay = 2;
        this.done = false;
        //this.addGameObject(new CountDownUI(this.canvas.width/2,
        //this.canvas.height/2, 4, 100, 40));
    }
    
    update()
    {
        this.delay -= this.deltaTime;
        if(this.done === false && this.delay <= 0)
        {
            this.camera.start(4);
            this.done = true;
        }
        super.update();
    }
}
export default Level