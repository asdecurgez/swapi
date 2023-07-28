# SWAPI - The Star Wars API

Creé 2 componentes funcionales:
- CharacterList: obtiene los datos de la API, muestra la lista de los 10 personajes y muestra un mensaje de espera (loading)
Usé useState para almacenar los datos de los personajes y useEffect para realizar una única consulta a la API cuando el componente se monta por primera vez.
Los personajes obtenidos se guardan en el estado Characters. Luego, renderizo la lista utilizando el componente characterItem para cada uno.

- CharacterItem: muestraa el nombre y dos características adicionales (gender y height). Recibe el objeto character como una propiedad desde CharacterList y luego se renderiza.
No lo pedía el ejercicio, pero saqué las url de http://swapi.dev de las imágenes de los personajes para que quede un poco más completo. Cada card también tiene un botón para eliminarlo.

Usé styled components para los estilos y una librería muy interesante de npm llamada swapi-node.
Agregué algunos comentarios de color, los estilos sé que podrían estar mejor pero cumple con todos los requisitos del ejercicio.
