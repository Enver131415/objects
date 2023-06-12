class MainOnline { 
  constructor (name, power) {
    this.name = name,
    this.power = power
  }
}
class Connected extends MainOnline {
  constructor (name, power, watt){
    super (name, power)
    this.consumption = watt
  }
  price(price) {
    console.log(`Price is ${price}.`)
}
}
const computer = new Connected('computer', 'online', 1);
computer.acquired = '5 years ago';
const airConditioner = new Connected('airConditioner', 'online', 5);
airConditioner.serviced = 'last summer';
const electroGuitar = new MainOnline('electroguitar', 'offline');
electroGuitar.used = 'often';
let sumConsumption = 0;
for (let i = 0, array = [computer, airConditioner]; i < array.length; i++) {
  for(let key in array[i]) {
    if (key === 'consumption') {
      sumConsumption += array[i][key]
    }
}
}
console.log('Sum consumption is a ' + sumConsumption + ' watt')
computer.price('60000 руб')
airConditioner.price('40000 руб')
console.log(computer, airConditioner, electroGuitar)