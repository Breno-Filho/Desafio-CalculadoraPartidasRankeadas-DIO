const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a quantidade de vitórias: ", function(wins) {
    rl.question("Digite a quantidade de derrotas: ", function(loses) {

        wins = parseInt(wins);
        loses = parseInt(loses);
        calculateHeroLevel(wins, loses);
        rl.close();
    });
});


function calculateHeroLevel(wins, loses){

    const winningBalance = wins - loses;

    let level;
    if (winningBalance <= 10){
        level = "Ferro";
    } else if (winningBalance >= 11 && winningBalance <= 20){
        level = "Bronze";
    } else if (winningBalance >=  21 && winningBalance <= 50){
        level = "Prata";
    } else if (winningBalance >= 51 && winningBalance <= 80){
        level = "Ouro";
    } else if(winningBalance >= 81 && winningBalance <= 90){
        level = "Diamante";
    } else if (winningBalance >= 91 && winningBalance <= 100){
        level = "Lendário";
    } else {
        level = "Imortal";
    }
    
    console.log(`O Héroi tem saldo de ${winningBalance} e está no nível ${level}.`);
}