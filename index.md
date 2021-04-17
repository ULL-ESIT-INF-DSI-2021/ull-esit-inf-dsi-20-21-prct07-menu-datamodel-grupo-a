## Introducción

Tras lo aprendido en las semanas anteriores, nos enfrentaremos al primer gran reto de la asignatura: un diseño de una aplicación grupal. 

Los pasos a abordar son: primero una reunión para decidir el diseño de clases, para partir de una base similar de trabajo.

Después, se procederá a realizar una división de trabajo coherente con el diseño realizado, haciendo las modificaciones pertinentes a lo propuesto previamente.

Tras esto, de manera asíncrona, se dividirán las labores adicionales, tales como la redacción del informe, la configuración de las GitHub Actions, y la correcta documentación del código.

Por último, se realizará una prueba conjunta del funcionamiento correcto de la aplicación, apuntando posibles mejores que serán implementadas en caso de disponer de suficiente tiempo y en caso contrario, se comentarán como futuras mejoras en las conclusiones del presente informe.

## Objetivos

- Leer documentación de Inquirer.js y Lowdb.
- Hacer uso de los pull requests de GitHub.
- Repasar los principios SOLID.
- Escribir pruebas para cada ejercicio.
- Resolver los ejercicios propuestos.
- Mantenerse dentro del ámbito de las soluciones propuestas (no utilizar elementos del lenguaje todavia no impartidos en clase).
- Elaborar un informe que explique lo realizado.
- Documentar los ejercicios.

## Diseño previo

Se optó por un diseño altamente modular y extendible mas allá de los requerimientos específicos de la práctica, intentando respetar los principios __SOLID__ lo más posible, en particular _Open-Closed_ e _Interface segregation_.

![Diseño de clases 1](img/diseño-previo1.png)

En la primera mitad del diagrama de clases, se observa la clase abstracta __Food__, de la que heredan todos los tipos de ingredientes/alimentos definidos. Detalles interesantes son los tipos __location__ y __macro__, definidos como tipos a utilizar para definir atributos de la clase.

También se pueden apreciar las interfaces _Printable_ y _Identifiable_, que definen la capacidad de ser impreso y de identificar el nombre de un tipo de ingrediente.

![Diseño de clases 2](img/diseño-previo2.png)

## Implementacion de clases base, testing

Para la implementación, se siguió la metodología TDD, diseñando los tests, prediciendo el comportamiento de las clases previo a su desarrollo. Un ejemplo de los tests diseñados sería:

![Tests](img/tests-example.png)

La implementación del diseño de clases se realizó de manera separada, con Nestor desarrollando la primera mitad y Eduardo la segunda. Un ejemplo de algunas de las funcionalidades implementadas: 

![Food methods](img/food-methods.png)

_Métodos de ejemplo en la clase Food_

![Carte methods](img/carte-methods.png)

_Método de ejemplo en la clase Carte_
## Implementacion de Inquirer

## Implementacion de LowDB

## Github Actions

La integración de la Github Actions dentro de nuestro proyecto ha sido realizada siguiendo los tutoriales que se nos han proporcionado en el aula virtual de la asignatura.

En este caso, hemos configurado la Github Action de Node.js y la Github Action relacionada con coveralls. 

### ```Node.js Github Action```
La primera de las acciones la hemos configurado para que clone el repositorio y lanze todos los tests cada vez que se haga un pull request o un push a la rama ```main``` haciendo uso del script que lanza los tests que tenemos establecido en nuestro package.json. 

Esta acción se corresponde con la que proporciona Github dentro del apartado workflow templates:


![Nodejs action](img/node-action.png)


### ```Coveralls Github Action```
La segunda de las acciones la hemos configurado siguiendo una estructura muy similar a la empleada previamente con la acción de node.js, sin embargo en esta acción lo que queremos es lanzar el script asociado con la cobertura de código. 

Esta acción se encuentra dentro de la marketplace de Github:

![Coveralls action](img/coveralls-action.png)


Por otro lado, hemos tenido que hacer público nuestro repositorio para poder enlazarlo con la web de [Coveralls]() para que cada vez que se lanze la Github Action se nos actualize el coverage del repositorio.

![Coveralls](img/coveralls.png)

Además, una vez enlazado el repositorio podremos utilizar el badge que nos proporciona coveralls y que se actualizará junto con el coverage cada vez que se haga un pull request o un push a la rama ```main```. 

Finalmente, tras acabar de configurar todo lo necesario para que se lanzen correctamente las acciones de Github, nuestro repositorio tiene un aspecto similar al siguiente: 

![Badges](img/badges.png)
## Conclusiones

## Bibliografía

Inquirer.js (s.f.). En _NPM_. Recuperado el 10 de abril de 2021 de https://www.npmjs.com/package/inquirer

Lowdb (s.f.). En _NPM_. Recuperado el 10 de abril de 2021 de https://www.npmjs.com/package/lowdb

SOLID principles using TypeScript (s.f.). En _SamuelEresca.net_. Recuperado el 13 de marzo de 2021 de https://samueleresca.net/solid-principles-using-typescript/

