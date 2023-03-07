import LoneDialog from "../../core/frame/view/group/LoneDialog";
import html from "../html/dialog/keyboard_dialog.html";
import {Adapter} from "../../core/frame/view/group/RecycleView";
import VMargin from "../../core/frame/util/VMargin";

export default class KeyboardDialog extends LoneDialog {
    constructor(viewManager, onKeywordClickListener) {
        super(viewManager);
        this.onKeywordClickListener = onKeywordClickListener;
        this.html = html;
        this.initView();
        this.setView();
        this.initUtils();
    }

    initView() {
        this.keyboard = this.findViewById("keyboard");
        this.keyboard.col = 6;
        this.keyboard.margin = new VMargin(0, 5, 0, 5);
        this.keyboard.adapter = new TextAdapter();
    }

    setView() {
    }

    initUtils() {
        this.keyboard.data = [
            "A", "B", "C", "D", "E", "F",
            "G", "H", "I", "J", "K", "L",
            "M", "N", "O", "P", "Q", "R",
            "S", "T", "U", "V", "W", "X",
            "Y", "Z", "0", "1", "2", "3",
            "4", "5", "6", "7", "8", "9"]
    }

    onClickListener(view) {
        switch (view.id) {
            case "delete_btn":
            case "clear_btn":
                if (this.onKeywordClickListener) {
                    this.onKeywordClickListener.call(this.page, view.id)
                }

                break;
            default:
                var keyword = view.findEleById("text").innerText
                if (this.onKeywordClickListener) {
                    this.onKeywordClickListener.call(this.page, keyword)
                }
                break;
        }
    }
}

class TextAdapter extends Adapter {
    bindHolder(holder, data) {
        var text = holder.findEleById("text");
        text.innerText = data;
    }
}
