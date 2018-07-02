export class Mdi {
    public selectedDocument: number;
    public ducumentsList: MdiDocument[] = [];
}

export class MdiDocument {
    constructor(
        public id: number,
        public label: string,
        public icon: string,
        public data: any
    ) {

    }


}