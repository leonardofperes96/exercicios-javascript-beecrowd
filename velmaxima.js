/* Levando em consideração a velocidade maxima permitida de 80km em uma determinada rua. crie um progrma que recebe
do usuario um valor que representa a velocidade e com base nessa velocidade diga se ela tomou uma multa leve,grave ou
graivssima. Levando em consideração que se a pessoa estiver abaixo da velocidade maxima seu programa deve exibir 
"nao houve multa", caso esteja até 10km acima deve exibir "levou multa leve", caso esteja emtre 11 a 20km levou multa grave
caso,a da velocidade
caso esteja acima de 20km aa velocidade
maxima exiba "levou multa gravissima"
analisando criticamente o problema -

1- quais sao os dados de entrada necessarios?
a velocidade que o programa recebe do usuario

2 - o que devo fazer com esses dados?
devo ler esses dados e exibit qual foi o nivel da multa tomado
3 - quais sao as restrições do problema?-
4 - qual o resultado esperado??
deve exibir o nivel da multa de acordo com o quao acima esta da velocidade
5 - qual é a sequencia para se obter o resultado esperado?
*/

var velocidade = 101;
var velocidadeMaxima = 80;
        if ( velocidade<=velocidadeMaxima)
{
     console.log("Não levou multa")
}
if (((velocidadeMaxima + 10) >=(velocidade)) && ((velocidade) > (velocidadeMaxima)) )
{
     console.log("Multa leve")
}

if (((velocidadeMaxima + 11) >= (velocidade)) && ((velocidade) <= (velocidadeMaxima+20)))
{ 
     console.log("Multa grave")
}

if ( (velocidadeMaxima + 20) < (velocidade))
{

     console.log("Multa gravissima")
}





