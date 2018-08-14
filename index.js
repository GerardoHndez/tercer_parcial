'use strict'

const colors = require('colors')
const read = require('readline-sync')
const menu = ['Alta de Alumno', 'Consulta', 'Editar', 'Eliminar ']
const Alumno = require('./alumno')

console.log(`${colors.white.bold('================')}`)
console.log(`${colors.white.bold('MENU DE OPCIONES')}`)
console.log(`${colors.white.bold('================')}`)

let opcion = 1
let alumno = new Alumno()
while (menu[opcion] !== undefined) {
  opcion = read.keyInSelect(menu, `${colors.yellow.bold('Elige una opcion del menu?')}`)
  switch (menu[opcion]) {
    case 'Alta de Alumno':
      alumno.estatus = 'Altas'
      alumno.getDatos()
      alumno.agregar()
      break
    case 'Consulta': alumno.consultar()
     console.log(`${alumno.getNombreCompleto()}`)
       console.log(`${alumno.getEdad()}`)
      break
    case 'Editar ' :
      alumno.editar()
      break
    case 'Eliminar ':
      alumno.estatus = 'Eliminar'
      alumno.Eliminar()
      break
  }
}
read.question(`${colors.red.bold('Haz salido del sistema, presiona cualquier tecla para terminar !!!')}`)
