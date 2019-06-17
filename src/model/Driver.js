@model('Schedule')
export class Schedule {

    id: number;
    lastCrDate: number;
    nextCrDate: number;
    siteLabel: string;
    siteId: string;
    title: string;
    sharedQueryPartition
?:
    number;

    constructor(args: any) {
        this.id = args.id;
        this.lastCrDate = args.lastCrDate;
        this.nextCrDate = args.nextCrDate;
        this.siteLabel = args.siteLabel;
        this.siteId = args.siteId;
        this.title = args.title;
        this.sharedQueryPartition = 1;
    }


}