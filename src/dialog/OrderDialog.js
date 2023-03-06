import LoneDialog from "../../core/frame/view/group/LoneDialog";

import html from "../html/dialog/order_dialog.html"

export default class OrderDialog extends LoneDialog{
    constructor(viewManager) {
        super(viewManager);

        this.html = html;
        this.initView();
        this.setView();
        this.initUtils();
    }

    initView() {
    }

    setView() {
    }

    initUtils() {
    }
}
