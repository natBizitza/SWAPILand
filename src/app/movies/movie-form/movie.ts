export class Movie {
    constructor(
        public id: number,
        public name?: string,
        public director?: string,
        public producer?: string,
        public releaseDate?: string,
        public description?: string
    ) {}
}

