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
    constructor(x,y,width,height,Img)
    {
        super(x,y);
        this.renderer = new Renderer('purple', 100, 100, Images.player);
        this.addComponent(this.renderer);
        this.addComponent( new Physics({x:0, y:0}, {x:0, y:0}, {x:0, y:0}));
        this.addComponent( new Input());
        this.width = width;
        this.height = height;
        this.speed = 600;
    }
    
    update (deltaTime)
    {
        const physics = this.getComponent(Physics);
        const input = this.getComponent(Input);
        
        if(input.isKeyDown('ArrowLeft')){
            physics.velocity.x = -this.speed;
            this.direction = -1;
            if(this.x < -640)
            {this.x = -640;}
        }else if(input.isKeyDown('ArrowRight')){
            physics.velocity.x = this.speed;
            this.direction = 1;
            if(this.x > 880)
            {this.x = 880;}
        }else{physics.velocity.x = 0;}
        
        
        const rok = this.game.gameObjects.filter((obj)=> obj instanceof Rock);
        for (const RK of rok)
        {
            if(physics.isColliding(RK.getComponent(Physics)))
            {
                alert("Game Over: You Lose...");
            }
        }
        
    super.update(deltaTime);
    }
}
export default Player