export namespace main {
	
	export class Person {
	    id: string;
	    fio: string;
	    birthday: string;
	    wife: string;
	    father: string;
	    mother: string;
	    friends: string;
	    colleagues: string;
	    familiar: string;
	
	    static createFrom(source: any = {}) {
	        return new Person(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.fio = source["fio"];
	        this.birthday = source["birthday"];
	        this.wife = source["wife"];
	        this.father = source["father"];
	        this.mother = source["mother"];
	        this.friends = source["friends"];
	        this.colleagues = source["colleagues"];
	        this.familiar = source["familiar"];
	    }
	}
	export class PersonId {
	    id: string;
	    fio: string;
	
	    static createFrom(source: any = {}) {
	        return new PersonId(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.fio = source["fio"];
	    }
	}

}

