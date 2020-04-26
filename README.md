# helloworld
 really simple docker container test.

 this container just runs an express HTTP server that prints the value of `HELLO` and `APP_VERSION` (see package.json) environment variables along with this funny little sun-glasses ASCII art:

```
(•_•) 
( •_•)>⌐■-■ 
(⌐■_■) 

hello world!
```

### docker notez

see [3dwardsharp/helloworld](https://hub.docker.com/r/3dwardsharp/helloworld/) on docker HUB.

```
docker build -t 3dwardsharp/helloworld .
docker run -p 3000:3000 --env PORT=3000 --env HELLO=ohai 3dwardsharp/helloworld
```
