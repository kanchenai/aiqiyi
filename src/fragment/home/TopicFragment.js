import Fragment from "@core/frame/view/group/Fragment";
import PlayInfo from "@core/frame/player/PlayInfo";
import {ScrollCenter} from "@core/frame/view/base/ScrollView";
import DetailPage from "@page/DetailPage";

export default class TopicFragment extends Fragment {
    onCreate() {
        this.html = require("@html/fragment/home/topic_fragment.html");
        this.initView();
        this.setView();
        this.initUtils();
    }

    initView() {
        this.scrollLocate = ScrollCenter;

        this.player = this.findViewById("player");

        this.player_poster = this.findViewById("player_poster");

        // utils.bgToVideoBg(this.main_content_bg.parentNode, this.main_content_bg, this.playInfo);
        var playUrl = "http://live.ynurl.com/video/s10027-LCDST/index.m3u8"
        var that = this;
        setTimeout(function () {
            that.player.play(0, playUrl);
        }, 500)

    }

    setView() {

    }

    initUtils() {

    }

    onPause() {
        this.player.pause();
    }

    onResume() {

    }

    onScrollStartListener(scrollView, x, y) {
        this.player.pause();
    }

    onScrollEndListener(scrollView, x, y) {
        if(y == 0){
            this.player.resume();
        }

        this.page.onScrollEndListener.call(this.page, scrollView, x, y);
    }

    onPlayStart() {
        this.player_poster.findViewById("pic").hide();
        this.page.bgToVideoBg(this.player.videoPlayer.playInfo);
    }

    onPlayPause() {
        this.player_poster.findViewById("pic").show();
        this.page.videoBgToBg();
    }

    onPlayResume() {
        this.player_poster.findViewById("pic").hide();
        this.page.bgToVideoBg(this.player.videoPlayer.playInfo);
    }

    onClickListener(view){
        switch (view.id){
            case "back_top":
                this.player_poster.requestFocus();
                break;
            default:
                var detailPage = new DetailPage();
                this.startPage(detailPage,{contentCode:"小猪佩奇的code"});
                break;
        }
    }

}
