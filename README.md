
## Install:
- 1.Mount docker
  in './postgres' run  `docker-compose up -d`
- 2.To connect to docker and verify that DB and data are created
  `docker exec -it postgres_db_1 /bin/bash`
  `su postgres`
  `psql -U test -d spacetrip  -c "SELECT *  FROM space_center"`
- 3.If no db 
  in './server' run `knex migrate:latest`
- 4.If no data
  in './server'  `knex seed:run`

## Run:
- Test: npm run test
- Server: npm run dev

## Example query:
```
{
  flights {
     nodes{
      id,
      seatCount,
      launchSite{
        name
      }
    }
  }
}
```
-------------------------------------
```
{
  spaceCenters {
     nodes{
      id,
      name,
      planet{
        name
      }
    }
  }
}
```
-------------------------------------
```
{
  planet(id:1) {
    code,
    name,
    spaceCenters{name}
  }
}
```
-------------------------------------
```
{
  flight(id:1){
    code,
    departureAt,
    launchSite{id},
    landingSite {
      name
      planet {
        name
      }
    }
  }
}
```
--------------------------------------
```
{
  spaceCenter(id:"da9c2dee-3b38-4d21-b911-083599c05dad") {
    name,
    latitude
    planet{id,name}
  }
}
```
--------------------------------------
```
{
  planets {
    code,
    name,
    spaceCenters{name}
  }
}
```
