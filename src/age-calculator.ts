export class AgeFromDateString {
	private _age: number;

	constructor(dateString: string) {
		let birthday = new Date(dateString);
		this._age = new CalculateAge(birthday).age;
	}

	get age(): number {
		return this._age;
	}

}

export class AgeAtDateString {
    private _age: number;

    constructor(dateString: string, atDateString: string) {
        if(!atDateString){
            throw new Error('Cannot calculate age at date without a date argument, did you mean to use AgeFromDateString?')
        }
        let birthday = new Date(dateString);
        let atDate = new Date(atDateString);
        this._age = new CalculateAge(birthday, atDate).age;
    }

    get age(): number {
        return this._age;
    }

}

export class AgeFromDate {
	private _age: number;

	constructor(date: Date) {
		this._age = new CalculateAge(date).age;
	}

	get age(): number {
		return this._age
	}

}

export class AgeAtDate {
	private _age: number;

	constructor(birthday: Date, atDate: Date) {
		if(!atDate){
			throw new Error('Cannot calculate age at date without a date argument, did you mean to use AgeFromDate?')
		}
		this._age = new CalculateAge(birthday, atDate).age;
	}

	get age(): number {
		return this._age
	}

}

class CalculateAge {
	private _age: number;

	constructor(birthday: Date, atDate?: Date) {
		let now: number = Date.now();
		if(atDate){
			now = atDate.getTime()
		}
		let ageDifMs: number = now - birthday.getTime();
        let ageDate: Date = new Date(ageDifMs); // miliseconds from epoch
        let age: number = ageDate.getUTCFullYear() - 1970;
        this._age = (age > 0) ? age : 0;
	}

	get age(): number {
		return this._age;
	}

}
