class DannDann {
    constructor() {
        this.init();
    }

    private init():void {
        console.log("READY");
    }
    
}

window.onload = () => {
    new DannDann();
};