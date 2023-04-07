import Page from "@core/frame/page/Page";

import html from "../html/order.html";
import {Adapter, HORIZONTAL} from "@core/frame/view/group/RecycleView";
import RecommendFragment from "../fragment/order/RecommendFragment";
import WatchFragment from "../fragment/order/WatchFragment";
import ValueFragment from "../fragment/order/ValueFragment";
import VipFragment from "../fragment/order/VipFragment";
import HistoryDialog from "../dialog/HistoryDialog";
import SearchPage from "./SearchPage";


export default class OrderPage extends Page {
    onCreate(param) {
        this.html = html;
        this.initView();
        this.setView();
        this.initUtil();
    }

    initView() {
        this.navigation = this.findViewById("order_navigation");

        this.frame_view = this.findViewById("frame_view");
        this.frame_view.addFragmentList([
            new RecommendFragment(this.viewManager),
            new WatchFragment(this.viewManager),
            new ValueFragment(this.viewManager),
            new VipFragment(this.viewManager)
        ])

        this.historyDialog = new HistoryDialog(this.viewManager);
    }

    setView() {
        this.navigation.orientation = HORIZONTAL;
        this.navigation.adapter = new NavAdapter();
        this.navigation.onFocusChangeListener = onNavigationFocusChangeListener;
    }

    initUtil() {
        this.navigation.data = ["VIP精选","看影剧","领福利","领会员"];
    }


    onClickListener(view){
        switch (view.id){
            case "search":
                var searchPage = new SearchPage();
                this.startPage(searchPage,null);
                break;
            case "history":
                this.historyDialog.show();
                break;
        }
    }
}

class NavAdapter extends Adapter{
    bindHolder(holder, data) {
        if (holder.index === holder.recycleView.childViews.length - 1) {
            holder.recycleView.margin.right = 0;
        }
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
