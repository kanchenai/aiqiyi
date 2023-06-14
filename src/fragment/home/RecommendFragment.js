import Fragment from "@core/frame/view/group/Fragment";
import html from "@html/fragment/home/recommend_fragment"
import {Adapter} from "@core/frame/view/group/RecycleView";
import {carouselData, hotData, likeData, newData, topicData_0} from "@src/mock-data/home/recommend_fragement_data";
import VMargin from "@core/frame/util/VMargin";
import View from "@core/frame/view/base/View";
import OrderPage from "@page/OrderPage";
import DetailPage from "../../page/DetailPage";

export default class RecommendFragment extends Fragment {
    onCreate() {
        this.html = html;
        this.initView();
        this.setView();
        this.initUtils();
    }

    initView() {
        this.carousel_group = this.findViewById("carousel_group");
        this.carousel_group.focusable = false;
        this.carousel_group.adapter = new CarouselAdapter();

        this.point_list = this.findViewById("point_list");
        this.point_list.margin = new VMargin(0, 0, 3, 3);
        this.point_list.onFocusChangeListener = onFocusChangeListenerPoint;
        var adapter = new Adapter();
        adapter.bindHolder = function (holder, data){};//Adapter是建议重写bindHolder方法，但这个这里不需要，所以置为空实现，空实现是为了不打印提示
        this.point_list.adapter = adapter;

        this.like_group = this.findViewById("like_group");
        this.like_group.adapter = new LikeAdapter();
        this.hot_group = this.findViewById("hot_group");
        this.hot_group.adapter = new LikeAdapter();

        this.topic_0 = this.findViewById("topic_0");
        this.topic_0.adapter = new TopicAdapter();
        this.new_group = this.findViewById("new_group");
        this.new_group.adapter = new NewAdapter();
        this.topic_1 = this.findViewById("topic_1");
        this.topic_1.adapter = new TopicAdapter();
        this.topic_2 = this.findViewById("topic_2");
        this.topic_2.adapter = new TopicAdapter();
        this.topic_3 = this.findViewById("topic_3");
        this.topic_3.adapter = new TopicAdapter();
    }

    setView() {

    }

    initUtils() {
        this.carousel_group.data = carouselData;
        this.point_list.data = carouselData;
        this.point_list.selectView = this.point_list.activeHolderMap.get(0).component;//这个是RecycleView设置默认驻留，有点麻烦，并且不靠谱
        this.like_group.data = likeData;
        this.hot_group.data = hotData;
        this.topic_0.data = topicData_0;
        this.new_group.data = newData;
        this.topic_1.data = topicData_0;
        this.topic_2.data = topicData_0;
        this.topic_3.data = topicData_0;
    }

    onClickListener(view){
        switch (view.id){
            case "back_top":
                this.point_list.requestFocus();
                break;
            default:
                var detailPage = new DetailPage();
                this.startPage(detailPage,{contentCode:"小猪佩奇的code"});
                break;
        }
    }
}

class CarouselAdapter extends Adapter {
    bindHolder(holder, data) {
        holder.findViewById("pic").src = data;
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

class TopicAdapter extends Adapter {
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

class NewAdapter extends Adapter {
    bindHolder(holder, data) {
        var line = holder.findEleById("line");
        var time = holder.findEleById("time");
        var pic = holder.findViewById("pic");
        var name = holder.findViewById("name");
        var info1 = holder.findEleById("info1");
        var info2 = holder.findEleById("info2");
        time.innerText = data.time;
        var width = View.getWidth(time);
        line.style.width = 204 - width + "px";
        line.style.left = width + 3 + "px"

        pic.src = data.pic;
        name.text = data.name;
        info1.innerText = data.info1;
        info2.innerText = data.info2;

    }
}

var onFocusChangeListenerPoint = function (view, hasFocus) {
    if (hasFocus) {
        var index = view.fatherView.holder.index;
        this.carousel_group.scrollByIndex(index);


        var that = this;
        setTimeout(function () {
            if (that.scrollTop != 0) {
                that.scrollVerticalTo(0);
            }
        }, 0)
    }
}
