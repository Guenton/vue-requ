<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <h2Header :text="h2HeaderText"/>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
        <div class="main-timeline">
          <div class="timeline">
            <router-link :to=path.screening class="timeline-content">
              <div class="timeline-icon">
                <font-awesome-icon icon="user-tag"/>
              </div>
              <h3 class="title">Screening 2019-305</h3>
              <em>June 26, 2019</em>
              <p class="description">Frederik Johannes Jodokus Qwast</p>
            </router-link>
          </div>
          <div class="timeline">
            <router-link :to=path.case class="timeline-content">
              <div class="timeline-icon">
                <font-awesome-icon icon="briefcase"/>
              </div>
              <h3 class="title">Case 2019-253</h3>
              <em>June 28, 2019</em>
              <p class="description">POS Fraud</p>
            </router-link>
          </div>
          <div class="timeline">
            <router-link :to=path.activity class="timeline-content">
              <div class="timeline-icon">
                <font-awesome-icon icon="file-alt"/>
              </div>
              <h3 class="title">Activity 2019-017</h3>
              <em>June 28, 2019</em>
              <p class="description">Teller Cash Difference</p>
            </router-link>
          </div>
          <div class="timeline">
            <router-link :to=path.screening class="timeline-content">
              <div class="timeline-icon">
                <font-awesome-icon icon="user-tag"/>
              </div>
              <h3 class="title">Screening 2019-308</h3>
              <em>June 30, 2019</em>
              <p class="description">Tony Gabriel Montana-Pinto</p>
            </router-link>
          </div>
          <div class="timeline">
            <router-link :to=path.activity class="timeline-content">
              <div class="timeline-icon">
                <font-awesome-icon icon="file-alt"/>
              </div>
              <h3 class="title">Activity 2019-021</h3>
              <em>July 1, 2019</em>
              <p class="description">Image Request</p>
            </router-link>
          </div>
          <div class="timeline">
            <router-link :to=path.screening class="timeline-content">
              <div class="timeline-icon">
                <font-awesome-icon icon="user-tag"/>
              </div>
              <h3 class="title">Screening 2019-311</h3>
              <em>July 1, 2019</em>
              <p class="description">Bennie Piscinette Leito</p>
            </router-link>
          </div>
          <div class="timeline">
            <router-link :to=path.case class="timeline-content">
              <div class="timeline-icon">
                <font-awesome-icon icon="briefcase"/>
              </div>
              <h3 class="title">Case 2019-266</h3>
              <em>July 6, 2019</em>
              <p class="description">ATM Claim</p>
            </router-link>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import h2Header from "../header/h2-header"
export default {
  name: "Timeline",
  data() {
    return {
      path: {
        request: "/main/request/home",
        case: "/main/case",
        screening: "/main/screening",
        activity: "/main/activity",
      },
      h2HeaderText: "Global Timeline"
    }
  },
  components: {
    h2Header
  }
}
</script>

<style>
.main-timeline{
    font-family: 'Titillium Web', sans-serif;
    position: relative;
}
 .main-timeline:before{
    content: '';
    background-color: #000;
    height: 100%;
    width: 2px;
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    top: 0;
}
.main-timeline:after{
    content: '';
    display: block;
    clear: both;
}
.main-timeline .timeline{
    width: 50%;
    padding: 0 40px 0 0;
    margin: 0 5px 0 0;
    float: left;
    position: relative;
    z-index: 1;
}
.main-timeline .timeline:before,
.main-timeline .timeline:after{
    content: '';
    background-color: #000;
    height: 2px;
    width: 100px;
    transform: translateY(-50%);
    position: absolute;
    right: 0;
    top: 50%;
}
.main-timeline .timeline:after{
    height: 15px;
    width: 15px;
    border-radius: 50%;
    right: -8px;
}
.main-timeline .timeline-content{
    color: #fff;
    background-color: #00A59D;
    text-align: center;
    padding: 15px 130px 15px 20px;
    margin: 0 auto;
    border-radius: 60px;
    display: block;
    overflow: hidden;
    position: relative;
}
.main-timeline .timeline-content:hover{ text-decoration: none; }
.main-timeline .timeline-content:before,
.main-timeline .timeline-content:after{
    content: '';
    background-color: #59585B;
    height: 100%;
    width: 28%;
    position: absolute;
    right:-1px;
    top: 0;
    z-index: 1;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 75% 0);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 75% 0);
}
.main-timeline .timeline-content:after{
    background-color: #414148;
    transform: rotateX(180deg);
    z-index: 0;
}
.main-timeline .timeline-icon{
    color: #fff;
    font-size: 42px;
    transform: translateY(-50%);
    position: absolute;
    right: 18px;
    top: 50%;
    z-index: 1;
}
.main-timeline .title{
    font-size: 23px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0;
}
.main-timeline .description{
    font-size: 14px;
    letter-spacing: 1px;
    margin: 0;
}
.main-timeline .timeline:nth-child(even){
    margin: 0 0 0 5px;
    padding: 0 0 0 40px;
    float: right;
}
.main-timeline .timeline:nth-child(even):before{
    right: auto;
    left: 0;
}
.main-timeline .timeline:nth-child(even):after{
    right: auto;
    left: -8px;
}
.main-timeline .timeline:nth-child(even) .timeline-content{ padding: 15px 20px 15px 130px; }
.main-timeline .timeline:nth-child(even) .timeline-content:before{
    right: auto;
    left: 0;
    transform: rotateY(180deg);
}
.main-timeline .timeline:nth-child(even) .timeline-content:after{
    right: auto;
    left: 0;
    transform: rotateY(-180deg) rotateX(180deg);
}
.main-timeline .timeline:nth-child(even) .timeline-icon{
    right: auto;
    left: 20px;
}
.main-timeline .timeline:nth-child(4n+2) .timeline-content{ background-color: #A976C3; }
.main-timeline .timeline:nth-child(4n+3) .timeline-content{ background-color: #ED7251; }
.main-timeline .timeline:nth-child(4n+4) .timeline-content{ background-color: #27ae60; }
@media only screen and (max-width:990px){
    .main-timeline .timeline-content{ padding: 15px 100px 15px 20px; }
    .main-timeline .timeline:nth-child(even) .timeline-content{ padding: 15px 20px 15px 100px; }
    .main-timeline .timeline .timeline-content:before,
    .main-timeline .timeline .timeline-content:after{
        width: 33%;
    }
    .main-timeline .timeline-icon{ right: 12px; }
    .main-timeline .timeline:nth-child(even) .timeline-icon{ left: 12px; }
}
@media only screen and (max-width:767px){
    .main-timeline:before{
        transform: translateX(0);
        left: 0;
    }
    .main-timeline .timeline{
        width: 100%;
        padding: 0 0 0 20px;
        margin: 0 0 20px;
    }
    .main-timeline .timeline:nth-child(even){
        padding: 0 0 0 20px;
        margin: 0 0 20px;
    }
    .main-timeline .timeline:before{
        right: auto;
        left: 0;
    }
    .main-timeline .timeline:after{
        right: auto;
        left: -8px;
    }
    .main-timeline .timeline .timeline-content{
        padding: 15px 15px 15px 90px;
        border-radius: 30px;
    }
    .main-timeline .timeline .timeline-content:before{
        width: 85px;
        right: auto;
        left: 0;
        transform: rotateY(180deg);
    }
    .main-timeline .timeline .timeline-content:after{
        width: 85px;
        right: auto;
        left: 0;
        transform: rotateY(180deg) rotateX(-180deg);
    }
    .main-timeline .timeline .timeline-icon,
    .main-timeline .timeline:nth-child(even) .timeline-icon{
        font-size: 30px;
        right: auto;
        left: 12px;
    }
    .main-timeline .title{ font-size: 18px; }
}
</style>
