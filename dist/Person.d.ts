interface IPerson {
    name: string;
    age: number;
    isMajority(): boolean;
    presentation(): string;
}
export declare class Person implements IPerson {
    private _name;
    private _age;
    get name(): string;
    set name(name: string);
    get age(): number;
    set age(age: number);
    isMajority(): boolean;
    presentation(): string;
}
export {};
//# sourceMappingURL=Person.d.ts.map