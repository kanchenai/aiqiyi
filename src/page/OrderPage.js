import Page from "@core/frame/page/Page";

import html from "@html/order";
import {Adapter, HORIZONTAL} from "@core/frame/view/group/RecycleView";


export default class OrderPage extends Page {
    constructor() {
        super();
        this.pageName = "OrderPage";
    }

    onCreate(param) {
        this.html = html;
        this.initView();
        this.setView();
        this.initUtil();
    }

    initView() {
        this.orderTop = this.findViewById("order_top");
        this.navigation = this.findViewById("order_navigation");

        this.userBtn = this.findViewById('user_btn');

        this.activity = this.findViewById('activity');

        this.integral = this.findViewById('integral');

        this.jointly = this.findViewById('jointly');
    }

    setView() {
        this.navigation.orientation = HORIZONTAL;
        this.navigation.margin.right = 98;
        this.navigation.adapter = new NavAdapter();
        this.navigation.onFocusChangeListener = onFocusChangeListener;

        this.userBtn.orientation = HORIZONTAL;
        this.userBtn.margin.left = 25;
        this.userBtn.adapter = new UserBtnAdapter();
        this.userBtn.onFocusChangeListener = onFocusChangeListener;

        this.activity.orientation = HORIZONTAL;
        this.activity.margin.left = 25;
        this.activity.adapter = new ActivityAdapter();
        this.activity.onFocusChangeListener = onFocusChangeListener;

        this.integral.orientation = HORIZONTAL;
        this.integral.margin.left = 25;
        this.integral.adapter = new IntegralAdapter();

        this.jointly.orientation = HORIZONTAL;
        this.jointly.margin.left = 25;
        this.jointly.adapter = new JointlyAdapter();
    }

    initUtil() {
        this.navigation.data = ["看影剧","领福利","领会员"];

        this.userBtn.data = ['每日签到', '我的等级', '买卡送人', '我的权益'];

        this.activity.data = [
            {name: '学生专享', detail: '每年仅123元', img: require('../images/order/activity-pic1.png')},
            {name: '攒会员', detail: '最高赚年卡', img: require('../images/order/activity-pic2.png')},
            {name: '赚小钱', detail: '卖卡得返佣', img: require('../images/order/activity-pic3.png')},
            {name: '免费领', detail: '会员卡月月领', img: require('../images/order/activity-pic4.png')}
        ]

        this.integral.data = [
            {name: '移动积分换会员', img: require('../images/order/integral-pic1.png')},
            {name: '联通1分钱领月卡', img: require('../images/order/integral-pic2.png')},
            {name: '电信天翼云盘', img: require('../images/order/integral-pic3.png')},
            {name: '银行积分兑会员', img: require('../images/order/integral-pic4.png')}
        ]

        this.jointly.data = [
            {name: 'VIP+京东Plus', price: '248', unit: '年', img: require('../images/order/jointly-pic1.png')},
            {name: 'VIP+平安健康', price: '248', unit: '年', img: require('../images/order/jointly-pic1.png')},
            {name: 'VIP+星巴克', price: '248', unit: '年', img: require('../images/order/jointly-pic1.png')},
            {name: 'VIP+京东Plus', price: '248', unit: '年', img: require('../images/order/jointly-pic1.png')}
        ]
    }
}

function onFocusChangeListener(view, hasFocus) {
    if (hasFocus) {
        if (this.scrollTop != 0) {
            this.scrollVerticalTo(0);
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

class UserBtnAdapter extends  Adapter {
    bindHolder(holder, data) {
        var txt = holder.findViewById("userBtnTxt");
        txt.text = data;
    }
}

class ActivityAdapter extends  Adapter {
    bindHolder(holder, data) {
        var img = holder.findViewById('active_img');
        img.src = data.img;
        var nameText = holder.findViewById('name');
        nameText.text = data.name;
        var detailText = holder.findViewById('detail');
        detailText.text = data.detail;
    }
}

class IntegralAdapter extends  Adapter {
    bindHolder(holder, data) {
        var img = holder.findViewById('integral_pic');
        img.src = data.img;
        var nameText = holder.findViewById('integral_name');
        nameText.text = data.name;
    }
}

class JointlyAdapter extends  Adapter {
    bindHolder(holder, data) {
        var img = holder.findViewById('jointly_pic');
        img.src = data.img;
        var nameText = holder.findViewById('jointly_name');
        nameText.text = data.name;
        var price = holder.findEleById('price');
        price.innerText = data.price;
        var unit = holder.findEleById('unit');
        unit.innerText = '/' + data.unit;
    }
}
