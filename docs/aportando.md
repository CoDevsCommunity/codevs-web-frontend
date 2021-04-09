# APORTAR EN EL PROYECTO
## secciones para diseñar:
* dashboard usuario
* dashboard editor

## secciones para desarrollar:
* tutoriales
* recursos
* proyectos
* contacto
* registro de usuario
* ingreso de usuario
* blog
* página de contenido

### pueden revisar los recursos en el respositorio: [link](https://github.com/CoDevsCommunity/codevs-web-frontend)
### y la lista de cosas por hacer en el proyecto:[link](https://github.com/orgs/CoDevsCommunity/projects/2)

## Pasos para aportar al proyecto.

* ve al grupo en github [link](https://github.com/orgs/CoDevsCommunity/projects/2) y revisa tu tarea.
* luego al repositorio del proyecto crearle un fork a la rama dev [link](https://github.com/CoDevsCommunity/codevs-web-frontend/tree/dev)
* esto creará un fork en tu perfil de github.
* ahora clona ese fork de tu perfil a un repositorio local ```git clone (repositorio)```
* yá con esto puedes visualizar el index.html
* sigue los pasos dados en el readme del repositorio.
* crea un nuevo archivo dependiendo de la seccion que vas a desarrollar por ejem: tutoriales.html
* este archivo tendrá los mismos parámetros que index.html, pero su contenido cambiará dependiendo la sección a desarrollar.
* debes respetar app.css app.js normalize.css, estos archivos NO pueden ser modificados, si deseas agregar un estilo o funcionalidad deberás crear uno nuevo como por ejem: tutoriales.css o tutoriales.js

## Pasos para subir tu repositorio

* una vez hayas finalizado tu tarea, deberás subir los cambios
* primero observa que todo esté funcionando bien ``` git status```
* luego agrega los archivos a subir ```git add .```
* posteriormente realiza un comentario utilizando el siguiente recurso [link](https://github.com/pvdlg/conventional-commit-types) ```git commit -m "feat: a new feature"```
* ahora sube tu contenido a tu fork con el comando ```git push origin main``` depende del nombre de tu rama.
* una vez hayas subido tus cambios al repositorio fork, deberás realizar un pull request

### Realizando un pull request

* Desde tu repositorio fork dirigete al boton "Pull request"
* te enviará a una tabla comparativa donde podrás visualizar los cambios que se van a agregar.
* del lado derecho están los cambios subidos a tu fork, y del lado izquierdo el repositorio base, donde deberás elegir la rama "dev", de lo contrario tu pull request será rechazado.
* no te olvides comentar adecuadamente
* luego de seguir todos estos pasos, tu codigo será revisado y posteriormente aceptado o rechazado.

