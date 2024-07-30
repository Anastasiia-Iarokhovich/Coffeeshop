# Coffeeshop

This project implements a coffeeshop.


## Installation

| Name                           | Command/Link                              | 
|--------------------------------|-------------------------------------------|
| .Net web api                   | dotnet new webapi -o api                  |
|  Angular                       | ng new client                             |


## Commands

| Command              | Description                              | 
|----------------------|------------------------------------------|
| docker-compose up    | Starts PostgreSQL database and pgAdmin   |
| dotnet watch run     | Starts the backend server                |
| ng serve             | Starts the client-side application       |
| npm test             | Runs the test suite                      |


---

## Add api and client subdirectories to main repository

cd ..\Coffeeshop  
git init  
git add .  
git commit -m "init project"  
git branch -M main  
git remote add origin https://github.com/Anastasiia-Iarokhovich/Coffeeshop.git  
git push -u origin main  

---

## Remove .git directory in api
cd ..\api  
rmdir /s /q .git

## Remove .git directory in client
cd ..\client  
rmdir /s /q .git

---