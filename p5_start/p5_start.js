let buttons = [];
let cNames = ['SEE 100 Engineering Graphics', 'SEE 101W Professional Writing', 'SEE 110 Energy & Society', 'SEE 111 Energy Solutions I', 'SEE 221 Statics, Mechanics', 'SEE 222', 'SEE 224', 'SEE 225', 'SEE 230', 'SEE 231',
'SEE 241', 'SEE 242', 'SEE 251', 'SEE 300', 'SEE 310', 'SEE 324', 'SEE 325', 'SEE 331', 'SEE 332', 'SEE 333',
'SEE 341', 'SEE 342', 'SEE 351', 'SEE 352', 'SEE 354', 'SEE 402', 'SEE 410W', 'SEE 411', 'SEE 460', 'SEE 461',
'SEE 462', 'SEE 463', 'PHYS 140', 'PHYS 141', 'CHEM 121', 'CMPT 130', 'CMPT 135', 'BUS 238', 'REM 321', 'GEOG 323', 'GEOG 324',
'GEOG 362', 'MATH 151', 'MATH 152', 'MATH 251', 'MATH 232', 'MATH 310','','','',''];
let creditsArray = ['3', '3', '3', '4', '4', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
'', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
let descArray = ['Introduction to graphical communication in the context of engineering design. Students learn to think and communicate visually. With the use of computer aided design (CAD) tools, students learn the theory and practice of design by dissecting, graphically representing, and redesigning products. Students with credit for ENSC 104, MSE 100, or IAT 106 may not take this course for further credit. ', ' Fundamentals of communicating technical information clearly and concisely for professional engineers. A focus on communicating persuasively about various contemporary technical, social, ethical and environmental issues with technical and non-technical audiences. Students will practice providing constructive feedback to peers, giving presentations and working in a team. Students with credit for CMPT 105W, ENSC 102, ENSC 105W, or MSE 101W may not take this course for further credit. Writing. ', 'Energy availability and sources, environmental consequences of energy supply and consumption, and societal impacts. Explores the environmental, economic, social, and political implications of the choices a society makes to meet its energy needs. Definitions of sustainability. Special emphasis on communication skills. ', ' Introduction to the process of sustainable engineering design. Historical perspective on role of energy, resources and technology in society. Development and demonstration of sustainability thinking through research, case study and design project undertaken by teams of students with integration of socio-economic factors and planning. Course introduces Project Based Learning methods.', 'Introduction to solid mechanics including statics, stress, strain, and deformation. Equilibrium conditions, axial loading, torsional loading, pure bending, stresses and deflections in rods and beams. Students with credit for ENSC 281, MSE 221, or ENSC 385 may not take this course for further credit.', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
'', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
let col  = [];

//Button Binary options
let Z =[];
for (let x = 0; x<cNames.length; x++) {
  Z[x] = 0;
}
//Active colors
for (x=0; x<cNames.length; x++) {
  col[x] = [255, 255, 255];
}
//Default Color
let dc = [11, 139, 186];
//PreReq Color
let prc = [235, 162, 16];
//CoreReq Color
let crc = [255, 251, 0];
//Proceeding Color
let pc = [76, 175, 80];
//Selected Color
let sc = [244, 67, 54];
//Blank Color
let bc = [255, 255, 255];
//Black Color
let bX = 200;
let blck = [bX, bX, bX];

//More Colors
let SEEbdr = [0, 0, 0];
let SEE100BG = [135, 197, 255];
let SEE200BG = [122, 191, 255];
let SEE300BG = [107, 184, 255];
let SEE400BG = [94, 178, 255];
let PHYSBG = [148, 212, 144];
let GEOGBG = [235, 216, 152];
let CHEMBG = [253, 255, 135];
let CMPTBG = [230, 167, 252];
let MATHBG = [255, 195, 135];
let BUSBG = [214, 214, 214];
let PHYSbdr = [148, 212, 144];
let GEOGbdr = [235, 216, 152];
let CHEMbdr = [253, 255, 135];
let CMPTbdr = [230, 167, 252];
let MATHbdr = [255, 195, 135];
let BUSbdr = [214, 214, 214];
//Border Default Color Array
let bdca = [];
for (let x = 0; x<4; x++) {
  bdca[x] = SEE100BG;
}
for (let x = 4; x<13; x++) {
  bdca[x] = SEE200BG;
}
for (let x = 13; x<25; x++) {
  bdca[x] = SEE300BG;
}
for (let x = 25; x<32; x++) {
  bdca[x] = SEE400BG;
}
for (let x = 32; x<34; x++) {
  bdca[x] = PHYSbdr;
}
bdca[34] = CHEMbdr;
for (let x = 35; x<37; x++) {
  bdca[x] = CMPTbdr;
}
for (let x = 37; x<39; x++) {
  bdca[x] = BUSbdr;
}
for (let x = 39; x<42; x++) {
  bdca[x] = GEOGbdr;
}
for (let x = 42; x<47; x++) {
  bdca[x] = MATHbdr;
}
for (let x = 47; x<51; x++) {
  bdca[x] = BUSbdr;
}


//Background Default Color Array
let bgdca = [];
for (let x = 0; x<4; x++) {
  bgdca[x] = SEE100BG;
}
for (let x = 4; x<13; x++) {
  bgdca[x] = SEE200BG;
}
for (let x = 13; x<25; x++) {
  bgdca[x] = SEE300BG;
}
for (let x = 25; x<32; x++) {
  bgdca[x] = SEE400BG;
}
for (let x = 32; x<34; x++) {
  bgdca[x] = PHYSBG;
}
bgdca[34] = CHEMBG;
for (let x = 35; x<37; x++) {
  bgdca[x] = CMPTBG;
}
for (let x = 37; x<39; x++) {
  bgdca[x] = BUSBG;
}
for (let x = 39; x<42; x++) {
  bgdca[x] = GEOGBG;
}
for (let x = 42; x<47; x++) {
  bgdca[x] = MATHBG;
}
for (let x = 47; x<51; x++) {
  bgdca[x] = BUSBG;
}

//Text Default Color Array
let tdca = [];

//Button Size
let bs = 100;
let bsp = bs+2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  
  textFont('Verdana');
  
  //Create Text Area
  fill(255);
  stroke(255);
  rect(bsp*6+5, 5, 103*3, 103*4);
  
  //Buttons Creation and Style
  for (let x = 0; x<cNames.length; x++) {
    buttons[x] = createButton(cNames[x]);
    buttons[x].size(bs, bs);
    buttons[x].style('background-color', color(bgdca[x]));
    buttons[x].style('border', 1);
    buttons[x].style('border-color', color(bdca[x]));
    buttons[x].style('border-radius', '4px');
    buttons[x].style('margin', '4px');
    buttons[x].style('border', '2px solid #f44336;');
    buttons[x].style('font-size', '12px');
    buttons[x].style('font-family', 'Verdana');
    buttons[x].style('opacity', 1);
  }
  for (let x = 47; x<47+4; x++) {
    buttons[x].style('opacity', 0.4);
    buttons[x].style('cursor', 'not-allowed');
  }
    
  //Button Positions
  let startpos = [];
  startpos = [0,0];
  //Row1
  let row1 = [];
  row1 = [0,1,2,3,34,47];
  for (let x = 0; x<row1.length; x++) {
    buttons[row1[x]].position(startpos[0]+bsp*x, startpos[1]+bsp*(0));
  }
  //Row2
  let row2 = [];
  row2 = [32,33,35,36,42,43];
  for (let x = 0; x<row2.length; x++) {
    buttons[row2[x]].position(startpos[0]+bsp*x, startpos[1]+bsp*(1));
  }
  //Row3
  let row3 = [];
  row3 = [4,5,6,7,8,9];
  for (let x = 0; x<row3.length; x++) {
    buttons[row3[x]].position(startpos[0]+bsp*x, startpos[1]+bsp*(2));
  }
  //Row4
  let row4 = [];
  row4 = [10,11,12,37,44,45];
  for (let x = 0; x<row4.length; x++) {
    buttons[row4[x]].position(startpos[0]+bsp*x, startpos[1]+bsp*(3));
  }
  //Row5
  let row5 = [];
  row5 = [13,14,15,16,17,18,19,20,21];
  for (let x = 0; x<row5.length; x++) {
    buttons[row5[x]].position(startpos[0]+bsp*x, startpos[1]+bsp*(4));
  }
  //Row6
  let row6 = [];
  row6 = [22,23,24,38,39,40,41,46,48];
  for (let x = 0; x<row6.length; x++) {
    buttons[row6[x]].position(startpos[0]+bsp*x, startpos[1]+bsp*(5));
  }
  //Row7
  let row7 = [];
  row7 = [25,26,27,28,29,30,31,49,50];
  for (let x = 0; x<row7.length; x++) {
    buttons[row7[x]].position(startpos[0]+bsp*x, startpos[1]+bsp*(6));
  }
  
  //Apply Functionality
  buttons[0].mousePressed(functions0);
  buttons[1].mousePressed(functions1);
  buttons[2].mousePressed(functions2);
  buttons[3].mousePressed(functions3);
  buttons[4].mousePressed(functions4);
}

function selectCol(numIn, colorSelect) {
    buttons[numIn].style('border-color', color(colorSelect));
    buttons[numIn].style('background-color', color(colorSelect));
}

function allBlack() {
  for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('background-color', color(blck));
    buttons[x].style('border-color', color(blck));
    buttons[x].style('color', color(bc));
    buttons[x].style('text-shadow', '0px 0px 1px #000000');
  }
}

function eraseText() {
  fill(255);
  stroke(255);
  rect(bsp*6+5, 5, 103*3+40, 103*4);
}

function displayInfo(numIn) {
  fill(0);
  textSize(14);
  text('Course Name:' + " " +cNames[numIn], bsp*6+10, 20);
  textSize(12);
  text('Credits:' + " " + creditsArray[numIn], bsp*6+10, 47.5);
  text('Course Description:' + '\n' + descArray[numIn], bsp*6+10, 65, bsp*3-10, bsp*4);
  fill(sc);
  rect((bsp*6)+10, (bsp*3)+5, 20,20);
  fill(0);
  text('Selected Course', (bsp*6)+32, (bsp*3)+20);
  fill(crc);
  rect((bsp*6)+10, (bsp*3)+30, 20,20);
  fill(0);
  text('Core-requisite Course', (bsp*6)+32, (bsp*3)+45);
  fill(prc);
  rect((bsp*6)+10, (bsp*3)+55, 20,20);
  fill(0);
  text('Pre-requisite Course', (bsp*6)+32, (bsp*3)+70);
  fill(pc);
  rect((bsp*6)+10, (bsp*3)+80, 20,20);
  fill(0);
  text('Proceeding Course', (bsp*6)+32, (bsp*3)+95);
}

function rundefault() {
  for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('background-color', color(bgdca[x]));
    buttons[x].style('border-color', color(bdca[x]));
    buttons[x].style('text-shadow', '0px 0px 0px #000000');
  }
}

function functions0() {
  if (Z[0] == 0) {
    allBlack();
    selectCol(0, sc);
    selectCol(17, pc);
    selectCol(27, pc);
    selectCol(29, pc);
    eraseText();
    displayInfo(0);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[0] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}

function functions1() {
  if (Z[1] == 0) {
    allBlack();
    selectCol(1, sc);
    selectCol(26, pc);
    eraseText();
    displayInfo(1);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[1] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}

function functions2() {
  if (Z[2] == 0) {
    allBlack();
    selectCol(2, sc);
    selectCol(3, pc);
    selectCol(25, pc);
    eraseText();
    displayInfo(2);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[2] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}

function functions3() {
  if (Z[3] == 0) {
    allBlack();
    selectCol(3, sc);
    selectCol(2, prc);
    eraseText();
    displayInfo(3);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[3] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}

function functions4() {
  if (Z[4] == 0) {
    allBlack();
    selectCol(4, sc);
    selectCol(32, prc);
    selectCol(43, prc);
    selectCol(12, pc);
    selectCol(16, pc);
    selectCol(28, pc);
    selectCol(29, pc);
    selectCol(30, pc);
    eraseText();
    displayInfo(4);
    for (let x = 0; x<cNames.length; x++) {
    Z[x] = 0;
    }
    Z[4] += 1;
  }
  else {
    for (let x = 0; x<cNames.length; x++) {
    buttons[x].style('color', color(0));
    rundefault();
    eraseText();
    Z[x] = 0;
    }
   }
}
