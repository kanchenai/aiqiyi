import '@css'
require('./global_style.css')

import MyApplication from "./MyApplication";
import State from "@core/frame/util/State";
import Application from "@core/frame/app/Application";
import {KeyboardViewBuilder} from "@src/custom-view/keyborad/KeyboardView";
import {CountdownViewBuilder} from "@src/custom-view/countdown/CountdownView";
import {PosterWhiteViewBuilder} from "@src/custom-view/poster-white/PosterWhiteView";
import {ButtonBuilder} from "@src/custom-view/button/Button";
import {PosterViewBuilder} from "@src/custom-view/poster/PosterView";
import {PosterShadowViewBuilder} from "@src/custom-view/poster-shadow/PosterShadowView";
import {ProgressViewBuilder} from "@src/custom-view/progress/ProgressView";
import {DrawerViewBuilder} from "@src/custom-view/drawer/DrawerView";
import {CarouselViewBuilder} from "@src/custom-view/carousel/CarouselView";
import {FocusViewBuilder} from "@src/custom-view/focus/FocusView";

var start = new Date().getTime();
window.onload = function () {
    //添加扩展控件的创建工具
    Application.addCustomViewBuilder([
        KeyboardViewBuilder, CountdownViewBuilder, PosterWhiteViewBuilder,
        ButtonBuilder, PosterViewBuilder, PosterShadowViewBuilder,
        CarouselViewBuilder, DrawerViewBuilder, ProgressViewBuilder,
        FocusViewBuilder
    ]);

    State.ScrollAnimation = true;//控制滚动动画开关
    //需要在css加载完之后才能启动app
    window.application = new MyApplication("app");
    window.application.launch();

    console.log(new Date().getTime() - start)
    console.log("项目地址：")
    console.log("github:https://github.com/kanchenai/aiqiyi.git")
    console.log("gitee:https://gitee.com/kanchenai/aiqiyi.git")
}

