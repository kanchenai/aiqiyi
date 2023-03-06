import Fragment from "../../../core/frame/view/group/Fragment";

import html from "../../html/fragment/search/recommend_fragment.html"
import {Adapter, HORIZONTAL} from "../../../core/frame/view/group/RecycleView";

export default class RecommendFragment extends Fragment {
    onCreate() {
        this.html = html;
        this.initView();
        this.setView();
        this.initUtil();
    }

    initView() {
        this.history = this.findViewById("history");
        this.history.col = 5;
        this.history.adapter = new TextAdapter();

        this.recommend = this.findViewById("recommend");
        this.recommend.col = 5;
        this.recommend.adapter = new TextAdapter();

        this.hot = this.findViewById("hot");
        this.hot.adapter = new RecommendTextAdapter();

        this.drama = this.findViewById("drama");
        this.drama.adapter = new RecommendTextAdapter();

        this.movie = this.findViewById("movie");
        this.movie.adapter = new RecommendTextAdapter();

        this.variety = this.findViewById("variety");
        this.variety.adapter = new RecommendTextAdapter();

        this.animation = this.findViewById("animation");
        this.animation.adapter = new RecommendTextAdapter();

        this.cartoon = this.findViewById("cartoon");
        this.cartoon.adapter = new RecommendTextAdapter();
    }

    setView() {
    }

    initUtil() {
        this.history.data = ["FDD", "DDF", "ABB", "BBA", "LLDQ", "FDS"];
        this.recommend.data = ["人世间", "辛亥革命", "龙珠超", "觉醒年代", "狙击之王", "集结号"];
        this.hot.data = [
            "世界杯", "一年一度喜剧大会", "卿卿日常", "唐朝记事录", "王牌对王牌",
            "苍兰诀","我们这十年","奔跑吧","爱情公寓","底线"
        ];

        this.drama.data = [
            "卿卿日常", "唐朝记事录", "苍兰诀", "风吹半夏", "罚罪",
            "人世间","我们的当打之年","对手","周生如故","武林外传"
        ];

        this.movie.data = [
            "平凡英雄", "万里归途", "独行月球", "征途", "星际穿越",
            "人生大事","亚当斯一家","西虹市首富","绿皮书","肖申克的救赎"
        ];

        this.variety.data = [
            "一年一度喜剧大会", "王牌对王牌", "奔跑吧", "奇葩说", "嗨放派",
            "萌探探探案","极限挑战","偶像练习生","青春环游记","青春有你"
        ];

        this.animation.data = [
            "奥特曼", "完美世界", "屁屁侦探", "夏目友人帐", "名侦探柯南",
            "蜡笔小新","间谍过家家","航海王","辛普森一家","光之美少女"
        ];

        this.cartoon.data = [
            "猪猪侠", "海底小纵队", "小花仙", "怜克兄弟", "工程车好伙伴",
            "熊出没","小猪佩奇","喜羊羊与灰太狼","芭比","奇迹少女"
        ];
    }
}

class TextAdapter extends Adapter {
    bindHolder(holder, data) {
        var text = holder.findViewById("text");
        text.text = data;
    }
}

class RecommendTextAdapter extends Adapter {
    bindHolder(holder, data) {
        var text = holder.findViewById("text");

        var index = holder.dataIndex + 1;
        text.text = index + " " + data;
    }
}
