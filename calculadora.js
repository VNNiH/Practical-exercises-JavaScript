let opcao = ''

do{
  opcao = prompt('Escolha qual area geometrica você quer calcular:\n'+
  '\n 1. Area do Triangulo'+
  '\n 2. Area do Retangulo'+
  '\n 3. Area do Quadrado'+
  '\n 4. Area do Trapezio'+
  '\n 5. Area do Circulo'+
  '\n 6. Sair')

  switch(opcao){


    case '1':
      function areaTriangulo(base, altura){
        return(base * altura / 2)
      }
      let base = Number(prompt('Digite o valor da base do triangulo:'))
      let altura = Number(prompt('Digite o valor da altura do triangulo:'))
      let area = areaTriangulo(base,altura)
      alert(area)
      break;
    case '2':
      function areaRet(base,altura){
        return(base * altura)
      }
      let baseR = Number(prompt('Digite o valor da base do retangulo:'))
      let alturaR = Number(prompt('Digite o valor da altura do retangulo:'))
      let areaR = areaRet(baseR,alturaR)
      alert(areaR)
      break;

    case '3':
      function areaQuadrado(lado){
        return(lado * lado )
      }
      let lado = Number(prompt('Digite o valor do lado do quadrado:'))
      let areaQ = areaQuadrado(lado)
      alert(areaQ)
      break;

    case '4':
      function areaTrapezio(bMenor,bMaior,Altura){
        return( (bMaior+bMenor) * Altura / 2 )
      }
      let bMenor = Number(prompt('Digite o valor da base menor:'))
      let bMaior = Number(prompt('Digite o valor da base maior:'))
      let alturaTrap = Number(prompt('Digite a altura do trapezio:'))
      let areaT = areaTrapezio(bMaior,bMenor,alturaTrap)
      alert(areaT)
      break;

    case '5':
      function areaCirculo(Pi = 3.14, raio){
        return Pi * (raio * raio)
      }
      let raio = Number(prompt('Digite o valor do raio:'))
      Pi = 3.14
      let areaC = areaCirculo(Pi,raio)
      alert(areaC)
      break;
    
    case '6':
      alert('Encerrando..')
      break
    default:
      alert('Opcao Inválida')
      break
  }
} while(opcao !== '6')

alert('Você saiu.')