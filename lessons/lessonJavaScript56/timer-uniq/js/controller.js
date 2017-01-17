

    // CONTROLLER --------------------------------------------------------
    /* Обработка действий пользователя заключается в вызове функций view и
       controller для изменения данных и вывода их на экран. */
    // также осуществляется обработка клавиши tab и enter/space

    //зададим переменные для сокращения обращений к DOM
    UNIQTIMER.elemStart                   = document.getElementById('start');
    UNIQTIMER.elemSplit                   = document.getElementById('split');
    UNIQTIMER.elemReset                   = document.getElementById('reset');

    UNIQTIMER.elemStart.addEventListener('click', function() {
        let className               = UNIQTIMER.elemStart.getAttribute('class');
        let isClassStop             = className.indexOf('stop');
        let isClassContinue         = className.indexOf('continue');

        // start timer, text        = "start", class="btn"
        if (isClassStop             === -1) {
            if (isClassContinue     === -1) {
                UNIQTIMER.elemStart.className      = 'btn stop';
                UNIQTIMER.elemStart.innerHTML      = 'stop';
                UNIQTIMER.tmr.start();
            }
            // continue timer, text = "stop", class="btn stop"
            else {
                UNIQTIMER.elemStart.className      = 'btn stop';
                UNIQTIMER.elemStart.innerHTML      = 'stop';
                UNIQTIMER.tmr.continue();
            }
        }
        // stop timer, text         = "stop", class="btn stop"
        else {
            UNIQTIMER.elemStart.className          = 'btn continue';
            UNIQTIMER.elemStart.innerHTML          = 'continue';
            UNIQTIMER.tmr.stop();
        }

    });

    UNIQTIMER.elemSplit.addEventListener('click', function() {
        UNIQTIMER.addSplit();
    });

    UNIQTIMER.elemReset.addEventListener('click', function() {
        UNIQTIMER.deleteSplit();
        UNIQTIMER.elemStart.className = 'btn';
        UNIQTIMER.elemStart.innerHTML = 'start';
        UNIQTIMER.tmr.reset();
    });
