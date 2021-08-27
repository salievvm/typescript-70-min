var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[" + name + "]: Typescript version " + this.version;
    };
    return Typescript;
}());
// Construct classic
var Car = /** @class */ (function () {
    function Car(theModel) {
        this.numberOfWheels = 4;
        this.model = theModel;
    }
    return Car;
}());
// Modificators
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = ''; // Доступна в дочерних классах, но не в инстансах
        this.color = 'black';
    }
    Animal.prototype.go = function () {
        console.log('Go');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.setVoice('test');
console.log(cat.color);
// Abstract
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AppCompponent = /** @class */ (function (_super) {
    __extends(AppCompponent, _super);
    function AppCompponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCompponent.prototype.render = function () {
        console.log('Component render');
    };
    AppCompponent.prototype.info = function () {
        return 'this is info';
    };
    return AppCompponent;
}(Component));
