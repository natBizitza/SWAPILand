export class Planet {
    constructor(
        public id: number,
        public name: string,
        public terrain?: string,
        public creator?: string,
        public genre?: string,
        public races?: string
    ) {}
}