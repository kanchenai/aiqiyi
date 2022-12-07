import Application from "../core/frame/app/Application";
import HomePage from "./page/HomePage";
import AliWebPlayer from "@src/util/AliWebPlayer";
import WelcomePage from "@page/WelcomePage";

require('./global_style.css')

export default class MyApplication extends Application {
    constructor(id) {
        super(id);
        this.pageManager.pageTypeCallback = function (pageName) {
            var page = null;
            switch (pageName) {
                case "HomePage":
                    page = new HomePage();
                    break;
            }
            return page;
        }
    }

    onLaunch(urlParam) {
        console.log("onLaunch，地址栏参数：", urlParam);
        var firstPage = null;
        var param = null;//将地址栏参数中与firstPage相关的参数填到param，会在firstPage中获取到
        switch (urlParam.pageKey) {
            case "welcome":
                firstPage = new WelcomePage();
                break;
            case "home":
                firstPage = new HomePage();
                break;
            default:
                firstPage = new HomePage();
                break;
        }
        return {firstPage, param};
    }

    exitUrl() {
        var url = "";
        return url;
    }

    getPlayerInstance() {
        return new AliWebPlayer();
    }
}
