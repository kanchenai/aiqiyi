import Page from "@core/frame/page/Page";

import html from "@html/home.html"
import {Adapter, HORIZONTAL} from "@core/frame/view/group/RecycleView";
import RecommendFragment from "@fragment/home/RecommendFragment";

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

        this.navigation = this.findViewById("navigation");
        this.navigation.orientation = HORIZONTAL;
        this.navigation.adapter = new NavAdapter();
        this.navigation.data = ["推荐","卿卿","电视剧","电影","综艺","动漫"];

        this.frame_view = this.findViewById("frame_view");

        this.frame_view.addFragmentList([
            new RecommendFragment(this.viewManager)
        ])
    }

    setView() {
    }

    initUtil(){

    }
}

class NavAdapter extends Adapter{
    bindHolder(holder, data) {
        var txt = holder.findViewById("txt");

        txt.text = data;
    }
}
