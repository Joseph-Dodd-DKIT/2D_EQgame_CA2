import Game from "../engine/game.js"
import Renderer from "../engine/renderer.js"
import GameObject from "../engine/GameObject.js"
import Physics from "../engine/physics.js"
import Input from "../engine/input.js"
import {Images} from "../engine/resources.js"
import Rock from "./EarthRock.js"

const KeyStates = {ArrowLeft: false, ArrowRight: false, Space: false};
class Player extends GameObject
{
    constructor(x,y,width,height,img)
    {
        super(x,y);
        this.renderer = new Renderer('purple', 35, 50, img);
        this.addComponent(this.renderer);
        this.addComponent( new Physics({x:0, y:0}, {x:0, y:0}, {x:0, y:0}));
        this.addComponent( new Input());
        this.width = width;
        this.height = height;
        this.speed = 200;
    }
    
    update (deltaTime)
    {
        const physics = this.getComponent(Physics);
        const input = this.getComponent(Input);
        
        if(input.isKeyDown('ArrowLeft'))
        {
            //console.log("move left");
            physics.velocity.x = -this.speed;
            this.direction = 1;
        }
        else if(input.isKeyDown('ArrowRight'))
        {
            physics.velocity.x = this.speed;
        }
        else
        {
            physics.velocity.x = 0;
        }
        
        super.update(deltaTime);
    }
}
export default Player