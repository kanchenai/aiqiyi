import Application, {LaunchMode} from "../core/frame/app/Application";
import HomePage from "@page/HomePage";
import AliWebPlayer from "@src/util/AliWebPlayer";
import WelcomePage from "@page/WelcomePage";
import OrderPage from "./page/OrderPage";
import SearchPage from "./page/SearchPage";
import DetailPage from "./page/DetailPage";
import ListPage from "@page/ListPage";

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
                case "ListPage":
                    page = new ListPage();
                    break;
            }
            return page;
        }

        this.backUrl = "";
    }

    onLaunch(urlParam) {
        console.log("onLaunch，地址栏参数：", urlParam);
        var firstPage = null;
        var param = null;//将地址栏参数中与firstPage相关的参数填到param，会在firstPage中获取到
        this.backUrl = decodeURIComponent(urlParam.backUrl || "");

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
            case "detail":
                firstPage = new DetailPage();
                break;
            case "list":
                firstPage = new ListPage();
                break;
            default:
                firstPage = new WelcomePage();
                break;
        }
        return {firstPage, param};
    }

    /**
     * 这个方法先于启动firstPage
     * @param page
     * @param param
     */
    onCreate(page, param) {
        let urlParam = this.urlParam;
        if (this.launchMode == LaunchMode.ENTER && urlParam.pageKey && urlParam.pageKey != "home") {//进入专区，并且第一个页面不是首页
            //TODO 这里还可以从参数中获取是否需要返回首页的标识，区分firstPage返回
            var homePage = new HomePage();
            this.startPage(homePage, null);
        }
    }

    exitUrl() {
        return this.backUrl;
    }

    getPlayerInstance() {
        return new AliWebPlayer();
    }
}
