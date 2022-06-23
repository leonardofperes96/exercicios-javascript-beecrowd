var n1,n2,n3,n4
n1 = 2 * 2;
n2 = 4*3;
n3 = 7.5 * 4;
n4 = 8 * 1;
var media = (n1 + n2 + n3 + n4)/10;
var notaExame = 6.4;
var mediaExame = (media + notaExame) / 2;



if ( media >=7)
{
        console.log("Media: ",media, "\nAluno Aprovado");
}
if ( media < 5)
{
    console.log("Media: ",media, "\nAluno Reprovado");
}
if (    5.0<=media  && media<=6.9 )
{
    console.log("Media: ",media, "\nAluno em exame")
    if ( mediaExame >= 5.0)
    {
console.log("Nota exame: ",notaExame,"\nAluno aprovado", "\nMedia final: ",mediaExame)
    }
    if ( mediaExame<=4.9)
    {
console.log("Nota exame: ",notaExame,"\nAluno Reprovado","\n", mediaExame)
    }

}


