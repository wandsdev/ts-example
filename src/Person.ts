interface IPerson {
    name: string;
    age: number;

    isMajority(): boolean
    presentation(): string
}

export class Person implements IPerson {
    private _name!: string;
    private _age!: number;

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get age(): number {
        return this._age;
    }

    set age(age: number) {
        this._age = age;
    }

    public isMajority(): boolean {
        return this._age >= 18;
    }

    public presentation(): string {
        return `Olá, meu nome é ${this._name} e tenho ${this._age} anos !!!`;
    }
}
