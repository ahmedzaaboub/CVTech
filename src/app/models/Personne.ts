export class Personne{

    id: number;
    name: string;
    firstname: string;
    age: number;
    path: string;
    cin: number;
    job: string;

    constructor(id = 0, name = '', fisrtname= '', age = 0,  path = '', cin = 1, job = ''){

        this.id = id;
        this.name = name;
        this.firstname = fisrtname;
        this.age = age;
        this.path = path;
        this.cin = cin;
        this.job = job;
    }

}
