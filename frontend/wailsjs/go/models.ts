export namespace main {
	
	export class BasicPersonInfo {
	    id: string;
	    title: string;
	
	    static createFrom(source: any = {}) {
	        return new BasicPersonInfo(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.title = source["title"];
	    }
	}
	export class FullPersonInfo {
	    id: string;
	    title: string;
	    birthday: string;
	    gender: string;
	    father: string;
	    mother: string;
	    wife: string[];
	    friends: string[];
	    colleagues: string[];
	    familiar: string[];
	    comments: string;
	
	    static createFrom(source: any = {}) {
	        return new FullPersonInfo(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.title = source["title"];
	        this.birthday = source["birthday"];
	        this.gender = source["gender"];
	        this.father = source["father"];
	        this.mother = source["mother"];
	        this.wife = source["wife"];
	        this.friends = source["friends"];
	        this.colleagues = source["colleagues"];
	        this.familiar = source["familiar"];
	        this.comments = source["comments"];
	    }
	}
	export class PersonWithDetails {
	    id: string;
	    title: string;
	    birthday: string;
	    gender: string;
	    father: BasicPersonInfo;
	    mother: BasicPersonInfo;
	    wife: BasicPersonInfo[];
	    friends: BasicPersonInfo[];
	    colleagues: BasicPersonInfo[];
	    familiar: BasicPersonInfo[];
	    comments: string;
	
	    static createFrom(source: any = {}) {
	        return new PersonWithDetails(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.title = source["title"];
	        this.birthday = source["birthday"];
	        this.gender = source["gender"];
	        this.father = this.convertValues(source["father"], BasicPersonInfo);
	        this.mother = this.convertValues(source["mother"], BasicPersonInfo);
	        this.wife = this.convertValues(source["wife"], BasicPersonInfo);
	        this.friends = this.convertValues(source["friends"], BasicPersonInfo);
	        this.colleagues = this.convertValues(source["colleagues"], BasicPersonInfo);
	        this.familiar = this.convertValues(source["familiar"], BasicPersonInfo);
	        this.comments = source["comments"];
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
	export class SearchResult {
	    persons: FullPersonInfo[];
	    count: number;
	
	    static createFrom(source: any = {}) {
	        return new SearchResult(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.persons = this.convertValues(source["persons"], FullPersonInfo);
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

