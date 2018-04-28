var carDealership = {
    
    sedan: {
        rentalPrice: "$80",
        availability: 5,
        requestResponse: function() {
            console.log(`Sedan availability is ${this.availability}.  The rental price is ${this.rentalPrice}.`);
        }
    },
    
    suv: {
        rentalPrice: "$100",
        availability: 4,
        requestResponse: function() {
            console.log(`SUV availability is ${this.availability}. The rental price is ${this.rentalPrice}.`);
        }
    },
    
    sports: {
        rentalPrice: "$120",
        availability: 0,
        requestResponse: function() {
            console.log(`Sports availability is ${this.availability}.  The rental price is ${this.rentalPrice}.`);
        }
    }

}

carDealership.sedan.requestResponse();
carDealership.suv.requestResponse();
carDealership.sports.requestResponse();

