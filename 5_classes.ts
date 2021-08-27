class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version ${this.version}`
    }
}

// Construct classic
class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel
    }
}

// Modificators

class Animal {
    protected voice: string = '' // Доступна в дочерних классах, но не в инстансах
    public color: string = 'black'

    private go() { // Доступна только в текущем классе
        console.log('Go');
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color);


// Abstract

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppCompponent extends Component {
    render(): void {
        console.log('Component render');
    }

    info(): string {
        return 'this is info'
    }
}