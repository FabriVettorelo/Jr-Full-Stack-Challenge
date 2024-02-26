# 🍕Pizzarelo - FullStack Challenge

Con esta aplicación se genera un backend donde se almacenan órdenes generadas desde el sitio y donde veremos a las diferentes pizzas disponibles. Desde el front tenemos acceso a lo que simula ser el menú de un restaurante de pizzas, podemos sumar ítems a nuestro carrito y realizar la orden y ver nuestras órdenes previas en "Mis Ordenes".

## Backend

Luego de clonar el repo, sitúa la consola en la carpeta backend y ejecuta ```npm i``` para instalar las dependencias necesarias para el back, una vez listo puedes ejecutar ```npm start``` en la consola para iniciar tu servidor local en el puerto 3001. Este backend genera dos endpoints, uno es una lista de las pizzas disponibles y el otro se almacenan las órdenes realizadas. Este backend también cuenta con **testing** con jest, para ejecutarlos debes ingresar en la consola ```npm test``` mientras tienes el backend activo con ```npm start```.

```http://localhost:3001/api/orders``` & ```http://localhost:3001/api/pizzas```

## Frontend

Abre la consola en el directorio de la carpeta frontend y ejecuta ```npm i``` para instalar las dependencias necesarias. Luego puedes iniciar el sitio en el puerto 3000 al ingresar ```npm run dev``` en la consola, ya que esta app está realizada con React Vite. En ```http://localhost:3000/``` podrás ver la landing inicial, desde allí podrás ingresar y empezar a agregar pizzas a tu carrito al cual puedes acceder haciendo click en el icono "🛒". Al hacer click en el carrito veras el detalle de tu orden y puedes generarla con cualquier cantidad de pizzas variadas que desees. Si la orden se generó sin problemas recibirás un mensaje confirmando, en caso de haber un error recibirás un mensaje detallando el error.

## Formato JSON para POST de una orden

Si buscas realizar un pedido mediante postman, mientras tienes el backend activo debes enviar un JSON como el siguiente:
```
{
    "items":[
        {
            "pizza":"Romana",
            "quantity":2
        }
    ]
    }
```

A la URL ```http://localhost:3001/api/orders``` como POST, a tener en cuenta que hay 5 variedades de pizza y debe ser sí o sí una de estas para que se pueda postear. (Romana, Bufala, Margherita, Pizza Bianca, Diavola)

¡Un saludo! Fabri V.