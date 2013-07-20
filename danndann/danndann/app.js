/// <reference path='phonegap.d.ts' />
/// <reference path='script/jquery.d.ts' />
var DannDann = (function () {
    function DannDann() {
        this.init();
    }
    DannDann.prototype.init = function () {
        var ele = $("<div></div>");
        var str = "TEST";

        try  {
            var device = phoneGapNavigator.device;
            str += device.name;
            str += device.platform;
            str += device.version;
            str += device.model;
        } catch (err) {
            str = "ERROR" + err;
        }
        ele.text(str);
        $("body").append(ele);
    };
    return DannDann;
})();

$(window).ready(function () {
    new DannDann();
});
//@ sourceMappingURL=app.js.map
