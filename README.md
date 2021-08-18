For fresh install of rails

```shell
docker build -t rails-toolbox \
       --build-arg USER_ID=$(id -u)  \
       --build-arg GROUP_ID=$(id -g) \
       -f Dockerfile.rails .
```

```shell
docker run -it \
    -v $PWD:/opt/app \
    rails-toolbox rails new --skip-bundle --api api
```