import Page from "../../core/frame/page/Page";
import html from "../html/search.html"
import ResultFragment from "../fragment/search/ResultFragment";
import RecommendFragment from "../fragment/search/RecommendFragment";
import KeyboardDialog from "../dialog/KeyboardDialog";
import Toast from "../../core/frame/view/single/Toast";

export default class SearchPage extends Page {
    constructor() {
        super();
        this.pageName = "SearchPage";
    }

    onCreate(param) {
        this.html = html;
        this.initView();
        this.setView();
        this.initUtil();
    }

    initView() {
        this.frame_view = this.findViewById("frame_view");
        this.resultFragment = new ResultFragment(this.viewManager);
        this.frame_view.addFragmentList([
            new RecommendFragment(this.viewManager),
            this.resultFragment
        ]);

        this.keyboardDialog = new KeyboardDialog(this.viewManager, this.onKeywordClickListener);

        this.toast = new Toast(this);
        this.toast.duration = 1;
    }

    setView() {
    }

    initUtil() {
    }

    onResume() {
        if(this.param && this.param.keyword) {
            this.onKeywordClickListener(this.param.keyword);//借用一下
        }
    }

    onPause() {
        var keywordEle = this.findEleById("keyword");
        var keyword = keywordEle.innerText;
        let param = {
            keyword:keyword
        }

        this.saveParam(param)
    }

    onKeywordClickListener(keyword) {
        var keywordEle = this.findEleById("keyword");
        var str = keywordEle.innerText;
        if (keyword == "delete_btn") {
            if (str.length > 0) {
                str = str.substring(0, str.length - 1);
            }
        } else if (keyword == "clear_btn") {
            str = "";
        } else {
            str += keyword;
        }

        keywordEle.innerText = str;

        var keyword_place_holder = this.findEleById("keyword_place_holder");
        if (str.length > 0) {
            keywordEle.style.display = "block";
            keyword_place_holder.style.display = "none";
            this.frame_view.switchTo(1);
        } else {
            keywordEle.style.display = "none";
            keyword_place_holder.style.display = "block";
            this.frame_view.switchTo(0);
        }
    }

    onClickListener(view) {
        switch (view.id) {
            case "keyword_item":
                this.keyboardDialog.show();
                break;
        }
    }
}
