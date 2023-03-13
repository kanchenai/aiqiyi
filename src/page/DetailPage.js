import Page from "../../core/frame/page/Page";
import html from "../html/detail.html"
import {Adapter} from "../../core/frame/view/group/RecycleView";
import OrderPage from "./OrderPage";
import like_01 from "@images-js/home/recommend_fragment/like_01.png";
import like_02 from "@images-js/home/recommend_fragment/like_02.png";
import like_03 from "@images-js/home/recommend_fragment/like_03.png";
import like_04 from "@images-js/home/recommend_fragment/like_04.png";
import like_05 from "@images-js/home/recommend_fragment/like_05.png";
import like_06 from "@images-js/home/recommend_fragment/like_06.png";
import like_07 from "@images-js/home/recommend_fragment/like_07.png";
import like_08 from "@images-js/home/recommend_fragment/like_08.png";

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

        this.recommend = this.findViewById("recommend");
        this.recommend.margin.right = 15;
        this.recommend.adapter = new RecommendAdapter();

        this.like = this.findViewById("like");
        this.like.margin.bottom = 15;
        this.like.adapter = new LikeAdapter();
    }

    setView() {
    }

    initUtil() {
        var subContentData = [];
        for (var i = 1; i < 51; i++) {
            subContentData.push(i + "");
        }
        this.sub_content.data = subContentData;

        this.recommend.data = recommendData;
        this.like.data = recommendData;
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

class RecommendAdapter extends Adapter {
    bindHolder(holder, data) {
        var pic = holder.findViewById("pic");
        var name = holder.findViewById("name");
        pic.src = data.pic;
        name.text = data.name;

    }
}

class LikeAdapter extends Adapter {
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

var recommendData = [
    {
        name: "独行月球",
        info1: "8.2分",
        info2: "沈腾、马丽月球求生",
        pic: like_01
    },
    {
        name: "一盘大棋",
        info1: "8.0分",
        info2: "郭涛、小沈阳、修睿、张艺上领衔主演",
        pic: like_02
    },
    {
        name: "外太空的莫扎特",
        info1: "神秘外星人莫扎特来访",
        info2: "黄渤、荣梓杉领衔主演",
        pic: like_03
    },
    {
        name: "发财日记",
        info1: "90年代初，穷小子来深圳",
        info2: "由宋小宝执导，宋小宝、马丽、沙溢、张一山领衔主演",
        pic: like_04
    },
    {
        name: "这个杀手不太冷静",
        info1: "****",
        info2: "*******",
        pic: like_05
    },
    {
        name: "唐人街探案3",
        info1: "****",
        info2: "*******",
        pic: like_06
    },
    {
        name: "一点就到家",
        info1: "****",
        info2: "*******",
        pic: like_07
    },
    {
        name: "林正英道长**",
        info1: "****",
        info2: "*******",
        pic: like_08
    }
]
