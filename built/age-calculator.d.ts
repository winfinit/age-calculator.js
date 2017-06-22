export declare class AgeFromDateString {
    private _age;
    constructor(dateString: string);
    readonly age: number;
}
export declare class AgeAtDateString {
    private _age;
    constructor(dateString: string, atDateString: string);
    readonly age: number;
}
export declare class AgeFromDate {
    private _age;
    constructor(date: Date);
    readonly age: number;
}
export declare class AgeAtDate {
    private _age;
    constructor(birthday: Date, atDate: Date);
    readonly age: number;
}
