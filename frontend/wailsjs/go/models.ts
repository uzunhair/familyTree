export namespace main {
	
	export class Person {
	    id: string;
	    fio: string;
	    birthday: string;
	    father: string;
	    mother: string;
	    wife: string[];
	    friends: string[];
	    colleagues: string[];
	    familiar: string[];
	
	    static createFrom(source: any = {}) {
	        return new Person(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.fio = source["fio"];
	        this.birthday = source["birthday"];
	        this.father = source["father"];
	        this.mother = source["mother"];
	        this.wife = source["wife"];
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
	export class SearchResult {
	    persons: Person[];
	    count: number;
	
	    static createFrom(source: any = {}) {
	        return new SearchResult(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.persons = this.convertValues(source["persons"], Person);
	        this.count = source["count"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

