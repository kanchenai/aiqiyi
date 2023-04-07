import Page from "@core/frame/page/Page";
import html from "../html/list.html"

export default class ListPage extends Page{
    onCreate(param) {
        this.html = html;

        this.initView();
        this.setView();
        this.initUtil();
    }

    initView(){
    }

    setView(){}

    initUtil(){}
}
