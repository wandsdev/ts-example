var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.isMajority = function () {
        return this._age >= 18;
    };
    Person.prototype.presentation = function () {
        return "Ol\u00E1, meu nome \u00E9 " + this._name + " e tenho " + this._age + " anos !!!";
    };
    return Person;
}());
export { Person };
//# sourceMappingURL=Person.js.map