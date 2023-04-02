## Hace todos los puntos pedidos (40%)

#### Permite obtener los detalles de un pokemon vía endpoint

OK, aunque la definición de los endpoints no sigue restful.

Para obtener los types el endpoint es: `http://localhost:3000/type?pokemon_name={pokemonName}`

Y para obtener los details es: `http://localhost:3000/pokemon/{pokemonId}`

Deberían seguir una estructura similar, por ejemplo:

`http://localhost:3000/pokemon/types?name={pokemonName}` o `http://localhost:3000/pokemon/{pokemonName}/types`
y
`http://localhost:3000/pokemon/{pokemonId}/details`

#### Si no existe el pokemon, ¿se lanza una excepción de dominio?

OK

#### Si la api da timeout, ¿se lanza una excepción de dominio?

OK

#### Si se lanza una excepción desde el dominio, ¿se traduce en infraestructura a un código HTTP?

OK, aunque todo se mapearía a un `502 No connection` en caso de que no fuese un `PokemonNotFoundException`

#### Tests de aceptación

OK

#### Tests de integración

OK

**Puntuación:  37/40**

## Se aplican conceptos explicados (40%)

#### Separación correcta de capas (application, domain, infrastructure + BC/module/layer)

OK

#### Aggregates + VOs

OK

#### No se trabajan con tipos primitivos en dominio

OK

#### Hay use cases en aplicación reutilizables

OK

#### Se aplica el patrón repositorio

OK

#### Se utilizan object mothers

KO

**Puntuación:  35/40**

## Facilidad setup + README (20%)

#### El README contiene al menos los apartados ""cómo ejecutar la aplicación"", ""cómo usar la aplicación""

OK

#### Es sencillo seguir el apartado ""cómo ejecutar la aplicación""

OK

**Puntuación: 20/20**

**PUNTUACIÓN FINAL: 92/100**
