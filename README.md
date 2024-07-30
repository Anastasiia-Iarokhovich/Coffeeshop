# Coffeeshop

This project implements a coffeeshop.


## Installation

| Name                           | Command/Link                              | 
|--------------------------------|-------------------------------------------|
| .Net web api                   | dotnet new webapi -o api                  |
|  Angular                       | ng new client                             |


## Commands

| Command                                   | Description                                              | 
|-------------------------------------------|----------------------------------------------------------|
| docker-compose up                         | Starts PostgreSQL database and pgAdmin                   |
| dotnet watch run                          | Starts the backend server                                |
| ng serve                                  | Starts the client-side application                       |
| ng test                                   | Runs the test suite                                      |
| dotnet ef migrations add name...          | Creates a new migration in Entity Framework Core         |
| dotnet ef database update                 | Updates the database                                     |
| dotnet add package packagename...         | Adds a NuGet package to the project                      |
| dotnet add reference path/to/proj.csproj  | Adds a reference to another project within the solution  |
| dotnet build                              | Compiles the project and its dependencies                |
| dotnet sln add path/to/proj.csproj        | Adds a project or multiple projects to a solution file   |
| dotnet new classlib                       | Creates a new .NET class library project                 |


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

## How to add a new branch in Git, do some changes and than merge this branch with the main branch

1. Create a new branch: git checkout -b feature-branch  
2. Stage changes: git add .  
3. Commit changes: git commit -m "Add new feature..."  
4. Switch back to the main branch: git checkout main  
5. Merge the feature branch into the main branch: git merge feature-branch  
6. Push the changes to the remote repository: git push origin main  
7. Delete the feature branch if it's no longer needed: git branch -d feature-branch  