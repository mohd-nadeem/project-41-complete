const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDrops = 100;
var umbrella;
var drops = [];
var thunder1, thunder2, thunder3, thunder4;
var rand;
var thunderFrame = 0;
var thunder

function preload() {

    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");

}

function setup() {
    canvas = createCanvas(400, 700);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200, 570);

    if(frameCount % 150 === 0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0, 400), random(0, 400)));
        }
    }
    
    Engine.run(engine)

}

function draw() {
    background("black");

    umbrella.display();

    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }

    rand = Math.round(random(1, 4));
    if(frameCount % 80 === 0){
        thunderFrame = frameCount;
        thunder = createSprite(random(10, 200), random(10, 30));
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break
            case 2: thunder.addImage(thunder2);
            break
            case 3: thunder.addImage(thunder3);
            break
            case 4: thunder.addImage(thunder4);
            break
            default: break 
        }
        thunder.scale = random(0.3, 0.6)
    }

    if(thunderFrame + 10 === frameCount && thunder){
        thunder.destroy();
    }

    drawSprites();
}

