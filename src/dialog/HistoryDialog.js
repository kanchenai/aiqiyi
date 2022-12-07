import LoneDialog from "@core/frame/view/group/LoneDialog";
import html from "@html/dialog/history_dialog.html"

export default class HistoryDialog extends LoneDialog{
    constructor(viewManager) {
        super(viewManager);

        this.html = html;
        this.initView();
        this.setView();
        this.initUtils();
    }

    initView(){

    }
    setView(){}
    initUtils(){}
}
