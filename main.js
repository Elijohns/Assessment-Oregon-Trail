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
    class Doctor extends Traveler {
        constructor(name) {
            super(name)
        
        }
        heal(traveler){
            this.isHealthy = true
        }
    }
    class Hunter extends Traveler {
        constructor(name) {
            super(name)
            this.food = 2
         }

        hunt() {
            this.food = this.food += 5
        }
    
    

    eat () {
        if (this.food >= 2) {
            this.food -= 2
        } else {
            this.isHealthy = false
            this.food = 0
        }
    }

    giveFood(traveler, numOfFoodUnits) {
        if (this.food >= numOfFoodUnits) {
            traveler.food += numOfFoodUnits
            this.food -= numOfFoodUnits

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