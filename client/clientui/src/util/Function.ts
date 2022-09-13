import { PropsSize } from "../models";

export const ConvertArrToSizeLayout = function (Arr: PropsSize) {

}
function paramsToObject(entries: any) {
    const result: any = {};
    for (const [key, value] of entries) {
        // each 'entry' is a [key, value] tupple
        result[key] = value;
    }
    return result;
}
const GetQuerySearch = function(link:string){
    // const urlParam = new URLSearchParams(link.substring(link.indexOf()))
}


export const GetAllParamOnURL = function () {
    let CurrenUrl = window.location.href;
    let GetSegmentQueryURL = CurrenUrl.substring(window.location.href.indexOf('?') + 1);
    const urlParam = new URLSearchParams(GetSegmentQueryURL);
    const entries = urlParam.entries(); //returns an iterator of decoded [key,value] tuples
    const params = paramsToObject(entries);
    return params
}