import GameObject from "../engine/gameobject.js"
import Renderer from "../engine/renderer.js"
import Physics from "../engine/physics.js"
import {Images} from "../engine/resources.js"
import Rock from "./EarthRock.js"
import Input from "../engine/input.js"

class Roof extends GameObject
{
    constructor(x,y,width,height,Img)
    {
        super(x,y);
        this.renderer = new Renderer('purple', 150, 150, Images.roof);
        this.addComponent(this.renderer);
        this.addComponent( new Physics({x:0, y:0}, {x:0, y:0}, {x:0, y:0}));
        this.addComponent( new Input());
        this.width = width;
        this.height = height;
        Math.floor(Math.random() * 10);
        console.log("Random:"+Math);
    }
}
export default Roof