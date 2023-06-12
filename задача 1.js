const argument = {
  name: 'Enver'
}
const proto = Object.create(argument);
proto.surname = 'Asanov';
proto.age = '31';
const func = arr => {
  for (let key in arr) {
    if (arr.hasOwnProperty(key)) {
      console.log('Ключ ' + key + ', Значение ' + arr[key])
    }
  }
}
func(proto)