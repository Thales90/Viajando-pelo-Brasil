//TELAS
//Menu = 1
//Jogo = 2
//Jogo Fases 5, 6 e 7
var img_pla = []
var questoese = []
var questoes_e = []
//Contadores
var tela = 1
var nivel = 1
var cont_img = 0//contador de imagem animada
var cont_img2 = 0
var tempoF = 0
var certo = 0
var errado = 0
var contador = false
var contempo = 0
var tempo = 0

//Coordenadas das alternativa
X = 350 //Eixo Y
U = 420 //Eixo Y Final, usado no mouseIsPressed
Y = 130 //Comprimento
Z = 70 //Altura
A = 10 //Ângulo
function preload(){
  img_rio = loadImage("RioFundo.png")
  img_pla[0] = loadImage("Earth (1).png")
  img_pla[1] = loadImage("Earth (2).png")
  img_pla[2] = loadImage("Earth (3).png")
  img_pla[3] = loadImage("Earth (4).png")
  img_pla[4] = loadImage("Earth (5).png")
  img_pla[5] = loadImage("Earth (6).png")
  mapa1 = loadImage("Mapa_1.png")
  mapa2 = loadImage("Mapa_2.png")
  mapa3 = loadImage("Mapa_IBGE.png")
  mapa4 = loadImage("Mapa_nor.png")
}
function setup() {
  createCanvas(640, 480);
  frameRate(30)
}
function draw() {
  background("Yellow");
  fill("Green")
  rect(0, -1, 641, 20)
  rect(0, 460, 641, 20);
//Contador  OBS: Tirar dúvida
if (contador==true){
  contempo ++
  tempo = parseInt(contempo/30)
  tempo = (tempo+(40*errado))
}
//if (contador==false){
//  tempoF = tempo
//}

//Botão voltar para o menu
if(tela!=1){  
  fill("White")
  rect(20, 40, 130, 30, 10)
  fill("Black")
  textAlign(CENTER)
  textSize(20)
  text("Menu", 85, 65)   
    if(mouseX>=20&&mouseX<=150&&mouseY>=40&&mouseY<=70){
      if(mouseIsPressed){
        tela = 1}   
    }
}

//Alternativa das perguntas
if  (tela!=1&&tela!=2&&tela!=3&&tela!=4&&tela!=15){  
  fill("White")
  rect(80, X, Y, Z, A)
  rect(255, X, Y, Z, A)
  rect(430, X, Y, Z, A)
  fill("Black")
  textAlign(CENTER)
  textSize(50)
  text("A", 145, 400)
  text("B", 320, 400)
  text("C", 495, 400) 
  }

//Tela informações para o jogador
if  (tela!=1&&tela!=2&&tela!=8){  
  fill("White")
  rect(300, 30, 120, 35, 10)
  rect(450, 30, 150, 45, 10)
  fill("Black")
  textSize(20)
  textAlign(LEFT) 
  text("Corretas:"+certo, 460, 50)
  text("Erradas: "+errado, 460, 70)
  text("Tempo:"+tempo+"s", 310, 55)
  }

//menu
if  (tela==1){
  questoese = []
  contempo = 0
  contador = false
  image(img_rio,-5,110,667,344)
  fill("White")
  rect(235, 150, 150, 40, 10) //Jogar
  rect(235, 245, 150, 40, 10) //Informações
  fill("Black")
  textAlign(CENTER)
  textSize(25)
  text("Viajando pelo Brasil", 305, 100)
  text("Jogar", 310, 180)
  text("Informações", 310, 275)
  if(mouseX >= 235 && mouseX <= 385&& mouseY >= 150   && mouseY <=190){
    if(mouseIsPressed){
        tela = 5
      }
    }
  if(mouseX >= 235 && mouseX <= 385&& mouseY >= 245   && mouseY <=285){
    if(mouseIsPressed){
      tela = 2}
  }
  certo = 0
  errado = 0
  }
//tela de informações
if  (tela==2){
  contador = true
  textAlign(LEFT)
  textSize(20)
  text("Regras: \nO jogo consiste em perguntas e respostas sobre os complexos \nregionais do Brasil. As perguntas devem ser respondidas rapi- \ndamente e corretamente.\nCaso uma resposta seja incorreta, haverá uma punição no tem- \npo. Quanto menor o tempo, maior será a pontuação", 42, 100)
  text("Aluno: \nThales Arruda \nFormação: \nGraduando em \nCiências e Tec- \nnologia", 130, 315)
  text("Educador: \nMagno Elias \nFormação: \nGraduado em \nGeografia", 430, 315)
  fill("Blue")
  rect(20, 300, 100, 140)
  rect(320, 300, 100, 140)
  image(img_pla[cont_img%5],340,240,50,50)
  if(contempo>5){
    cont_img++
    contempo = 0
  }
}

//tela de acerto
if  (tela==3){
  contador = false
  
  fill("White")
  //rect(235, 150, 150, 40, 10) //Jogar
  rect(235, 245, 150, 40, 10) //Informações
  fill("Black")
  textAlign(CENTER)
  textSize(55)
  text("Você Acertou!", 310, 180)
  textSize(25)
  text("Continuar", 310, 275)
  if(mouseX >= 235 && mouseX <= 385&& mouseY >= 245   && mouseY <=285){
    if(mouseIsPressed){
        tela = nivel + 5
    }
  }
} 

//tela de errado
if  (tela==4){
  contador = false
  fill("White")
  //rect(235, 150, 150, 40, 10) //Jogar
  rect(235, 245, 150, 40, 10) //Informações
  fill("Black")
  textAlign(CENTER)
  textSize(55)
  text("Você Errou!", 310, 180)
  textSize(25)
  text("Continuar", 310, 275)
  if(mouseX >= 235 && mouseX <= 385&& mouseY >= 245   && mouseY <=285){
    if(mouseIsPressed){
        tela = nivel + 5
    }
  }
} 

//tela final
if  (tela==15){
  contador = false
  ye = 240
  fill("White")
  rect(235, 150, 165, 160, 10) //Jogar
  fill("Black")
  textAlign(LEFT)
  textSize(25)
  text("Corretas: "+certo, 240, 180)
  text("Erradas:  "+errado,240, 210)
  text("Tempo: "+tempo+"s",240, 240)
  textSize(18)
  text("Questões erradas:",240, 270)
  
  for(cont=0;cont<errado;cont++){
    text(questoese[cont],ye,290)
    ye = ye +14
  }
  }
  
//Fases
if  (tela==5){
  nivel = 1
  //FASE 1
  contador = true
  textAlign(LEFT)
  textSize(18)
  text("Q1) Nesta região brasileira ocorre atualmente a maior expansão agrícola \n do país, com o predomínio das grandes propriedades que desenvolvem \n extensas monoculturas e o uso intensivo de máquinas, corretivos quími- \n cos e fertilizantes que acabam por provocar fortes impactos ambientais. \n Muitos desses estabelecimentos agrícolas pertencem ou estão associa- \n dos aos complexos agroindustriais. O texto faz referência à região: \n \n a) Sul, que desenvolve grandes cultivos de milho e trigo.\n b) Norte, que tem aumentado as áreas canavieiras.\n c) Centro-Oeste, que abriga grandes plantações de soja.", 20, 100)
  if(mouseX>=80&&mouseX<=80+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      errado++
      questoese.push(1)
      tela=4
    } //Alternativa A
  }  
  if(mouseX>=255&&mouseX<=255+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      errado++
      questoese.push(1)
      tela=4
    } //Alternativa B
  }
  if(mouseX>=430&&mouseX<=430+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      certo++
      tela=3
    }  //Alternativa C
  }
} //FASE1
if  (tela==6){
  //FASE 2
  nivel = 2
  contador = true
  textAlign(LEFT)
  textSize(18)
  text("Q2) No mapa exibido, qual das \ncores correponde a região cha- \nmada de 'região concentrada.'\n \n A) Marrom (3) \n B) Rosa (2) \n C) Verde(1)", 30, 100) 
  image(mapa1,280,85,292,259)
  text("1",410,220)
  text("2",490,180)
  text("3",440,270)
  if(mouseX>=80&&mouseX<=80+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      certo++
      tela=3
    } //Alternativa A
}
  if(mouseX>=255&&mouseX<=255+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      errado++
      questoese.push(2)
      tela=4
    } //Alternativa B
  }
  if(mouseX>=430&&mouseX<=430+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
        errado++
      questoese.push(2)
        tela=4
    }  //Alternativa C
  }
} //FASE2
if  (tela==7){
  //FASE 3
  nivel = 3
  contador = true
  textAlign(LEFT)
  textSize(18)
  text("Q3) O seguinte mapa foi idealizado \npor Pedro Pinchas Geiger, é corre- \nto afirmar que ele levou em consi- \nderação qual aspecto para formação \ndas regiões: \na) Características histórico-econômicas. \nb) Características do relevo.\nc) Características técnico-agrárias", 20, 100) //Alternativa A
  image(mapa2,320,100,225,225)
  if(mouseX>=80&&mouseX<=80+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      certo++
      tela=3
    } //Alternativa A
  }
  if(mouseX>=255&&mouseX<=255+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      errado++
      questoese.push(3)
      tela=4
    } //Alternativa B
  }
  if(mouseX>=430&&mouseX<=430+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
        errado++
      questoese.push(3)
        tela=4
    }  //Alternativa C
  }
} //FASE3
if  (tela==8){
  //FASE 4
  nivel = 4
  contador = true
  textAlign(LEFT)
  textSize(18)
  text("Q4) O seguinte mapa está dividido segundo a regionalização do:\na) Instituto Brasileiro de Geografia e Estatísticas.\nb) Professor Milton Santos.\nc) Ministério da Ciência, Tecnologia e Inovações.", 20, 100)//Alternativa A
  image(mapa3,420,100,225,225)
  if(mouseX>=80&&mouseX<=80+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      certo++
      tela=3
    } //Alternativa A
  }
  if(mouseX>=255&&mouseX<=255+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      errado++
      questoese.push(4)
      tela=4
    } //Alternativa B
  }
  if(mouseX>=430&&mouseX<=430+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
        errado++
      questoese.push(4)
        tela=4
    }  //Alternativa C
  }
} //FASE4
if  (tela==9){
  //FASE 5
  nivel = 5
  contador = true
  textAlign(LEFT)
  textSize(18)
  text("Q5)Qual o nome correto das seguintes \nregiões do mapa elaborado por Pedro \nPinchas Geiger:\na) 1 = Região Amazônica, 2 = Região \nConcentrada, 3 = Região Nordeste. \nb) 1 = Região Amazônica, 2 = Região \nCentro-Sul, 3 = Região Nordeste. \nc) 1 = Região Amazônica, 2 = Região \nSul, 3 = Região Norte Oriental.", 20, 100) //Alternativa A
  image(mapa2,370,100,225,225)
  if(mouseX>=80&&mouseX<=80+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      errado++
      questoese.push(5)
      tela=4
    } //Alternativa A
  }
  if(mouseX>=255&&mouseX<=255+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      certo++
      tela=3
    } //Alternativa B
  }
  if(mouseX>=430&&mouseX<=430+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      errado++
      questoese.push(5)
      tela=4
    }  //Alternativa C
  }
} //FASE5
if  (tela==10){
  //FASE 6
  nivel = 6
  contador = true
  textAlign(LEFT)
  textSize(18)
  image(mapa4,370,100,225,225)
  text("Q6) A respeito da região do Nordeste, qual alternativa é correta:\na)	Por ser a região mais industrializada, \napresenta complexos industriais em toda \na sua extensão de forma coordenada.\nb)	A modernização do campo permitiu que \nessa região liderasse a produtividade agrí- \ncola brasileira.\nc)	Apresenta muitas marcas da colonização \ne, por praticamente três séculos, foi a região \nmais rica do Brasil.", 20, 100) //Alternativa A
  if(mouseX>=80&&mouseX<=80+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      errado++
      questoese.push(6)
      tela=4
    } //Alternativa A
  }
  if(mouseX>=255&&mouseX<=255+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      errado++
      questoese.push(6)
      tela=4
    } //Alternativa B
  }
  if(mouseX>=430&&mouseX<=430+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
        certo++
        tela=3
    }  //Alternativa C
  }
} //FASE6
if  (tela==11){
  //FASE 7
  nivel = 7
  contador = true
  textAlign(LEFT)
  textSize(16)
  image(mapa3,415,100,240,240)
  text("Q7) Observe o mapa de divisão regional do Brasil e, em seguida, escolha a proposição \ncorreta.\na)	O número 5 assinala a região Sul, onde se concentram \nnumerosos descendentes de europeus, que utilizaram a \nterra mantendo a cobertura vegetal original, adotando um \nsistema de agricultura extensiva e de autoconsumo.\nb)	O número 1 corresponde à região de maior área, onde \nas condições naturais permitiram o estabelecimento de uma \nfloresta temperada homogênea e que vem apresentando \ncrescente extensão de áreas devastadas. \nc)	O número 4 identifica a região que apresenta maior índice \nde industrialização, com destaque para as cidades de São Paulo \ne Rio de Janeiro, que polarizam as demais regiões brasileiras.", 20, 100) //Alternativa A
  if(mouseX>=80&&mouseX<=80+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      errado++
      questoese.push(7)
      tela=4
    } //Alternativa A
  }
  if(mouseX>=255&&mouseX<=255+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      errado++
      questoese.push(7)
      tela=4
    } //Alternativa B
  }
  if(mouseX>=430&&mouseX<=430+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
        certo++
        tela=3
    }  //Alternativa C
  }
} //FASE7
if  (tela==12){
  //FASE 6
  nivel = 8
  contador = true
  textAlign(LEFT)
  textSize(18)
  image(mapa2,390,110,225,225)
  text("Q8) Com base no mapa das Regiões Geoeconômicas, escolha a \nalternativa correta:\na) O Centro-Sul é a região mais desenvolvida \ndo país, porque foi a primeira a ser ocupada \ndesde o início da colonização. \nb) O norte do estado de Minas Gerais integra \no complexo regional nordestino porque apresenta \ncaracterísticas ambientais e socioeconômicas típicas \ndo semiárido nordestino. \nc)Apesar das políticas de povoamento e de desenvolvi- \nmento regional, a Amazônia continua se distinguindo por \nser um vazio demográfico.", 20, 90) //Alternativa A
  if(mouseX>=80&&mouseX<=80+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      errado++
      questoese.push(8)
      tela=4
    } //Alternativa A
  }
  if(mouseX>=255&&mouseX<=255+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      certo++
      tela=3
    } //Alternativa B
  }
  if(mouseX>=430&&mouseX<=430+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      errado++
      questoese.push(8)
      tela=4
    }  //Alternativa C
  }
} //FASE8
if  (tela==13){
  //FASE 6
  nivel = 9
  contador = true
  textAlign(LEFT)
  textSize(18)
  image(mapa3,420,100,240,240)
  text("Q9) Em relação a divisão feita pelo IBGE, nas alternativas a seguir, \nqual estado não faz parte da região do nordeste: \na) Alagoas.\nb) Maranhão.\nc) Tocantins.", 20, 100) //Alternativa A
  if(mouseX>=80&&mouseX<=80+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      errado++
      questoese.push(9)
      tela=4
    } //Alternativa A
  }
  if(mouseX>=255&&mouseX<=255+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      errado++
      questoese.push(9)
      tela=4
    } //Alternativa B
  }
  if(mouseX>=430&&mouseX<=430+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
        certo++
        tela=3
    }  //Alternativa C
  }
} //FASE9
if  (tela==14){
  //FASE 6
  nivel = 10
  contador = true
  textAlign(LEFT)
  textSize(18)
  text("Q10) O geógrafo Milton Santos e a professora Maria Laura Silveira propuse- \nram uma nova regionalização do Brasil, baseada em quatro regiões. O cri- \ntério principal definidor dessa nova regionalização foi o do “meio técnico- \ncientífico-informacional”, isto é, a “informação” e as “finanças” estão irradia- \ndas de maneiras desiguais e distintas pelo território brasileiro. Qual é a ca- \nracterística da região amazônica: \na) Região de ocupação recente, apresenta uma agricultura moderna \nmecanizada e produtiva.\nb) Região com baixa densidade técnica e demográfica. \nc) Região que concentra maior número de indústrias, portos, aeroportos, \nrodovias e infovias, mas possui uma baixa densidade técnica.", 20, 100) //Alternativa A
  if(mouseX>=80&&mouseX<=80+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      errado++
      questoese.push(10)
      tela=4
    } //Alternativa A
  }
  if(mouseX>=255&&mouseX<=255+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
      certo++
      tela=3
    } //Alternativa B
  }
  if(mouseX>=430&&mouseX<=430+Y&&mouseY>=X&&mouseY<=U){
    if(mouseIsPressed){
        errado++
      questoese.push(10)
        tela=4
    }  //Alternativa C
  }
} //FASE10
}