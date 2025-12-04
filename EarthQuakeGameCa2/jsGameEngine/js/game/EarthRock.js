import GameObject from "../engine/gameobject.js"
import Renderer from "../engine/renderer.js"
import Physics from "../engine/physics.js"
import {Images} from "../engine/resources.js"
import Player from "./EarthPlayer.js"
import Roof from "./EarthRoof.js"


class Rock
{
    constructor(x, y, width, height)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
export default Rock