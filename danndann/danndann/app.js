var DannDann = (function () {
    function DannDann() {
        this.init();
    }
    DannDann.prototype.init = function () {
        var ele = $("<div></div>");
        var str = "TEST";
        try  {
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
