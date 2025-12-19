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
        this.dif = 10;
        this.Safe;
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
            
            if (dif2 <= 5)
            {
                this.Safe = true;
                let RofImg = Images.roof;
                return RofImg;
            }
            else
            {
                this.Safe = false;
                let RofImg = Images.unroof;
                return RofImg;
            }
    }
    //console.log("Safe: "+this.Safe);
    //console.log("Safe 2: "+this.Safe);
}
export default Roof