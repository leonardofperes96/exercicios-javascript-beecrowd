
var salario = 2000
var novoSalario



if (0<=salario<=400)
{
    novoSalario = salario + (salario * 0.15);
    console.log("O novo salario é", novoSalario, "\nDe reajuste",salario * 0.15, "\nO percentual é 15%")
}
if (  400.01<=salario<=800)
{
    novoSalario = salario + (salario * 0.12);
}

if ( 800.01 <= salario <=1200 )
{
    novoSalario = salario + (salario * 0.10);
}

if (1200.01 <= salario <= 2000)
{
    novoSalario = salario + (salario * 0.07);
}

else
{
    novoSalario = salario + (salario * 0.04);
}

  




