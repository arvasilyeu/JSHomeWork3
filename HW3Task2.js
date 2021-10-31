let fs = require('fs')
let identityCards = JSON.parse(fs.readFileSync('data.json', 'utf8'))

const uniqueIdentityCards = identityCards.filter((identityCard,index) => {
    return index === identityCards.findIndex(obj => {
      return JSON.stringify(obj) === JSON.stringify(identityCard);
    });
});

let identityCardsToWrite = JSON.stringify(uniqueIdentityCards, null, '\t');
fs.writeFile('output.json', identityCardsToWrite, function(err) {
    if(err) return console.error(err);
    console.log('Data recorded');
})