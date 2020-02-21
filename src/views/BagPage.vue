<template>
  <div>
    <user-info-header />

    <carousel :image-list="imageList" />

    <sub-title title="추천상품" :url="{name:'MainPage', params:{key:'value'}}" />

    <horizon-scroll-main-icon></horizon-scroll-main-icon>

    <search-form />

    <sub-title title="RB 게임존" :url="{name:'MainPage', params:{key:'value'}}" />
    <div style="padding:0 15px; display:flex; margin-bottom:7px;">
      <premium-icon
        style="width:50%; padding: 0 5px;"
        game-name="게임명"
        :get-value="100"
        :max-value="1000"
        :bullet="true"
        image-url="https://image.winudf.com/v2/image1/Y29tLm5ldG1hcmJsZS5uMmJhZHVrX2ljb25fMTU2NDQ2NDA0MF8wMDM/icon.png?w=170&fakeurl=1"
      />
      <premium-icon
        style="width:50%; padding: 0 5px;"
        game-name="게임명"
        :get-value="100"
        :max-value="1000"
        :bullet="true"
        image-url="https://image.winudf.com/v2/image1/Y29tLm5ldG1hcmJsZS5uMmJhZHVrX2ljb25fMTU2NDQ2NDA0MF8wMDM/icon.png?w=170&fakeurl=1"
      />
    </div>

    <horizon-scroll-main-icon></horizon-scroll-main-icon>

    <sub-title title="진행중인 이벤트" />
    <horizon-scroll-event />

    <global-navigation />
  </div>
</template>

<script>
import UserInfoHeader from "@/components/UserInfoHeader";
import Carousel from "@/components/Carousel";
import SubTitle from "@/components/SubTitle";
import HorizonScrollMainIcon from "@/components/HorizonScrollMainIcon";
import SearchForm from "@/components/SearchForm";
import PremiumIcon from "@/components/PremiumIcon";
import HorizonScrollEvent from "@/components/HorizonScrollEvent";
import GlobalNavigation from "@/components/GlobalNavigation";
export default {
  name: "BagPage",
  components: {
    UserInfoHeader,
    Carousel,
    SubTitle,
    HorizonScrollMainIcon,
    SearchForm,
    PremiumIcon,
    HorizonScrollEvent,
    GlobalNavigation
  },
  data() {
    return {
      imageList: [
        {
          id: "0",
          type: "default",
          image:
            "https://i.pinimg.com/originals/84/8f/82/848f82c7dfc1f20ea2bd264ba33bf07c.jpg",
          title: "버닝 월드: 콰트로 자세히 보기",
          urlInfo: {
            router: {
              name: "MainPage",
              params: {
                key: "value"
              }
            },
            url: "이동할 URL 정보"
          }
        },
        {
          id: "1",
          type: "_blank",
          image:
            "https://img.etnews.com/photonews/1504/679068_20150424160956_024_0001.jpg",
          title: "크로노블레이드 사전 예약",
          urlInfo: {
            router: {
              name: "MainPage",
              params: {
                key: "value"
              }
            },
            url: "http://m.naver.com"
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
