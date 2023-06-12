const objectB = {
  name: 'Enver',
  subname: 'Asanov'
}
const func = (str, obj) => {
  for (let key in obj) {
    console.log(key === str)
  }
}
func('name', objectB)