### Hexlet tests and linter status:
[![Actions Status](https://github.com/MiggRabbid/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/MiggRabbid/frontend-project-44/actions)

### Maintainability status from Codeclimate.com:
[![Maintainability](https://api.codeclimate.com/v1/badges/0b5a95a1aade441825f3/maintainability)](https://codeclimate.com/github/MiggRabbid/frontend-project-44/maintainability)

## «Игры разума»
Набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново. 

**Игры:**
1. "Калькулятор":
  - "Игроку показывается случайное математическое выражение, например `35 + 16`, которое нужно вычислить и записать правильный ответ;
1. "Арифметическая прогрессия":
  - Игроку показывается ряд чисел, образующий арифметическую прогрессию, одно число заменено на `..`. Игрок должен определить это число.
1. "Проверка на чётность":
  - Игроку показывается случайное число. И ему нужно ответить `yes`, если число чётное, или `no` — если нечётное;
1. "НОД" - наибольший общий делитель:
  - Игроку показывается два случайных числа, например, `25 50`. Игрок должен вычислить и ввести наибольший общий делитель этих чисел;
1. "Простое ли число?":
  - Игроку показывается случайное число, напрмер `7`. И ему нужно ответить `yes`, если число простое, или `no` — если не простое;


**Пример игры:**
```brain-progression
Welcome to the Brain Game!
What number is missing in the progression?
May I have your name? Roman
Hello, Roman!
Question: 14 .. 18 20 22 24 26 28
Your answer: 16 # Пользователь вводит ответ
Correct!
Question: 5 6 7 8 9 .. 11 12
Your answer: 10 # Пользователь вводит ответ
Correct!
Question: 12 15 18 21 .. 27 30 33
Your answer: 24 # Пользователь вводит ответ
Correct!
Congratulations, Roman!
```

**Порядок установки игр:**
```
git clone git@github.com:MiggRabbid/frontend-project-44.git
cd frontend-project-44
make install
npm install
npm link
```

**Для запуска игр используйте следующие команды:**
* `brain-calc` - "Калькулятор". 
* `brain-progression` - "Арифметическая прогрессия".
* `brain-even` - "Проверка на чётность".
* `brain-gcd` - "НОД".
* `brain-prime` - "Простое ли число?".


### Brain-calc on asciinema.org
[![asciicast](https://asciinema.org/a/591667.svg)](https://asciinema.org/a/591667)

### Brain-progression on asciinema.org
[![asciicast](https://asciinema.org/a/591955.svg)](https://asciinema.org/a/591955)

### Brain-even on asciinema.org
[![asciicast](https://asciinema.org/a/591424.svg)](https://asciinema.org/a/591424)

### Brain-gcd on asciinema.org
[![asciicast](https://asciinema.org/a/591949.svg)](https://asciinema.org/a/591949)

### Brain-prime on asciinema.org
[![asciicast](https://asciinema.org/a/591958.svg)](https://asciinema.org/a/591958)