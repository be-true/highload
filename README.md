# highload
Тестовый репозиторий для изучения высоких нагрузок, масштабирования

## Старт контейнера для нагрузочного тестирования
```
docker run \
    -v $(pwd)/tank:/var/loadtest \
    --net host \
    -it \
    --entrypoint /bin/bash \
    direvius/yandex-tank
```

## Запуск тестов
```
yandex-tank
```