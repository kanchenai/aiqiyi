import Page from "@core/frame/page/Page";
import html from "@html/welcome.html"
import HomePage from "@page/HomePage";

export default class WelcomePage extends Page{
    onCreate(param) {
        this.html = html;

        this.initView();
        this.setView();
        this.initUtils();
    }

    initView(){
        this.countDown();
    }
    setView(){}
    initUtils(){}


    countDown(){
        var that = this;
        var count_down = this.findEleById("count_down");
        var count = 3;
        count_down.innerText = count;
        var timer = setInterval(function (){
            count--;
            if(count < 0){
                clearInterval(timer);

                var homePage = new HomePage();
                that.startPage(homePage,null);

                that.finish();
            }else{
                count_down.innerText = count;
            }
        },1000)
    }

    onClickListener(view) {
        console.log("onClickListener",view)
    }
}
