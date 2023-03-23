import Page from "@core/frame/page/Page";

import html from "@html/home.html"
import {Adapter, HORIZONTAL} from "@core/frame/view/group/RecycleView";
import RecommendFragment from "@fragment/home/RecommendFragment";
import HistoryDialog from "@src/dialog/HistoryDialog";
import TopicFragment from "@fragment/home/TopicFragment";
import DramaFragment from "@fragment/home/DramaFragment";
import MovieFragment from "@fragment/home/MovieFragment";
import VarietyFragment from "@fragment/home/VarietyFragment";
import AnimationFragment from "@fragment/home/AnimationFragment";
import SearchPage from "./SearchPage";
import ListPage from "@page/ListPage";

export default class HomePage extends Page {
    constructor() {
        super();
        this.pageName = "HomePage";
    }

    onCreate(param) {
        this.html = html;
        this.initView();
        this.setView();
        this.initUtil();
    }

    initView() {
        this.bg = this.findViewById("bg")
        this.top_group = this.findViewById("top_group");
        this.navigation = this.findViewById("navigation");
        this.navigation.orientation = HORIZONTAL;
        this.navigation.adapter = new NavAdapter();
        this.navigation.data = ["推荐", "卿卿", "电视剧", "电影", "综艺", "动漫"];

        this.history = this.findViewById("history");

        this.historyDialog = new HistoryDialog(this.viewManager);

        this.frame_view = this.findViewById("frame_view");

        this.frame_view.addFragmentList([
            new RecommendFragment(this.viewManager),
            new TopicFragment(this.viewManager),
            new DramaFragment(this.viewManager),
            new MovieFragment(this.viewManager),
            new VarietyFragment(this.viewManager),
            new AnimationFragment(this.viewManager)
        ])
    }

    setView() {
        this.navigation.onClickListener = onNavigationClickListener;
        this.navigation.onFocusChangeListener = onNavigationFocusChangeListener;
    }

    initUtil() {

    }

    navigationScrollDisappear() {
        this.top_group.scrollVerticalTo(68);
    }

    navigationScrollDisplay() {
        this.top_group.scrollVerticalTo(0);
    }

    onClickListener(view) {
        switch (view.id) {
            case "history":
                this.historyDialog.show();
                break;
            case "search":
                var searchPage = new SearchPage();
                this.startPage(searchPage, {});
                break;
        }
    }
}

class NavAdapter extends Adapter {
    bindHolder(holder, data) {
        var txt = holder.findViewById("txt");

        txt.text = data;
    }
}


var onNavigationFocusChangeListener = function (view, hasFocus) {
    if (hasFocus) {
        var len = this.navigation.data.length
        var index = (view.fatherView.holder.index + len) % len;

        // if(index <= 1){
        this.frame_view.switchTo(index)
        // }
    }
}

var onNavigationClickListener = function (view) {
    var listPage = new ListPage();
    this.startPage(listPage, null)
}
