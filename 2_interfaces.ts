interface Rect {
    readonly id: string 
    color?: string // not string check
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: 'lorem',
    size: {
        width: 100,
        height: 200
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: 'loremipsum',
    size: {
        width: 12,
        height: 22
    }
}

rect2.color = 'black'

const rect3 = {} as Rect
const rect4 = <Rect>{}

// Extends interfaces

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 30,
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

// Implements

interface IClock {
    time: Date,
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

// Чтобы не перечислять все ключи интерфейса. Определить просто его тип допустимый и тип значения.

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    birderRadius: '5px'
}