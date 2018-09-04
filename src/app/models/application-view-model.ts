import { Application } from "./application";

export class ApplicationViewModel {
    actualData: Application = null;
    infoSectionVisible: boolean = false;
    infoSectionEditMode: boolean = false;
    personalDetailsSectionVisible: boolean = false;
    personalDetailsSectionEditMode: boolean = false;
    incomeSectionVisible: boolean = false;
    incomeSectionEditMode: boolean = false;
}