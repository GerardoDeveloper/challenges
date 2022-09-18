
# Design pattern

This project uses the design pattern **The Clean Architecture**.

![](https://xurxodev.com/content/images/size/w1000/2016/07/CleanArchitecture-8b00a9d7e2543fa9ca76b81b05066629.jpg)

## Installation

Installation of bookstores and dependencies with npm

```bash
  npm install
```

In this way all libraries and dependencies found in package.json will be installed.

## Project description

This project is an API Rest that obtains information from **movies**, **actors**, **directors**, **series** and **seasons**.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT=3000`

`DB_USER='my_user_here'`

`DB_PASSWORD='my_password_here'`

`DB_HOST='my_host_here'`

`DB_NAME='my_name_database_here'`

`DB_PORT='my_port_here'`

`JWT_SECRET='my_secret_here'`

## Entities

- Movie.
- Actor.
- Director.
- Serie.
- Seanson.
- Episode.

## Relationships or pivot

- actor_has_movie.
- actor_has_serie.

Each of the entities have their respective CRUD.

## Endpoint example

#### Get all movies

```http
  GET http://localhost:3000/api/v1/movies
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `orderBy`      | `string` | **Optional**.  Order for a specific field of descending way, for example: orderBy=name where is **name** is the field to order|

#### Get one movie

They can be obtained by **admin** and **custom** users
```http
  GET http://localhost:3000/api/v1/movies/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of movie to fetch |
| `token`      | `Bearer token` | **Required**.  |

#### Create movie

```http
  POST http://localhost:3000/api/v1/movies
```
They can only be created by **admin** users
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`      | `Bearer token` | **Required**.  |
| `name`      | `string` | **Required**.  |
| `premiereYear`      | `number` | **Required**.  |
| `gender`      | `string` | **Required**.  |
| `directorId`      | `number` | **Required**.  |

#### Add actor to movie

```http
  POST http://localhost:3000/api/v1/movies/add-actor
```
They can only be created by **admin** users
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`      | `Bearer token` | **Required**.  |
| `actorId`      | `number` | **Required**.  |
| `movieId`      | `number` | **Required**.  |

#### Update movie
They can only be updated by **admin** users

```http
  PUT http://localhost:3000/api/v1/movies/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of movie to fetch |
| `token`      | `Bearer token` | **Required**.  |
| `name`      | `string` | **Required**.  |
| `premiereYear`      | `number` | **Required**.  |
| `gender`      | `string` | **Required**.  |
| `directorId`      | `number` | **Required**.  |

#### Update partial movie
They can only be updated by **admin** users

```http
  PATCH http://localhost:3000/api/v1/movies/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of movie to fetch |
| `token`      | `Bearer token` | **Required**.  |
| `name`      | `string` | **optional**.  |
| `premiereYear`      | `number` | **optional**.  |
| `gender`      | `string` | **optional**.  |
| `directorId`      | `number` | **optional**.  |

#### Delete movie
They can only be deleted by **admin** users

```http
  DELETE http://localhost:3000/api/v1/movies/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. Id of item to fetch |
| `token`      | `Bearer token` | **Required**.  |

