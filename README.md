# ProjektGrupowy2015
Realizacja zagadnień projektu grupowego 2015 r. dla DAC System

#Uruchamianie
Do uruchomienia projektu potrzebny jest przede wszystkim zainstalowany Node wraz z npm (node package manager).
Gdy już to mamy, wykonujemy następujące polecenia wewnątrz folderu projektu:

`npm install`

`bower install` (jeśli nie działa, wpisujemy: `npm install -g bower` i potem ponownie `bower install`)

`npm install -g grunt-cli`

`npm install -g tsd`

`tsd reinstall --save`

Wszystkie zależności zostały zainstalowane. Możemy teraz uruchomić projekt wpisując `grunt serve`. Testy uruchamiane są poleceniem `grunt test`. 
Najwygodniej pracuje się, kiedy uruchomimy `grunt serve`, podpinane są wtedy automatyczne watchery do plików, które kompilują wszystko gdy tylko zmieni
się zawartość któregoś z plików *.ts.
