import Page from "../../core/frame/page/Page";
import html from "../html/detail.html"
import {Adapter} from "../../core/frame/view/group/RecycleView";
import OrderPage from "./OrderPage";

export default class DetailPage extends Page {
    constructor() {
        super();
        this.pageName = "DetailPage"
    }

    onCreate(param) {
        this.html = html;

        this.initView();
        this.setView();
        this.initUtil()
    }

    initView() {
        console.log(this.param)
        this.sub_content = this.findViewById("sub_content");
        this.sub_content.margin.right = 5;
        var adapter = new Adapter();
        adapter.bindHolder = function (holder, data) {
            var text = holder.findEleById("text")
            text.innerText = data;
        }
        this.sub_content.adapter = adapter;
    }

    setView() {
    }

    initUtil() {
        var subContentData = [];
        for (var i = 1; i < 51; i++) {
            subContentData.push(i + "");
        }
        this.sub_content.data = subContentData;
    }

    onClickListener(view) {
        switch (view.id) {
            case "order":
                var orderPage = new OrderPage();
                this.startPage(orderPage, null);
                break;
        }
    }
}
