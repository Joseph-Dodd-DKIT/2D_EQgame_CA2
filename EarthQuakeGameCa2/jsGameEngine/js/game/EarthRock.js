import GameObject from "../engine/gameobject.js"
import Renderer from "../engine/renderer.js"
import Physics from "../engine/physics.js"
import {Images} from "../engine/resources.js"
import Player from "./EarthPlayer.js"
import Roof from "./EarthRoof.js"
import Game from "../engine/game.js"
import Input from "../engine/input.js"


class Rock extends GameObject
{
    constructor(x,y,width,height,Img)
    {
        super(x,y);
        this.renderer = new Renderer('purple', 150, 150, Images.rock);
        this.addComponent(this.renderer);
        this.addComponent( new Physics({x:0, y:0}, {x:0, y:0}, {x:0, y:0}));
        this.addComponent( new Input());
        this.width = width;
        this.height = height;
        this.speed = 150;
    }
    
    update (deltaTime)
    {
        const physics = this.getComponent(Physics);
        const input = this.getComponent(Input);
        
        if(input.isKeyDown('ArrowLeft')||input.isKeyDown('ArrowRight'))
        {
            physics.velocity.y = +this.speed;
            this.direction = 1;
            //console.log("Show y:");
        }
        if(this.y > 400)
        {
            this.y = 0;
        }
//        else
//        {
//            physics.velocity.x = 0;
//        }
        
        super.update(deltaTime);
    }

}
export default Rock