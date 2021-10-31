let fs = require('fs')
let priceListUSD = JSON.parse(fs.readFileSync('data.json', 'utf8'))
let priceListEUR = JSON.parse(JSON.stringify(priceListUSD))

const EXCHAGE_RATE = 0.83742921

priceListUSD.data.map(function(product){ product.Prices.Currency = 'USD' })

priceListEUR.data.map(function(product){
    product.Prices.Price = +(product.Prices.Price * EXCHAGE_RATE).toFixed(2)
    product.Prices["Retail Price"] = +(product.Prices["Retail Price"] * EXCHAGE_RATE).toFixed(2)
    product.Prices["Wholesale Price"] = +(product.Prices["Wholesale Price"] * EXCHAGE_RATE).toFixed(2)
    product.Prices.Currency = 'EUR'
})

let priceListUSDToWrite = JSON.stringify(priceListUSD, null, '\t');
fs.writeFile('output1.json', priceListUSDToWrite, function(err) {
    if(err) return console.error(err);
    console.log('Data recorded');
})

let priceListEURToWrite = JSON.stringify(priceListEUR, null, '\t');
fs.writeFile('output2.json', priceListEURToWrite, function(err) {
    if(err) return console.error(err);
    console.log('Data recorded');
})