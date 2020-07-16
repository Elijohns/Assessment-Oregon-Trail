class Traveler {
    constructor (name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt () {
        this.food = this.food + 2
    }   

    eat () {
        if (this.food >= 1) {
            this.food = this.food - 1
            this.isHealthy = true
        } else {
            this.isHealthy = false
        }
        
    }   
}

class Wagon {
    constructor (capacity){
        this.capacity = capacity
        this.passengers = []
}
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length

    }
    join(traveler) {
        if (this.getAvailableSeatCount() >= 1) {
            this.passengers.push(traveler)
        }

    }
    shouldQuarantine() {
        for (let index = 0; index < this.passengers.length; index += 1) {
            if (this.passengers[index].isHealthy === false) {
                return true
            }
        }
    }
    totalFood() {
        let totalAmount = 0
        for (let index = 0;index < this.passengers.length; index ++) {
            totalAmount += this.passengers[index].food 
        }
            return totalAmount
    }
}