//Michael Bushnell 
function setup(){
    createCanvas(400,269);
    background(150);
    //skin tone in corner
    strokeWeight(0);
    fill(234,207,196);
    rect(320,230,200,200)
    //black background
    fill("black");
    rect(0,75,100,100);
    //yellow hair
    fill(228,181,30);
    strokeWeight(5);
    ellipse(10,160,100,100);
    ellipse(340,150,200,150);
    ellipse(180,205,450,270);
    //red topbit 
    strokeWeight(0);
    fill(133,0,1);
    rect(0,0,400,90);
    //bottom black line
    strokeWeight(1);
    fill (0,0,0);
    rotate(-.012);
    rect(-2,78,400,3);
    //middle black line 
    strokeWeight(1);
    fill (0,0,0);
    rotate(-.003);
    rect(-2,57,400,3);
    //black hair curves 
    noFill();
    strokeWeight(2);
    bezier(27,106,3,106,3,114,0,124);
    strokeWeight(7);
    bezier(200,110,221,99,321,100,360,130);
    bezier(180,135,221,110,300,100,360,133);
    bezier(164,170,221,135,315,100,370,145);
    bezier(164,170,86,152,14,190,-10,210);
    strokeWeight(3);
    bezier(164,170,86,164,14,190,-10,230);
    strokeWeight(10);
    bezier(398,181,309,143,105,200,60,300);
    bezier(270,173,137,147,39,234,5,265);
    bezier(398,204,345,189,231,233,217,267);
    strokeWeight(3);
    bezier(398,204,350,189,231,273,267,300);
    bezier(398,204,350,189,231,243,200,300);
    bezier(398,204,350,189,231,263,220,300);
    strokeWeight(20);
    bezier(401,213,370,220,339,270,350,300);
    strokeWeight(3);
    bezier(364,206,339,212,295,244,300,300);
    strokeWeight(17);
    bezier(170,300,151,257,186,225,210,211);
    strokeWeight(3);
    bezier(100,300,122,237,260,178,284,185);
    bezier(115,290,137,254,164,234,178,235);
    bezier(171,242,146,257,156,246,139,271);
    bezier(153,270,155,260,162,253,167,255);
    bezier(400,135,395,129,380,130,355,135);
    bezier(330,120,365,112,373,111,407,118);
    bezier(349,125,368,116,391,120,403,125);
}
function draw() {
    print(mouseX, mouseY);

}