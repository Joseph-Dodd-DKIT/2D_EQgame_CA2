import GameObject from "../engine/gameobject.js"
import Renderer from "../engine/renderer.js"
import Physics from "../engine/physics.js"
import {Images} from "../engine/resources.js"
import Rock from "./EarthRock.js"
import Input from "../engine/input.js"
import Level from "./Level.js"

class Roof extends GameObject
{
    constructor(x,y,width,height)
    {
        super(x,y);
        this.dif = 15;
        this.destructable=false;
        this.renderer = new Renderer('purple', 150, 150, this.RoofType());
        this.addComponent(this.renderer);
        this.addComponent( new Physics({x:0, y:0}, {x:0, y:0}, {x:0, y:0}));
        this.addComponent( new Input());
        this.width = width;
        this.height = height;
        
        this.tag = "roof";
    }
    
    RoofType()
    {
      
      let r = Math.random() * this.dif;
            let dif2 = Math.floor(r);
            
            //console.log("Two? "+dif2);
            
            if (dif2 <= 5)
            {
                let RofImg = Images.roof;
                return RofImg;
            }
            else
            {
                let RofImg = Images.unroof;
                this.destructable = true;
                return RofImg;
            }
    }
    
    update(deltaTime)
    {
        const physics = this.getComponent(Physics);
        const input = this.getComponent(Input);
        
        const rok = this.game.gameObjects.filter((obj)=> obj instanceof Rock);
        for (const RK of rok)
        {
            if(physics.isColliding(RK.getComponent(Physics))) // && destructable !== true
            {
                this.RoofType();
                //console.log("One");
            }
        }
        super.update(deltaTime);
    }
    
}
export default Roof