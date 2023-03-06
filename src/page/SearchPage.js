import Page from "../../core/frame/page/Page";
import html from "../html/search.html"
import ResultFragment from "../fragment/search/ResultFragment";
import RecommendFragment from "../fragment/search/RecommendFragment";

export default class SearchPage extends Page{
    constructor() {
        super();
        this.pageName = "SearchPage";
    }
    onCreate(param) {
        this.html = html;
        this.initView();
        this.setView();
        this.initUtil();
    }

    initView(){
        this.frame_view = this.findViewById("frame_view");

        this.resultFragment = new ResultFragment(this.viewManager);

        this.frame_view.addFragmentList([
            new RecommendFragment(this.viewManager),
            this.resultFragment
        ])
    }
    setView(){}
    initUtil(){}
}
