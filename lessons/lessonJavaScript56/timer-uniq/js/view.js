    if (typeof UNIQTIMER          === 'undefined') {
        var UNIQTIMER             = {};
    }
    // START --------------------------------------------------------------
    //зададим переменную для сокращения обращений к DOM
    UNIQTIMER.parent              = document.getElementById('timer');

    // VIEW ---------------------------------------------------------------

    // зададим формат вывода цифр на дисплей в виде "00:00:00:000"
    UNIQTIMER.format              = function(digits) {
        let msc, sec, min, hour;

        msc                       = Math.floor(digits % 1000);
        if (msc > 99) {
            msc                   = ':' + msc;
        } else if (msc > 9) {
            msc                   = ':' + '0' + msc;
        } else {
            msc                   = ':' + '00' + msc;
        }

        sec                       = Math.floor((digits / 1000) % 60);
        if (sec > 9) {
            sec                   = ':' + sec;
        } else {
            sec                   = ':' + '0' + sec;
        }

        min                       = Math.floor((digits / 60000) % 60);
        if (min > 9) {
            min                   = ':' + min;
        } else {
            min                   = ':' + '0' + min;
        }

        hour                      = Math.floor((digits / 3600000) % 60);
        if (hour <= 9) {
            hour                  = '0' + hour;
        }

        return hour + min + sec + msc;
    };

    // заменим значения в табло таймера
    UNIQTIMER.setTime             = function(digits) {
        let el                    = document.getElementById('clock');
        el.innerHTML              = UNIQTIMER.format(digits);
    };

    // init split - зададим ul для списка значений таймера по клику на Split
    UNIQTIMER.initSplit           = function(p) {
        let el                    = document.createElement('ul');
        el.id                     = 'list-split';
        p.appendChild(el);
    };

    // add info for SPLIT - зафиксируем на экране текущее значение таймера
    UNIQTIMER.addSplit            = function() {
        let parent                = document.getElementById('list-split');
        let elem                  = document.createElement('li');
        parent.appendChild(elem);
        elem.className            = 'li-split';
        elem.innerHTML            = UNIQTIMER.format(UNIQTIMER.tempo.get());
    };

    // RESET - удалим записи и вновь подключим к DOM пустой список ul
    UNIQTIMER.deleteSplit         = function() {
        let elem                  = document.getElementsByClassName('li-split');
        let i                     = elem.length;
        while (elem.item(i - 1) != -1) {
            if (elem.item(i - 1)  == null) {
                break;
            }
            elem.item(i - 1).remove();
            i--;
        }
        UNIQTIMER.initSplit(UNIQTIMER.parent);
    };
