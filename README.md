TP1 - REACT
El siguiente trabajo consta de un simple contador, el cual mediante un boton aumenta la cuenta y a la vez cambia de color aleatoriamente.

------ APLICACION DE "useContext" ------

En primera instancia creamos el contexto ColorContext, luego su respectivo componente proveedor ColorProvider, el cual tendra una función que recibe un array de colores y nos devuelve un color al azar. Dicha función sera utilizada posteriormente.
Por ultimo creamos una función llamada useColorContext que utiliza el contexto previamente creado.

------ APLICACION DE "useState" ------

Nuestra aplicación consta de dos useStates, uno para cambiar el estado del contador y otro para manejar el color del boton contador.

------ APLICACION DE "useEffect" ------

Nuestro useEffect hara uso de la función previamente guardada en el contexto creado. El mismo contiene un array de colores, el cual debe ser pasado a la función. Cada vez que el estado del "count" cambie o si se activa la funcion "getRandomColor", nuestro useEffect será activado.


------ PARA TERMINAR ------

Tenemos que encerrar a nuestro componente App entre el contexto creado, para poder hacer uso de la función "getRandomColor" sin problemas

