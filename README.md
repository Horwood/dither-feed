# dither-feed

Браузерная лента бесконечных пиксельных узоров. Четыре изображения генерируются локально через ONNX Runtime Web, появляются через общую дизеринг-волну и подгружаются по мере прокрутки терминального окна.

## Локальный запуск

~~~bash
npm install
npm run dev
~~~

## Экспорт модели

~~~bash
uv venv .venv --python python3.12
uv pip install --python .venv/bin/python -r requirements-train.txt
.venv/bin/python scripts/train.py --export-only
~~~

Экспорт создаёт модель только для паттернов с формой входа [4, 40] и выхода [4, 64, 24, 24]. Банк латентов балансируется по пяти мягким направлениям: fauna, botanical, terrain, geometry и textile. Исходный датасет не хранится в репозитории и загружается сценарием при необходимости.
