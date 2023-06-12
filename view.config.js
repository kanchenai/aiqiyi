import HomePage from "@page/HomePage";
import ListPage from "@page/ListPage";
import DetailPage from "@page/DetailPage";
import OrderPage from "@page/OrderPage";
import SearchPage from "@page/SearchPage";
import WelcomePage from "@page/WelcomePage";

/**
 * 定义PageName对应的Page，舍去在Page子类中赋值pageName步骤
 */
export var PageConfig = {
    "HomePage": HomePage,
    "ListPage": ListPage,
    "DetailPage": DetailPage,
    "OrderPage": OrderPage,
    "SearchPage": SearchPage,
    "WelcomePage": WelcomePage,
}

/**
 * 默认的page
 * 当未获取到第一个页面时，会使用改页面
 * @type {string}
 */
export var LaunchPage = "WelcomePage";
