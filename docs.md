# COMANDOS GIT

## Iniciar un repositorio local

-solo para iniciar el proyecto desde cero

```
git init
# el resultado
# Initialized empty Git repository in /Users/waru/Desktop/app-pedidos/.git/
```

- Para cuando ya existe el proyecto

```
git clone <direccion remota>
```

- Para verificar el estado de cambios del proyecto

```
git status
```

- Para agregar a la zona intermedia(INDEX)

```
git add .
```

- Para agregar al area de espera (HEAD)

```
git commit -m "Primer commit"
```

### Ahora ya estamos preparados para subir al repositorio remoto

- Si quieres conectar tu repositorio local a un repositorio remoto:

```
git remote add origin <server>
git remote add origin git@github.com:waru0/back-app-pedidos.git
```

- Para verificar direcciones remotas

```
git remote -v
```

-Por ultimo: para subir del repositorio local al rewmoto

```
git push -u origin master

```
