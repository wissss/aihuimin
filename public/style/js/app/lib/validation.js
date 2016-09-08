define(function () {
    var loginkey = function (val) {
        if (val == null)
            return true;
        if (val.toString().length == 0)
            return true;
        var regExp = /^([0-9a-z]{11})$/;
        return regExp.test(_39c);
    };
    var idno = function (_39c) {
        if (_39c == null)
            return true;
        if (_39c.toString().length == 0)
            return true;
        var regExp = /^([1-9][0-9]{14})|([1-9][0-9]{16}[0-9Xx])$/;
        if (!regExp.test(_39c))
            return false;

        var birthday;
        if (this.length == 15) {
            birthday = '19' + _39c.substring(6, 8) + '-' + _39c.substring(8, 10) + '-' + _39c.substring(10, 12)
        }
        else {
            birthday = _39c.substring(6, 10) + '-' + _39c.substring(10, 12) + '-' + _39c.substring(12, 14)
        }
        //if (!birthday.isDate()) return false;
        regExp = /^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/
        if (!regExp.test(birthday))
            return false;

        var datePart = birthday.split(/[-/]/);
        if (datePart.length != 3)
            return false;
        var dateYear, dateMonth, dateDay;
        dateYear = parseInt(datePart[0]);
        dateMonth = datePart[1];
        if (dateMonth.substring(0, 1) == "0") {
            dateMonth = parseInt(dateMonth.substring(1));
        } else {
            dateMonth = parseInt(dateMonth);
        }
        dateDay = datePart[2];
        if (dateDay.substring(0, 1) == "0") {
            dateDay = parseInt(dateDay.substring(1))
        } else {
            dateDay = parseInt(dateDay)
        }

        if (dateYear > 2099 || dateYear < 1900)
            return false;
        if (dateMonth > 12 || dateMonth < 1)
            return false;
        if (dateDay > 31 || dateDay < 1)
            return false;
        var arrayDays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
        if (dateYear % 4 == 0)
            arrayDays[1] = 29;
        if (dateYear % 1000 == 0 && dateYear & 4000 != 0)
            arrayDays[1] = 28;
        if (dateDay > arrayDays[dateMonth - 1])
            return false;
        return true;

    }

    var zip = function (_39c) {
        if (_39c == null)
            return true;
        if (_39c.toString().length == 0)
            return true;
        var regExp = /^[1-9][0-9]{5}$/;
        return regExp.test(_39c);

    }
    var email = function (_39c) {
        return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(_39c);
    }
    var url = function (_39d) {
        return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(_39d);
    }
    var length = function (_39e, _39f) {
        var len = $.trim(_39e).length;
        return len >= _39f[0] && len <= _39f[1];
    }
    return {
        loginkey: loginkey,
        length: length,
        url: url,
        email: email,
        zip: zip,
        idno: idno,
        loginkey:loginkey
    }
});
