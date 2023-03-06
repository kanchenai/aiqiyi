import Fragment from "../../../core/frame/view/group/Fragment";

export default class VipFragment extends Fragment {
    onCreate() {
        this.initView();
        this.setView();
        this.initUtils();
    }

    initView(){
        this.setStyle("background","yellow")

    }
    setView(){}
    initUtils(){}
}
