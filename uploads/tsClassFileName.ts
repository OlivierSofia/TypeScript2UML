class Person2 {
    private _id: string;
    protected name: string;
	protected address: string;

    constructor() {
        this._id = uuid.v4();
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getId(): string {
        return this._id;
    }

    public static build(): Person {
        return new Person();
    }
}