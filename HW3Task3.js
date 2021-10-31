class Worker {
    constructor(firstName, lastName, phone) {
        this._firstName = firstName
        this._lastName = lastName
        this._phone = phone
    }

    get getWorkerInfo() {
        return `Worker info is: first name - ${this._firstName}, last name - ${this._lastName}, phone - ${this._phone}`
    }
}

class Animal {
    constructor(id, type, color, weight, height, placeOfOrigin) {
        this._id = id
        this._type = type
        this._color = color
        this._weight = weight
        this._height = height
        this._placeOfOrigin = placeOfOrigin
    }

    get getId() {
        return this._id
    }

    set setWeight(value) {
        if(typeof(value) === 'number'){
            this._weight = value
        } else{
            console.log('Invalid input: weight must be set to a Number.')
        }
    }

    set setHeight(value) {
        if(typeof(value) === 'number'){
            this._height = value
        } else{
            console.log('Invalid input: height must be set to a Number.')
        }
    }

    get getAnimalInfo() {
        return `Animal info is: id - ${this._id} type - ${this._type}, color - ${this._color}, weight - ${this._weight}, height - ${this._height}, place of origin - ${this._placeOfOrigin}`
    }
}

class Snakes extends Animal {
    constructor(id, type, color, weight, height, placeOfOrigin, isPoisonous) {
        super(id, type, color, weight, height, placeOfOrigin)
        this._isPoisonous = isPoisonous
    }

    get getIsPoisonous() {
        return this._isPoisonous
    }

    set setIsPoisonous(value) {
        if(typeof(value) === 'boolean'){
            this._isPoisonous = value
        } else{
            console.log('Invalid input: poisonous must be set to a Boolean.')
        }
    }

    get getAnimalInfo() {
        return super.getAnimalInfo + `, isPoisonous - ${this._isPoisonous}`
    }
}

class CatLike extends Animal {
    constructor(id, type, color, weight, height, placeOfOrigin, isSafeToPet) {
        super(id, type, color, weight, height, placeOfOrigin)
        this._isSafeToPet = isSafeToPet
    }

    get getIsSafeToPet() {
        return this._isSafeToPet
    }

    set setIsSafeToPet(value) {
        if(typeof(value) === 'boolean'){
            this._isSafeToPet = value
        } else{
            console.log('Invalid input: safety to pet must be set to a Boolean.')
        }
    }

    get getAnimalInfo() {
        return super.getAnimalInfo + `, isSafeToPet - ${this._isSafeToPet}`
    }
}

class Birds extends Animal {
    constructor(id, type, color, weight, height, placeOfOrigin, isFlying) {
        super(id, type, color, weight, height, placeOfOrigin)
        this._isFlying = isFlying
    }

    get getIsFlyingt() {
        return this._isFlying
    }

    set setIsFlyingt(value) {
        if(typeof(value) === 'boolean'){
            this._isFlying = value
        } else{
            console.log('Invalid input: possibility to flying must be set to a Boolean.')
        }
    }

    get getAnimalInfo() {
        return super.getAnimalInfo + `, isFlying - ${this._isFlying}`
    }
}

class Zoo {
    constructor(address, area, establishedDate,
         ticketPrice, workers, animals) {
        this._address = address
        this._area = area
        this._establishedDate = establishedDate
        this._ticketPrice = ticketPrice
        this._workers = workers
        this._animals = animals
    }
       
    set setZooAddress (value) {
        if(typeof(value) === 'string'){
            this._address = value
        } else{
            console.log('Invalid input: adress must be set to a String.')
        }
    }

    get getZooAddress() {
        return this._address
    }

    set setZooArea (value) {
        if(typeof(value) === 'number'){
            this._area = value
        } else{
            console.log('Invalid input: adress must be set to a Number.')
        }
    }

    get getZooArea() {
        return this._area
    }

    set setTicketPrice (value) {
        if(typeof(value) === 'number'){
            this._ticketPrice = value
        } else{
            console.log('Invalid input: adress must be set to a Number.')
        }
    }

    get getTicketPrice() {
        return this._ticketPrice
    }

    get getEstablishedDate() {
        return this._establishedDate
    }

    addWorker(worker) {
        this._workers.push(worker)
    }

    removeWorker(worker) {
        const index = this._workers.findIndex(obj => {
            return JSON.stringify(obj) === JSON.stringify(worker);
          });
        if (index > -1) {
            this._workers.splice(index, 1);
        } else {
            console.log('Worker are absent in the list.')
        }
    }

    editWorker(currrentWorker, newWorker) {
        const index = this._workers.findIndex(obj => {
            return JSON.stringify(obj) === JSON.stringify(currrentWorker);
          });
        if (index > -1) {
            this._workers.splice(index, 1, newWorker);
        } else {
            console.log('Worker are absent in the list.')
        }
    }

    showAllWorkers() {
        this._workers.forEach(worker => console.log(worker.getWorkerInfo))
    }

    addAnimal(animal) {
        this._animals.push(animal)
    }

    removeAnimal(animal) {
        const index = this._animals.findIndex(obj => {
            return JSON.stringify(obj) === JSON.stringify(animal);
          });
        if (index > -1) {
            this._animals.splice(index, 1);
        } else {
            console.log('Animal are absent in the list.')
        }
    }

    editAnimal(currrentAnimal, newAnimal) {
        const index = this._animals.findIndex(obj => {
            return JSON.stringify(obj) === JSON.stringify(currrentAnimal);
          });
        if (index > -1) {
            this._animals.splice(index, 1, newAnimal);
        } else {
            console.log('Animal are absent in the list.')
        }
    }

    showAllAnimals() {
        this._animals.forEach(animal => console.log(animal.getAnimalInfo))
    }

    showAnimalById(requiredId) {
        const index = this._animals.findIndex(obj => {
            return obj.getId === requiredId;
          });
        if (index > -1) {
            console.log(this._animals[index].getAnimalInfo);
        } else {
            console.log('The animal with required ID are absent in the list..')
        }
    }
}

const firstWorker = new Worker('1_WFirstName', '1_WLastName', '1_WPhone')
const secondWorker = new Worker('2_WFirstName', '2_WLastName', '2_WPhone')
const thirdWorker = new Worker('3_WFirstName', '3_WLastName', '3_Phone')
const workersArr = [firstWorker, secondWorker, thirdWorker]
const newWorker1 = new Worker('1_NewWFirstName', '1_NewWLastName', '1_NewWPhone')
const newWorker2 = new Worker('2_NewWFirstName', '2_NewWLastName', '2_NewWPhone')

const firstAnimal = new Animal(1, '1_AType', '1_AColor', 100, 50, '1_APlaceOfOrigin')
const secondAnimal = new Animal(2, '2_AType', '2_AColor', 20, 40, '2_APlaceOfOrigin')
const thirdAnimal = new Animal(3, '3_AType', '3_AColor', 15, 50, '3_APlaceOfOrigin')
const animalArr = [firstAnimal, secondAnimal,thirdAnimal]
const newAnimal1 = new Animal(4, '1_NewAType', '1_NewAColor', 15, 50, '1_NewAPlaceOfOrigin')
const newAnimal2 = new Animal(5, '2_NewAType', '2_NewAColor', 15, 50, '2_NewAPlaceOfOrigin')

const snake = new Snakes(6, 'Some snake', 'gray', 1, 100, 'SnakePlaceOfOrigin', false)
const catLike = new CatLike(7, 'Some cat', 'black', 2, 20, 'CatPlaceOfOrigin', true)
const bird = new Birds(8, 'Some bird', 'gray', 1, 10, 'BirdPlaceOfOrigin', true)

let zoo = new Zoo('adress', 1000, '24.04.2001', 5, workersArr, animalArr)

console.log('Workers')
console.log('Before the change')
zoo.showAllWorkers()
console.log('Remove worker')
zoo.removeWorker(firstWorker)
zoo.showAllWorkers()
console.log('Add new worker')
zoo.addWorker(newWorker1)
zoo.showAllWorkers()
console.log('Edit worker')
zoo.editWorker(secondWorker, newWorker2)
zoo.showAllWorkers()

console.log('Animals')
console.log('Before the change')
zoo.showAllAnimals()
console.log('Remove animal')
zoo.removeAnimal(firstAnimal)
zoo.showAllAnimals()
console.log('Add new animal')
zoo.addAnimal(newAnimal1)
zoo.showAllAnimals()
console.log('Edit animal')
zoo.editAnimal(secondAnimal, newAnimal2)
zoo.showAllAnimals()
console.log('Show animal by id')
zoo.showAnimalById(3)

console.log('Inheritance')
console.log(snake.getAnimalInfo)
console.log(catLike.getAnimalInfo)
console.log(bird.getAnimalInfo)