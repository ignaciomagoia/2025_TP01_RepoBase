# Decisiones del Trabajo Práctico 01 – Git Básico

## 1. Configuración inicial del entorno

Cloné el repositorio base desde GitHub utilizando:
git clone https://github.com/ignacio/2025_TP01_RepoBase.git

Configuré mi identidad en Git con:
git config --global user.name "Ignacio Magoia"
git config --global user.email "ignaciomagoiia@hotmail.com"

## 2. Desarrollo de nueva funcionalidad

Para desarrollar una nueva funcionalidad, cree una rama llamada `feature/saludo-personalizado`

Los commits fueron realizados de forma atómica:

1. Agregar funcion saludarConNombre(nombre)  
   Agrega una funcion que permite saludar a un usuario especifico, mostrando un mensaje personalizado.

2. Agregar funcion obtenerFechaActual()  
   Agrega una funcion que retorna la fecha actual formateada en lenguaje local (locale).

Comandos utilizados:

git checkout -b feature/saludo-personalizado //Para crear la rama apartada del main
git status //Para ver el estado de los cambios
git add src/app.js //Prepara los cambios
git commit -m "feat: agregar función saludarConNombre(nombre)" //Sube los cambios
git commit -m "feat: agregar función obtenerFechaActual()" //Sube los cambios

##3. Corrección de error (hotfix)
Creé la rama hotfix/fix-console-semicolon para corregir un error en la función saludar.
Hice commit del arreglo en esa rama.
Luego integré el fix a la rama principal main mediante un merge y subí los cambios al repositorio remoto.
Después, para que mi rama de desarrollo feature/saludo-personalizado también tuviera el fix, hice merge de main a esa rama y la subí al remoto.

comandos utilizados:

git checkout hotfix/fix-console-semicolon
git add .
git commit -m "fix: corregí la función saludar que tenía un error"

git checkout main
git pull origin main
git merge hotfix/fix-console-semicolon
git push origin main

git checkout feature/saludo-personalizado
git merge main
git push origin feature/saludo-personalizado

## 4. Pull Request (PR) y aceptación

Para integrar los cambios de la rama `feature/saludo-personalizado` a `main`, realicé un Pull Request en GitHub.
Esto permitió revisar los cambios antes de fusionarlos.

## 5. Versión etiquetada (tag v1.0)

Creé el tag `v1.0` en la rama principal `main` para marcar una versión estable que incluye
la funcionalidad desarrollada y la corrección del error.

comandos utilizados:

git checkout main
git pull origin main
git tag -a v1.0 -m "Primera versión estable: saludo personalizado + fix"
git push origin v1.0
