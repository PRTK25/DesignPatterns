import {MapSite} from "./Mapsite";

export class Wall extends MapSite {

    public enter(): void {
        throw new Error("Not Allowed");
    }
    
}