
 const estoque = { /* Objeto que contém os dados dos
                      produtos em estoque; */
        celular: 150, // Quant de celulares em estoque;
        fone: 55, // Quant de fones em estoque;
        penDrive: 37, // Quant de pen drives em estoque;
        caixaAudio: 28, // Quant de caixas de áudio em estoque;
        tablet: 32, // Quant de tablets em estoque;
        carregador: 29, // Quant de carregadores em estoque;
    }
    const vendas = { /* Objeto que contém a quantidades
                     dos produtos vendidos; */
        celular: 38, // Quant de celulares vendidos;
        fone: 10, // Quant de fones vendidos;
        penDrive: 17, // Quant de pen drives vendidos;
        caixaAudio: 8, // Quant de caixas de áudio vendidas;
        tablet: 5, // Quant de tablets vendidos;
        carregador: 15, // Quant de carregadores vendidos;
    }

    const restante ={} /* Objeto que armazena as informações 
    do total de unidades restantes para cada produto ao final da semana 
    de vendas; */
    function resultado (estoque, vendas){ /* Função que retorna
    a diferença entre a quant de produtos em estoque
    e os vendidos; */

        for (let i in estoque) { /* Automatização das variáveis
        do objeto "restante"; */
            restante[i] =  estoque[i] - vendas[i] /* Cálculo de cada
            uma das variáveis do objeto "restante"; */
        }
    return restante // Retorno do objeto "restante" pela função "resultado";
    }
    console.log(resultado(estoque, vendas)) /* Impressão da chamada da função 
    "resultado". */

    /* Equipe: Francisco Wilson e Clayton Martins;
       Turma: 2º Ano Informática 2023;
       Professor: Luis Ilderlândio;
       Disciplina: Programação Web.
    */

