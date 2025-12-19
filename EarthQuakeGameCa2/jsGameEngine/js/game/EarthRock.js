import GameObject from "../engine/gameobject.js"
import Renderer from "../engine/renderer.js"
import Physics from "../engine/physics.js"
import {Images} from "../engine/resources.js"
import Player from "./EarthPlayer.js"
import Roof from "./EarthRoof.js"
import Game from "../engine/game.js"
import Input from "../engine/input.js"
import Level from "./Level.js"


class Rock extends GameObject
{
    constructor(x,y,width,height,Img)
    {
        super(x,y);
        this.dif3 = 15;
        this.renderer = new Renderer('purple', 150, 150, Images.rock);
        this.addComponent(this.renderer);
        this.addComponent( new Physics({x:0, y:0}, {x:0, y:0}, {x:0, y:0}));
        this.addComponent( new Input());
        this.width = width;
        this.height = height;
        this.speed = 15;
        this.RockCount = 0;
        
        this.rockDelay = 1;
    }
    
    update (deltaTime)
    {
        const physics = this.getComponent(Physics);
        const input = this.getComponent(Input);
        
        let S = Math.random() * this.dif3;
        let dif4 = Math.floor(S);
        
        if(input.isKeyDown('ArrowLeft')||input.isKeyDown('ArrowRight'))
        {
            physics.acceleration.y = this.speed+dif4;
            this.direction = 1;
        }
        
                                                                      
        const rof = this.game.gameObjects.filter((obj)=> obj instanceof Roof);
        
        for (const RF of rof)
        {
            if(RF.Safe === true)
            {
                if(physics.isColliding(RF.getComponent(Physics)))
                {this.speed = this.speed+50;
                this.y = 0;
                this.RockCount++;
                RF.RoofType();}
            }
            else if(this.y > 625)
            {
                this.speed = this.speed+50;
                this.y = 0;
                this.RockCount++;
                RF.RoofType();
            }
        }
        
        if(this.RockCount>10)
        {
            this.y = -200;
            this.speed = 0;
            physics.acceleration.y = 0;
        }
        
        super.update(deltaTime);
    }
}
export default Rock