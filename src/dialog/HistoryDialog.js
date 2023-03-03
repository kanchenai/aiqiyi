import LoneDialog from "@core/frame/view/group/LoneDialog";
import html from "@html/dialog/history_dialog.html"
import {historyData} from "../mock-data/home/history_dialog_data";
import VMargin from "../../core/frame/util/VMargin";
import {Adapter} from "../../core/frame/view/group/RecycleView";

export default class HistoryDialog extends LoneDialog {
    constructor(viewManager) {
        super(viewManager);

        this.html = html;
        this.initView();
        this.setView();
        this.initUtils();
    }

    initView() {
        this.content_list = this.findViewById("content_list");
        console.log(this.content_list);
        this.content_list.col = 3;
        this.content_list.margin = new VMargin(0, 20, 0, 10);
        this.content_list.adapter = new HistoryAdapter();
    }

    setView() {
    }

    initUtils() {
    }

    onVisibleChangeListener(view, isShowing) {
        //弹窗显示并且未获取过数据的时候设置数据
        if (isShowing && (!this.content_list.data || this.content_list.data.length == 0)) {
            this.content_list.data = historyData;
        }
    }
}

class HistoryAdapter extends Adapter {
    bindHolder(holder, data) {
        var pic = holder.findViewById("pic");
        var name = holder.findViewById("name");
        var info1 = holder.findEleById("info1");
        var info2 = holder.findEleById("info2");
        pic.src = data.pic;
        name.text = data.name;
        info1.innerText = data.info1;
        info2.innerText = data.info2;

    }
}
