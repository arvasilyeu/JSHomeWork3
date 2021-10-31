// изначально сделал так, учитывая что лекция была о классах и наследовании:
class ExtendedString extends String {
    removeSpecialCharacters(string) {
        return string.replace(/[^a-zA-Z]/g, "")
    }
}

let str = new ExtendedString()
console.log(str.removeSpecialCharacters('HE!!LL??OO'))

// но потом подумал что это решение не соответствует примеру приведенному в задании и дополниельно сделал так:
Object.defineProperty(Object.prototype, 'removeSpecialCharacters', {
    value: function() {
        return String.prototype.replace.call(this, /[^a-zA-Z]/g, "")
    },
    enumerable: false 
})

console.log('HE!!LL??OO'.removeSpecialCharacters())