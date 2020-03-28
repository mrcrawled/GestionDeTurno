## Índice
0. Definición de Rol
1. Listado de Roles
2. Crear Rol
3. Modificar Rol
4. Eliminar Rol

<br><br>

# 0. Definición de Rol

Propiedad   | Tipo   | Descripción
------------|--------|------------
id          | Number | -
rol_tipo    | String | -
descripcion | String | -

<br><br><br>

# 1. Listado de Roles
```
Method   : GET
Endpoint : /roles
Request  : -
Response : Array<JSON>
```
<br>

#### Ejemplo Response
```
[
    {
        id          : 1
        rol_tipo    : "admin"
        descripcion : ""
    },
    {
        id          : 2
        rol_tipo    : "profesional"
        descripcion : ""
    },
    {
        id          : 3
        rol_tipo    : "paciente"
        descripcion : ""
    }
]
```
<br><br><br>

# 2. Crear Rol
```
Method   : POST
Endpoint : /roles
Request  : JSON
Response : JSON
```
<br>

## Request
Propiedad   | Tipo   | Descripción
------------|--------|------------
rol_tipo    | String | -
descripcion | String | -

#### Ejemplo Request
```
{
    rol_tipo    : "secretaria"
    descripcion : "alguna descripcion"
}
```
<br><br>

## Response

### Response - Status 200
Propiedad   | Tipo   | Descripción
------------|--------|------------
id          | Number | id del rol creado

#### Ejemplo
```
{
    id : 4
}
```
<br>

### Response - Status 400
Propiedad   | Tipo   | Descripción
------------|--------|------------
code        | Number | código del error ocurrido
message     | String | descripcion del mensaje ocurrido

#### Ejemplo
```
{
    code    : CODE    | TODO
    message : MESSAGE | TODO
}
```
<br><br><br>

# 3. Modificar Rol
```
Method   : PUT
Endpoint : /roles/:id
Request  : JSON
Response : - | JSON
```
<br>

## Request
Propiedad   | Tipo   | Descripción
------------|--------|------------
rol_tipo    | String | -
descripcion | String | -

#### Ejemplo Request
```
{
    rol_tipo    : "secretario/a"
    descripcion : "nueva descripcion"
}
```
<br><br>

## Response

### Response - Status 400
Propiedad   | Tipo   | Descripción
------------|--------|------------
code        | Number | código del error ocurrido
message     | String | descripcion del mensaje ocurrido

#### Ejemplo
```
{
    code    : CODE    | TODO
    message : MESSAGE | TODO
}
```
<br><br><br>

# 4. Eliminar Rol
```
Method   : DELETE
Endpoint : /roles/:id
Request  : -
Response : - | JSON
```
<br>

## Response

### Response - Status 400
Propiedad   | Tipo   | Descripción
------------|--------|------------
code        | Number | código del error ocurrido
message     | String | descripcion del mensaje ocurrido

#### Ejemplo
```
{
    code    : CODE    | TODO
    message : MESSAGE | TODO
}
```