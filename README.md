Migrations:
//run this one if there is no migrations
dotnet ef migrations add InitialCreate

//run this if database does not exist
dotnet ef database update

// if need to fix
//dotnet tool update --global dotnet-ef

///

pihole

https://www.youtube.com/watch?v=fFpDf5si_Hw

https://hub.docker.com/_/microsoft-mssql-server

#docker pull mcr.microsoft.com/mssql/server:2022-preview-ubuntu-22.04

docker pull mcr.microsoft.com/mssql/server:2019-latest

docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=yourStrong(!)Password" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2019-latest

docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=yourStrong(!)Password" -e "MSSQL_PID=Express" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2019-latest

connect
docker exec -it <container_id|container_name> /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P yourStrong(!)Password

///for widnwows

C:/DockerVolumes/SqlData/data
C:/DockerVolumes/SqlData/log
C:/DockerVolumes/SqlData/secrets

docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=yourStrong(!)Password" -e "MSSQL_PID=Express" -p 1433:1433 -v C:/DockerVolumes/SqlData/data:/var/opt/mssql/data -v C:/DockerVolumes/SqlData/log:/var/opt/mssql/log -v C:/DockerVolumes/SqlData/secrets:/var/opt/mssql/secrets -d mcr.microsoft.com/mssql/server:2019-latest
