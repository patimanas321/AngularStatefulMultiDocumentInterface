import { Application } from "./application";

export class ApplicationListViewModel {
    public searchedText: string;
    public applicationList: Application[] = [];
    public selectedPage: number;
}