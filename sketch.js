var bg1, form, system, code, security;
var score = 0;
var plano2;

function preload() {
  bg1 = loadImage("aladdin_cave.jpg");
  plano2 = loadImage("aladdin_cave2.jpg");
  

}

function setup() {
  createCanvas(1000, 500);
  security = new Security();
  system = new System();
}

function draw() {
  background(bg1);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Pontuação: " + score, 450, 50);

  if (score === 3) {
    clear();

    // Adicione código para alterar o plano de fundo para o plano de fundo do tesouro
    background(plano2);
    fill("white");
    textSize(40);

    // Adicione código para exibir texto "TESOURO ENCONTRADO"
    text("Você encontrou o tesouro. Feliciades!",250,200);
  }

  drawSprites();
}
