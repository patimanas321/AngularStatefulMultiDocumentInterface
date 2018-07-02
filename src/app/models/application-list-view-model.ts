import { Application } from "./application";

export class ApplicationListViewModel {
    public searchedText: string;
    public accountsList: Application[] = [];
    public selectedPage: number;
}