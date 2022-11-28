import Fragment from "@core/frame/view/group/Fragment";
import html from "@html/fragment/home/recommend_fragment"

export default class RecommendFragment extends Fragment{
    onCreate() {
        this.html = html;
        this.initView();
        this.setView();
        this.initUtils();
    }

    initView(){
        this.setStyle("background","#e14969");
    }
    setView(){}
    initUtils(){}
}
