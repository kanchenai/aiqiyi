import Fragment from "../../../core/frame/view/group/Fragment";

import html from "../../html/fragment/search/result_fragment.html"
import {topicData_0} from "../../mock-data/home/recommend_fragement_data";
import {Adapter} from "../../../core/frame/view/group/RecycleView";

export default class ResultFragment extends Fragment{
    onCreate() {
        this.html = html;
        this.initView();
        this.setView();
        this.initUtil();
    }

    initView(){
        this.result = this.findViewById("result");
        this.result.adapter = new ResultAdapter();

        this.recommend = this.findViewById("recommend");
        this.recommend.adapter = new TextAdapter();

        this.hot = this.findViewById("hot");
        this.hot.adapter = new TextAdapter();
    }
    setView(){}
    initUtil(){
        this.result.data = topicData_0;

        this.recommend.data = ["人世间", "辛亥革命", "龙珠超", "觉醒年代", "狙击之王", "集结号"];
        this.hot.data = [
            "世界杯", "一年一度喜剧大会", "卿卿日常", "唐朝记事录", "王牌对王牌",
            "苍兰诀","我们这十年","奔跑吧","爱情公寓","底线"
        ];
    }
}

class ResultAdapter extends Adapter {
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

class TextAdapter extends Adapter {
    bindHolder(holder, data) {
        var text = holder.findViewById("text");
        text.text = data;
    }
}
