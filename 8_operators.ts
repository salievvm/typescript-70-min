interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name', 'age'

let key: PersonKeys = 'name'
key = 'age'

// key = 'test'

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'> // 'name', 'email'
type UserKeysNoMeta1 = Pick<User, 'name' | 'email'>

let u1:UserKeysNoMeta = 'name'
// u1 = '_id'

let u2:UserKeysNoMeta = 'name'
// u2 = '_id'