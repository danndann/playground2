var DannDann = (function () {
    function DannDann() {
        this.init();
    }
    DannDann.prototype.init = function () {
        var ele = $("<div></div>");
        var str = "";
        str += device.name;
        str += device.platform;
        str += device.version;
        str += device.model;
        ele.text(str);
        $("body").append(ele);
    };
    return DannDann;
})();

$(window).ready(function () {
    new DannDann();
});
