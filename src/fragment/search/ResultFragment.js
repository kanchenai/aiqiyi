import Fragment from "../../../core/frame/view/group/Fragment";

import html from "../../html/fragment/search/result_fragment.html"

export default class ResultFragment extends Fragment{
    onCreate() {
        this.html = html;
        this.initView();
        this.setView();
        this.initUtil();
    }

    initView(){
        this.setStyle("background","green")
    }
    setView(){}
    initUtil(){}
}
