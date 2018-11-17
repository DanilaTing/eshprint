This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

To start use `npm start`
Use sass --watch to watch files in src/stylesheets folder `sass --watch scss/style.scss:css/style.css`

## Files 
src/App.js — главный файл приложения <br>
Все остальные файлы лежат в src/components
В компонентах использутеся подход atomic — они делятся от самого крупного к самому мелкому по layouts / organisms / molecules / atoms

## Цель проекта

Этот проект — страница ESH Print. В нем есть три основные части — главная с инфой, калькулятор заказов и информация о воркшопах.
В данный момент я работаю над разделом калькулятор. Калькулятор должен считать заказ по заданным параметрам, сохранять все собранные опции, затем передавать их в тело письма, которое будет отправлено в ESH Print после формирования заказа.

Иформация о калькуляторе и заказе находится в стейте файла src/components/04_layouts/CalcPage.js
