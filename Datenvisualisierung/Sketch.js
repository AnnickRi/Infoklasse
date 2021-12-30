let table;

function preload() {
table = loadTable("assets/Mord_Totschlag_final.csv", "csv", "header");

}


function setup() {
  
  createCanvas(800, 5900);//default: 650
  background(25, 27, 45); // Dunkelblau

  //TEXT TITEL
  textSize(50);
  let s = 'Anzahl der Opfer von Mord, Totschlag und Tötung auf Verlangen im Jahr 2020 in Deutschland.';
  let m = 'Männer';
  let f = 'Frauen';
fill(237,62,59) // Farbe Titel Rot
text(s, 100, 80, 600, 300); // TITEL wraps within text box

//LEGENDE
textSize(19);
noStroke();
fill(20, 158, 139); // Farbe Legende Männer
textAlign(RIGHT); 
text(m, 290, 395);
circle(320,390,6);

fill(255, 159, 0) // Farbe Legende Frauen
text(f, 290, 430);
circle(320,425,6);



for (let r = 0; r < table.getRowCount(); r++) {
  noStroke();
//Städtenamen
  const name = table.getString(r, "Stadt");
 
//Position
  const y = 520+r*65;
  var yp = y+20; 
  var x = 320;

  fill(150); // Farbe Städtenamen Grau
  textAlign(RIGHT); // Städtenamen = rechtsbündig!
  const opfer = table.getNum(r, "Opfer insg."); // Opferanzahl + Kreisgröße

  //circle(x+250, y, opfer);
  text(name, 290, y); // Städtenamen


  //MÄNNER
  var zähler=0;
  for (let i = 0; i < table.getNum(r, "Opfer M"); i++) {
    if (zähler==4){
      x = 320+i*3;
      yp=y+20-10*i; //y2=y+20-10*i;
      
      zähler = 0;
    }

    fill(20, 158, 139); // Farbe Männer Türkis
    circle(x,yp-40+10*i, 6);
    zähler++;
  }

  yp = y+20+ (zähler-1) * 10; // Superformel (Punkte auffüllen)
 
// FRAUEN
  for (let i = 0; i < table.getNum(r, "Opfer W"); i++) {
    if (zähler==4){
      x = 320+table.getNum(r, "Opfer M")*3+i*3;
      yp=y+10-10*i;
      zähler = 0;
    }

    fill(255, 159, 0) // Farbe Frauen Orange
    circle(x,yp-30+10*i, 6);
    zähler++;

  }
  
}
}


function draw() {
 
for (let r = 0; r < table.getRowCount(); r++) {
  if ((mouseY > 497+r*65) && (mouseY < 533+r*65)){
    if ((mouseX > 315) && (mouseX < 315 + table.getNum(r, "Opfer M")*3+8)) {
      //x , x+länge, y, y+höhe
      fill(25, 27, 45);
      for (let i = 0; i < table.getRowCount(); i++) {// schleife um ALLE zahlen mit einem rechteck zu übermalen
        fill(25, 27, 45);
        rect(315+table.getNum(i, "Opfer insg.")*3+20, 497+i*65, 80, 60); // Rechteck in Dunkelblau zeichnen, um Zahl zu übermalen
      }
      textAlign(LEFT); 
      textSize(29);  
      fill(20, 158, 139); // Türkis
      text(table.getNum(r, "Opfer M") , 315+table.getNum(r, "Opfer insg.")*3+20,502+r*65,100);
    }
    
    else if ((mouseX > 315 + table.getNum(r, "Opfer M")*3+8) && (mouseX < 315 + table.getNum(r, "Opfer insg.")*3+8)) {
      //x , x+länge, y, y+höhe
      fill(25, 27, 45);
      for (let i = 0; i < table.getRowCount(); i++) {// schleife um ALLE zahlen mit einem rechteck zu übermalen
        fill(25, 27, 45);
        rect(315+table.getNum(i, "Opfer insg.")*3+20, 497+i*65, 80, 60); // Rechteck in Dunkelblau zeichnen, um Zahl zu übermalen
      }
      textAlign(LEFT); 
      textSize(29);  
      fill(255, 159, 0) // Orange
      text(table.getNum(r, "Opfer W") , 315+table.getNum(r, "Opfer insg.")*3+20,502+r*65,100);
      } 
    else {
      for (let i = 0; i < table.getRowCount(); i++) {// schleife um ALLE zahlen mit einem rechteck zu übermalen
      fill(25, 27, 45);
      rect(315+table.getNum(i, "Opfer insg.")*3+20, 497+i*65, 80, 60); // Rechteck in Dunkelblau zeichnen, um Zahl zu übermalen
      }
    } 
  }
}



}