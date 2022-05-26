class vector3 {
    constructor(x,y,z) {
        this.x = x
        this.y = y
        this.z = z
    }
}
class blueprint {
    constructor() {
        this.blueprint = {"bodies":[{"childs":[]}]}
    }
    new() {
        this.blueprint = {"bodies":[{"childs":[]}]}
    }
    get bp() {
        return JSON.stringify(this.blueprint,null,4)
    }
    addBlock(vecBounds, vecPos, colour, shapeID) {
        this.blueprint["bodies"][0]["childs"].push({"bounds":{"x":vecBounds.x,"y":vecBounds.y,"z":vecBounds.z},"color":colour,"pos":{"x":vecPos.x,"y":vecPos.y,"z":vecPos.z}, "shapeID":shapeID,"xaxis":1,"zaxis":3})
    }
}
var bp = new blueprint()
display = document.getElementById("display");
bp.new()
display.innerText = bp.bp
function newBp() {
    display = document.getElementById("display");
    bp.new()
    display.innerText = bp.bp
}
function makeSphere() {
    r = document.getElementById("radius").value
    for (let x = -r; x<=r;x++) {
        for (let y = -r; y<=r;y++) {
            for (let z = -r; z<=r;z++) {
                if (Math.sqrt(x**2+y**2+z**2) <= r && Math.sqrt(x**2+y**2+z**2) > r-2) {
                    bp.addBlock(new vector3(1,1,1),new vector3(x,y,z),"EEEEEE","a6c6ce30-dd47-4587-b475-085d55c6a3b4")
                    display.innerText = bp.bp
                }
            }
        }
    }
}