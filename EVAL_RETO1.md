## Hace todos los puntos pedidos (40%)

#### Dado un nombre vía argumento, devolver sus tipos

OK

#### Dado un nombre vía endpoint, devolver sus tipos

OK

#### Si no existe el pokemon, ¿se lanza una excepción de dominio?

OK

#### Si la api da timeout, ¿se lanza una excepción de dominio?

OK

#### Si se lanza una excepción desde el dominio, ¿se traduce en infraestructura a un código HTTP/un error legible en consola?

OK

**Puntuación: 40/40**

## Se aplican conceptos explicados (40%)

#### Separación correcta de capas (application, domain, infrastructure + BC/module/layer)

OK, pero el adaptador no indica la implementación de infraestructura. Es decir, el puerto
es `PokemonRepositoryInterface` y el adaptador de este puerto es `PokemonRepository` que no indica nada.
Debería ser `RestPokemonRepository` o similar, haciendo referencia el tipo del repositorio que implementa

#### Aggregates + VOs

- ¿Dónde están los Value Objects? :( -> `PokemonName`, `PokemonId`...
- Es mejor devolver un objeto `PokemonTypes` en el contrato del repositorio (es decir, en
  el `PokemonRepositoryInterface.getPokemonByName()`) en lugar de devolver una lista. "First class citizens".

#### No se trabajan con tipos primitivos en dominio

KO. En el `PokemonRepositoryInterface` se le pasa un `name: string`. Debería pasarse el Value Object correspondiente

#### Hay use cases en aplicación reutilizables

OK

#### Se aplica el patrón repositorio

OK

**Puntuación: 20/40**

## Facilidad setup + README (20%)

#### El README contiene al menos los apartados ""cómo ejecutar la aplicación"", ""cómo usar la aplicación""

OK, aunque falta indicar como levantar el servidor (he conseguido lanzarlo ejecutando `npm run dev`). 
Una buena idea habría sido hacer un Dockerfile y así no tendría que instalar nada :-P

#### Es sencillo seguir el apartado ""cómo ejecutar la aplicación""

Se explica como ejecutar el CLI, pero no cómo se levanta la aplicación para lanzar el endpoint :-(

**Puntuación: 10/20**

## Extra

- Commits en "baby steps". Pequeños y legibles

**Puntuación: +5**

## Observaciones

- Al hacer el `npm install` me dice que hay 6 vulnerabilidades :(
- No es necesario (ni recomendable) añadir el sufijo que indique que es una interfaz: `PokemonRepositoryInterface`
- Tened cuidado con subir carpetas o clases que no se usen. Por ejemplo, la carpeta `application/dtos` no se utiliza

**PUNTUACIÓN FINAL: 75/100**
