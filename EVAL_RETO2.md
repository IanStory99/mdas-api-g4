## Hace todos los puntos pedidos (40%)

#### Permite crear usuarios vía endpoint

OK

#### Permite añadir favoritos vía endpoint

OK, aunque no cumple una de las especificaciones pedidas:
_Asumimos que el usuario está autenticado y recibimos su user_id en el header_

Vosotros lo recibís en el path

#### Si el pokemon ya está marcado como favorito, ¿se lanza una excepción de dominio?

KO, veo en el controller que capturáis la excepción de dominio `UserAlreadyExistsException` pero si lanzo una misma
petición al endpoint `http://localhost:3000/user` me sigue devolviendo 201 - Created.

#### Si el usuario no existe y se le intenta asignar un pokemon favorito, ¿se lanza una excepción de dominio?

KO, devuelve un 200 y dice que se ha añadido correctamente

#### Si el usuario ya existe, ¿se lanza una excepción de dominio?

KO, veo en el controller que capturáis la excepción de dominio `UserPokemonAlreadyInFavouritesException` pero si
lanzo una misma petición al endpoint `http://localhost:3000/user/1/favourites` me sigue devolviendo 200.

#### Si se lanza una excepción desde el dominio, ¿se traduce en infraestructura a un código HTTP?

OK

#### Hay tests unitarios

##### Capa aplicación

OK

##### Capa dominio

- Todos vuestros tests testean únicamente happy paths.

**Puntuación: 20/40**

## Se aplican conceptos explicados (40%)

#### Separación correcta de capas (application, domain, infrastructure + BC/module/layer)

OK

#### Aggregates + VOs

- `UserAggregate` es un nombre que el departamento de producto o negocio no usaría, sería más claro usar
  solamente `User`.
- Los `favouritePokemonIds` son `number` (primitivo). No se debería trabajar con primitivos en la capa de dominio. Como
  mínimo debería ser una lista de Value Objects (por ejemplo `PokemonId[]`). Pero lo ideal sería que la lista fuese un
  objeto de dominio, por ejemplo, `PokemonFavourites` ya que debemos tratar a las listas como "First Class Citizens". En
  este caso concreto además hay una regla de negocio específica que debería estar bajo el dominio de esa clase. La regla
  de que no se repita un pokemon ya marcado como favorito debería estar dentro de `PokemonFavourites` y no
  bajo `UserAggregate`.

#### No se trabajan con tipos primitivos en dominio

OK

#### Hay use cases en aplicación reutilizables

OK

#### Se aplica el patrón repositorio

OK

#### Se utilizan object mothers

KO

**Puntuación: 32/40**

## Facilidad setup + README (20%)

#### El README contiene al menos los apartados "cómo ejecutar la aplicación", "cómo usar la aplicación"

KO, ¿cuáles son los nuevos endpoints?

#### Es sencillo seguir el apartado "cómo ejecutar la aplicación"

OK

**Puntuación: 13/20**

**PUNTUACIÓN FINAL: 65/100**
