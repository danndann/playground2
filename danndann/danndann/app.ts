/// <reference path='phonegap.d.ts' />
/// <reference path='script/jquery.d.ts' />
class DannDann {
    constructor() {
        this.init();
    }

    private init(): void {
        var ele = $("<div></div>");
        var str = "";
        str += device.name;
        str += device.platform;
        str += device.version;
        str += device.model;
        ele.text(str);
        $("body").append(ele);
    }

}

$(window).ready(function (): void {
    new DannDann();
});