import Application from "../core/frame/app/Application";
import HomePage from "@page/HomePage";
import AliWebPlayer from "@src/util/AliWebPlayer";
import WelcomePage from "@page/WelcomePage";
import OrderPage from "./page/OrderPage";
import SearchPage from "./page/SearchPage";
import DetailPage from "./page/DetailPage";

require('./global_style.css')

export default class MyApplication extends Application {
    constructor(id) {
        super(id);
        this.pageManager.pageTypeCallback = function (pageName) {
            var page = null;
            switch (pageName) {
                case "WelcomePage":
                    page = new WelcomePage();
                    break;
                case "HomePage":
                    page = new HomePage();
                    break;
                case "OrderPage":
                    page = new OrderPage();
                    break;
                case "SearchPage":
                    page = new SearchPage();
                    break;
                case "DetailPage":
                    page = new DetailPage();
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
            case "order":
                firstPage = new OrderPage();
                break;
            case "search":
                firstPage = new SearchPage();
                break;
            default:
                firstPage = new WelcomePage();
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
