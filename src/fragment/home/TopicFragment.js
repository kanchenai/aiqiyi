import Fragment from "@core/frame/view/group/Fragment";
import html from "@html/fragment/home/topic_fragment.html"
import PlayInfo from "@core/frame/player/PlayInfo";
import utils from "@src/util/utils";

export default class TopicFragment extends Fragment {
    onCreate() {
        this.html = html;
        this.initView();
        this.setView();
        this.initUtils();
    }

    initView() {
        this.playInfo = new PlayInfo("", 686, 89, 552, 309);

        this.main_content_bg = this.findEleById("main_content_bg");

        // utils.bgToVideoBg(this.main_content_bg.parentNode, this.main_content_bg, this.playInfo);
    }

    setView() {

    }

    initUtils() {

    }
}
