// MODEL ---------------------------------------------------------------
/* Модель задает логику работы приложения
 var UNIQTIMER.tempo                   = UNIQTIMER.timerCounter(),
 Get: UNIQTIMER.tempo.get(),
 Reset: UNIQTIMER.tempo.reset(),
 Set: UNIQTIMER.tempo.set(100),  */
var a = {};
a.b = "test";

var a = {
  b: "test"
};
 var counter = {
    temp: 0,
    set = function(value) {
    temp = value;
    }
}

// генератор (при вызовее добавляет +1)
UNIQTIMER.timerCounter                 = function() {
    var temp                        = 0;

    function counter() {
       return ++temp;
    }

    counter.set                     = function(value) {
        temp                            = value;
    };

    counter.reset                   = function() {
        temp                            = 0;
    };

    counter.get                     = function() {
        return temp;
    };

    return counter;

    // генератор с опросом системного времени
    // let beginning                      = Date.now();
    // let delta;
    //
    // function metronom() {
    //     let current                    = Date.now();
    //     delta                          = current - beginning;
    // }
    //
    // metronom.get                       = function() {
    //     return delta;
    // };
    //
    // metronom.set                       = function(value) {
    //     beginning                      = Date.now() - value;
    // };
    //
    // metronom.reset                     = function() {
    //     beginning                      = Date.now();
    //     delta                          = 0;
    // };
    //
    // return metronom;

    //----------------------------
};

// логика таймера
UNIQTIMER.switchTimer                  = function() {
    let init                           = '',
        tmp                            = '';

    // задем скрость счетчика, где min = 4мск ---------------------------
    function timer() {
        init                           = setInterval(function() {
            UNIQTIMER.tempo();
            UNIQTIMER.setTime(UNIQTIMER.tempo.get());
        }, 41);
    }

    timer.stop                         = function() {
        tmp                            = UNIQTIMER.tempo.get();
        clearInterval(init);
    };

    timer.start                        = function() {
        tmp                            = '';
        UNIQTIMER.tempo.set(tmp);
        clearInterval(init);
        timer();
    };

    timer.continue                     = function() {
        timer();
        UNIQTIMER.tempo.set(tmp);
    };

    timer.reset                        = function() {
        tmp                            = '';
        UNIQTIMER.tempo.reset();
        clearInterval(init);
        // refresh html
        UNIQTIMER.setTime(0);
    };

    return timer;
};

UNIQTIMER.tempo                        = UNIQTIMER.timerCounter();
UNIQTIMER.tmr                          = UNIQTIMER.switchTimer();
