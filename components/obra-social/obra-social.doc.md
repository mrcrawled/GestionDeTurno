## Índice
0. Definición de Obra Social
1. Listado de Obras Sociales
2. Obtener Obra Social por ID
3. Crear Obra Social
4. Modificar Obra Social
5. Eliminar Obra Social

<br><br>

# 0. Definición de Obra Social

Propiedad   | Tipo   | Descripción
------------|--------|------------
id          | Number | -
nombre      | String | -
descripcion | String | -

<br><br><br>

# 1. Listado de Obras Sociales
```
Method   : GET
Endpoint : /obra-social
Request  : -
Response : Array<JSON>
```
<br>

#### Ejemplo Response
```
[
    {
        id          : 1
        nombre      : "IAPOS"
        descripcion : ""
    },
    {
        id          : 2
        nombre      : "Jerárquicos Salud"
        descripcion : ""
    },
    {
        id          : 3
        nombre      : "OSUNER"
        descripcion : ""
    }
]
```
<br><br><br>

# 2. Obtener Obra Social por ID
```
Method   : GET
Endpoint : /obra-social/:id
Request  : -
Response : JSON
```
<br>

#### Ejemplo Response
```
{
    id          : 2
    nombre      : "Jerárquicos Salud"
    descripcion : ""
}
```
<br><br><br>

# 3. Crear Obra Social
```
Method   : POST
Endpoint : /obra-social
Request  : JSON
Response : JSON
```
<br>

## Request
Propiedad   | Tipo   | Descripción
------------|--------|------------
nombre      | String | -
descripcion | String | -

#### Ejemplo Request
```
{
    nombre      : "OSUNL"
    descripcion : "Obra Social de la UNL"
}
```
<br><br>

## Response

### Response - Status 200
Propiedad   | Tipo   | Descripción
------------|--------|------------
id          | Number | id del obra social creada

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

# 4. Modificar Rol
```
Method   : PUT
Endpoint : /obra-social/:id
Request  : JSON
Response : - | JSON
```
<br>

## Request
Propiedad   | Tipo   | Descripción
------------|--------|------------
nombre      | String | -
descripcion | String | -

#### Ejemplo Request
```
{
    nombre      : "OSUNL"
    descripcion : "Obra Social de la Universidad Nacional del Litoral"
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

# 5. Eliminar Obra Social
```
Method   : DELETE
Endpoint : /obra-social/:id
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
