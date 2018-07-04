export class MdiDocument {
    constructor(
        public id: string,
        public label: string,
        public icon: string,
        public mdiType: MdiType,
        public isActive: boolean,
        public data: any
    ) {

    }
}

export enum MdiType {
    Account,
    Application
}