"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AgeFromDateString = (function () {
    function AgeFromDateString(dateString) {
        var birthday = new Date(dateString);
        this._age = new CalculateAge(birthday).age;
    }
    Object.defineProperty(AgeFromDateString.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: true,
        configurable: true
    });
    return AgeFromDateString;
}());
exports.AgeFromDateString = AgeFromDateString;
var AgeAtDateString = (function () {
    function AgeAtDateString(dateString, atDateString) {
        if (!atDateString) {
            throw new Error('Cannot calculate age at date without a date argument, did you mean to use AgeFromDateString?');
        }
        var birthday = new Date(dateString);
        var atDate = new Date(atDateString);
        this._age = new CalculateAge(birthday, atDate).age;
    }
    Object.defineProperty(AgeAtDateString.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: true,
        configurable: true
    });
    return AgeAtDateString;
}());
exports.AgeAtDateString = AgeAtDateString;
var AgeFromDate = (function () {
    function AgeFromDate(date) {
        this._age = new CalculateAge(date).age;
    }
    Object.defineProperty(AgeFromDate.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: true,
        configurable: true
    });
    return AgeFromDate;
}());
exports.AgeFromDate = AgeFromDate;
var AgeAtDate = (function () {
    function AgeAtDate(birthday, atDate) {
        if (!atDate) {
            throw new Error('Cannot calculate age at date without a date argument, did you mean to use AgeFromDate?');
        }
        this._age = new CalculateAge(birthday, atDate).age;
    }
    Object.defineProperty(AgeAtDate.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: true,
        configurable: true
    });
    return AgeAtDate;
}());
exports.AgeAtDate = AgeAtDate;
var CalculateAge = (function () {
    function CalculateAge(birthday, atDate) {
        var now = Date.now();
        if (atDate) {
            now = atDate.getTime();
        }
        var ageDifMs = now - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        var age = ageDate.getUTCFullYear() - 1970;
        this._age = (age > 0) ? age : 0;
    }
    Object.defineProperty(CalculateAge.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: true,
        configurable: true
    });
    return CalculateAge;
}());
//# sourceMappingURL=age-calculator.js.map