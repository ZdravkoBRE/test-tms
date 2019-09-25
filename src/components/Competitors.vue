<template>
    <div>
        <header class="header block-wrapper">
            <div class="header-inner">
                <div class="header-item">
                    Concept
                </div>
                <div class="header-item active">
                    <div class="cont-wrapper">
                        Research <i class="fa fa-caret-down"></i>
                    </div>
                    <span class="pill">1/6</span>
                    
                    <ul class="drop-down" style="display:none">
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                    </ul>
                </div>
                <div class="header-item">
                    Set Up
                </div>
                <div class="header-item">
                    Forecast
                </div>
                <div class="header-item">
                    Validation
                </div>
            </div>
        </header>

        <div class="content block-wrapper">
            <div class="heading">
                <h1>
                    Competitiors
                </h1>
                <div class="info-block">
                    <div class="info-inner">
                        <i class="fa fa-info-circle"></i>
                        Guide
                    </div>
                    <div class="info-inner">
                        <i class="fa fa-file-text-o"></i>
                        Example
                    </div>
                </div>
            </div>

            <div class="content-inner">

                <div class="sub-heading">
                    <div class="sub-heading-text">
                        <h2>
                            Add Your Competitors
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div class="display-item-holder">
                        <div class="display-item-btn row-display active">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="display-item-btn column-display">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div class="items-holder">

                    <div class="item add-item">
                        <div class="add-item-inner">
                            <div class="add-item-btn"></div>
                            <h3>
                                New Competitor
                            </h3>
                        </div>
                    </div>

                    <div v-for="item in allItems" :key="item.id" class="item">
                        <div class="img-holder" style="">
                            <!-- <img src="../assets/pictures/photo.jpg" alt=""> -->
                            <div class="indicator direct" :class="[item.indicator ? 'direct' : 'indirect']" >{{ item.direct }}</div>
                        </div>
                        <div class="item-content">
                            <h3>
                                Competitor {{ item.id }}
                            </h3>
                            <div class="item-content-inner">
                                <div class="item-content-segment">
                                    <span class="list-prop">Location</span>
                                    <span class="list-data">{{ item.location }}</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Quality</span>
                                    <span class="list-data">{{ item.quality }}</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Image</span>
                                    <span class="list-data">{{ item.image }}</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Location</span>
                                    <span class="list-data">{{ item.place }}</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Quality</span>
                                    <span class="list-data">{{ item.quality }}</span>
                                </div>
                                <div class="item-content-segment summary">
                                    <span class="list-prop">Threat Level</span>
                                    <span class="list-data">{{ item.threat }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="item">
                        <div class="img-holder">
                            <img src="" alt="">
                            <div class="indicator indirect">Indirect</div>
                        </div>
                        <div class="item-content">
                            <h3>
                                Competitor 2
                            </h3>
                            <div class="item-content-inner">
                                <div class="item-content-segment">
                                    <span class="list-prop">Location</span>
                                    <span class="list-data">Poor</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Quality</span>
                                    <span class="list-data">Fair</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Image</span>
                                    <span class="list-data">Good</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Location</span>
                                    <span class="list-data">Very Good</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Quality</span>
                                    <span class="list-data">Excellent</span>
                                </div>
                                <div class="item-content-segment summary">
                                    <span class="list-prop">Threat Level</span>
                                    <span class="list-data">High</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="img-holder">
                            <img src="" alt="">
                            <div class="indicator indirect">Indirect</div>
                        </div>
                        <div class="item-content">
                            <h3>
                                Competitor 2
                            </h3>
                            <div class="item-content-inner">
                                <div class="item-content-segment">
                                    <span class="list-prop">Location</span>
                                    <span class="list-data">Poor</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Quality</span>
                                    <span class="list-data">Fair</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Image</span>
                                    <span class="list-data">Good</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Location</span>
                                    <span class="list-data">Very Good</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Quality</span>
                                    <span class="list-data">Excellent</span>
                                </div>
                                <div class="item-content-segment summary">
                                    <span class="list-prop">Threat Level</span>
                                    <span class="list-data">High</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="img-holder">
                            <img src="" alt="">
                            <div class="indicator indirect">Indirect</div>
                        </div>
                        <div class="item-content">
                            <h3>
                                Competitor 2
                            </h3>
                            <div class="item-content-inner">
                                <div class="item-content-segment">
                                    <span class="list-prop">Location</span>
                                    <span class="list-data">Poor</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Quality</span>
                                    <span class="list-data">Fair</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Image</span>
                                    <span class="list-data">Good</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Location</span>
                                    <span class="list-data">Very Good</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Quality</span>
                                    <span class="list-data">Excellent</span>
                                </div>
                                <div class="item-content-segment summary">
                                    <span class="list-prop">Threat Level</span>
                                    <span class="list-data">High</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="img-holder">
                            <img src="" alt="">
                            <div class="indicator indirect">Indirect</div>
                        </div>
                        <div class="item-content">
                            <h3>
                                Competitor 2
                            </h3>
                            <div class="item-content-inner">
                                <div class="item-content-segment">
                                    <span class="list-prop">Location</span>
                                    <span class="list-data">Poor</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Quality</span>
                                    <span class="list-data">Fair</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Image</span>
                                    <span class="list-data">Good</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Location</span>
                                    <span class="list-data">Very Good</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Quality</span>
                                    <span class="list-data">Excellent</span>
                                </div>
                                <div class="item-content-segment summary">
                                    <span class="list-prop">Threat Level</span>
                                    <span class="list-data">High</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="img-holder">
                            <img src="" alt="">
                            <div class="indicator indirect">Indirect</div>
                        </div>
                        <div class="item-content">
                            <h3>
                                Competitor 2
                            </h3>
                            <div class="item-content-inner">
                                <div class="item-content-segment">
                                    <span class="list-prop">Location</span>
                                    <span class="list-data">Poor</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Quality</span>
                                    <span class="list-data">Fair</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Image</span>
                                    <span class="list-data">Good</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Location</span>
                                    <span class="list-data">Very Good</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Quality</span>
                                    <span class="list-data">Excellent</span>
                                </div>
                                <div class="item-content-segment summary">
                                    <span class="list-prop">Threat Level</span>
                                    <span class="list-data">High</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="img-holder">
                            <img src="" alt="">
                            <div class="indicator indirect">Indirect</div>
                        </div>
                        <div class="item-content">
                            <h3>
                                Competitor 2
                            </h3>
                            <div class="item-content-inner">
                                <div class="item-content-segment">
                                    <span class="list-prop">Location</span>
                                    <span class="list-data">Poor</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Quality</span>
                                    <span class="list-data">Fair</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Image</span>
                                    <span class="list-data">Good</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Location</span>
                                    <span class="list-data">Very Good</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Quality</span>
                                    <span class="list-data">Excellent</span>
                                </div>
                                <div class="item-content-segment summary">
                                    <span class="list-prop">Threat Level</span>
                                    <span class="list-data">High</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="img-holder">
                            <img src="" alt="">
                            <div class="indicator indirect">Indirect</div>
                        </div>
                        <div class="item-content">
                            <h3>
                                Competitor 2
                            </h3>
                            <div class="item-content-inner">
                                <div class="item-content-segment">
                                    <span class="list-prop">Location</span>
                                    <span class="list-data">Poor</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Quality</span>
                                    <span class="list-data">Fair</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Image</span>
                                    <span class="list-data">Good</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Location</span>
                                    <span class="list-data">Very Good</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Quality</span>
                                    <span class="list-data">Excellent</span>
                                </div>
                                <div class="item-content-segment summary">
                                    <span class="list-prop">Threat Level</span>
                                    <span class="list-data">High</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="img-holder">
                            <img src="" alt="">
                            <div class="indicator indirect">Indirect</div>
                        </div>
                        <div class="item-content">
                            <h3>
                                Competitor 2
                            </h3>
                            <div class="item-content-inner">
                                <div class="item-content-segment">
                                    <span class="list-prop">Location</span>
                                    <span class="list-data">Poor</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Quality</span>
                                    <span class="list-data">Fair</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Image</span>
                                    <span class="list-data">Good</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Location</span>
                                    <span class="list-data">Very Good</span>
                                </div>
                                <div class="item-content-segment">
                                    <span class="list-prop">Quality</span>
                                    <span class="list-data">Excellent</span>
                                </div>
                                <div class="item-content-segment summary">
                                    <span class="list-prop">Threat Level</span>
                                    <span class="list-data">High</span>
                                </div>
                            </div>
                        </div>
                    </div> -->
                </div>

                <div class="details-section">
                    <button class="details-btn">
                        <i class="fa fa-plus"></i>
                    </button>
                    <h3>
                        Add More Details
                    </h3>
                    <p>
                        See all the tips and tricks and add a more detailed description of this step
                    </p>
                </div>
            </div>
        </div>

        <footer class="footer block-wrapper">
            <div class="btn-holder">
                <button class="back">
                    <span>
                        <strong>
                            Back
                        </strong>
                    </span>
                    <span>Customers</span>
                    <i class="fa fa-arrow-left"></i>
                </button>
            </div>

            <div class="progress-area">
                <h4>
                    Status
                </h4>
                <div class="pills-holder">
                    <span class="left active">In Progress</span>
                    <span class="rigth">Completed</span>
                </div>
            </div>
            
            <div class="btn-holder">
                <button class="next">
                    <span>
                        <strong>
                            NEXT
                        </strong>
                    </span>
                    <span>Comparison</span>
                    <i class="fa fa-arrow-right"></i>
                </button>
            </div>
        </footer>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "Competitors",
    computed: mapGetters(['allItems'])
}
</script>

<style lang="scss">
@import "../assets/scss/main.scss";

    *{box-sizing: border-box}
   
    /* HEADER SECTION start */
    .header{margin: 1.5rem 0;}
    .header-inner{display: flex; border-radius: .5rem; box-shadow: $box-shadow;
        .header-item{
            display: flex; 
            flex: 1 1 100%; 
            font-size: 1.125rem; 
            font-weight: 500; 
            text-align: left; 
            color: $gray-middle; 
            background-color: $elem-background; 
            border-right: 1px solid $border-color-header; 
            padding: .75rem 2.5rem; 
            align-items: center; 
            justify-content: space-between; 
            transition: all .2s ease-in-out;
            cursor: pointer; 
            
            &.active{font-weight: 700; color: $blue; border-bottom: .25rem solid $blue;}
            &:first-child{border-radius: .25rem 0 0 .25rem;}
            &:last-child{border-radius: 0 .25rem .25rem 0; border-right: none;}

            &:hover{color: $blue; border-bottom: .25rem solid $blue;}

            .pill{padding: .5rem 1rem; font-weight: 500; font-size: 1rem; border-radius: 1.125rem; background-color: $blue-lighter;}
        }
    }
    /* HEADER SECTION end */

    /* === HEADING SECTION start === */
    .heading{display: flex; justify-content: space-between; border-bottom: 1px solid $border-color-main2; padding-bottom: .5rem;

        h1{flex: 3 1 auto;}
    }

    .info-block{display: flex; flex: 1 1 auto; align-items: center; justify-content: flex-end; color: $gray-middle;

        .info-inner{position: relative; min-width: 10rem; font-size: 1.125rem; background-color: $elem-background; padding: 1rem 1rem 1rem 2rem; box-shadow: $box-shadow; border-radius: .5rem; text-align: center; cursor:pointer;
            &:first-child{margin-right: 1rem;}
            
            i{position: absolute; left: 1rem; font-size: 1.5rem; color: $gray-light;}
        }
    }
    /* === HEADING SECTION end === */

    /* === SUB-HEADING SECTION start === */
    .sub-heading{display: flex;     justify-content: center;
    align-items: center;}

    .sub-heading-text{flex: 1 1 auto; margin: 2.5rem 0 1.5rem;
        h2{margin-bottom: .5rem;}
    }

    .display-item-holder{display: flex; flex: 0 0 auto; flex-wrap: wrap; border: 1px solid $border-color-main2; border-radius: .25rem; overflow: hidden;}
    .display-item-btn{width: 3rem; height: 3rem; display: flex; background-color: $elem-background; border-right: 1px solid $border-color-main2; padding: 1rem .75rem; justify-content: space-between; cursor: pointer;
        &:last-child{border-right: none;}
        &.active span{background-color: $blue;}
        span{display: block; background-color: $gray-hamburger; border-radius: .125rem;}

        &.row-display{flex-direction: row;
            span{width: .375rem;}
        }
        &.column-display{flex-direction: column;
            span{height: .25rem;}
        }
    }
    /* === SUB-HEADING SECTION end === */

    /* === ITEMS SECTION start === */
    .items-holder{display: flex; flex-flow: row wrap;}
    .item{position: relative; flex: 0 1 calc( 20% - 2rem); background-color: $elem-background; margin: 1.25rem 2.5rem 1.5rem 0; box-shadow: $box-shadow; border-radius: .5rem; overflow: hidden;
    
        &:nth-child(5n){margin-right: 0;}
        &.add-item{background-color: transparent; box-shadow: none; border: 1px dashed $gray-middle;}
    }

    .add-item-inner{position: absolute; width: 100%; height: 100%; display: flex; align-items: center; flex-direction: column; justify-content: center;}
    .add-item-btn{position: relative; max-width: 7.5rem; width: 100%; max-height: 7.5rem; height: 100%; background-color: $blue-lighter; border-radius: 50%; margin-bottom: 1rem; cursor: pointer;
        &::after{content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: block; width: 30%; height:.1875rem; background-color: $blue;}
        &::before{@extend .add-item-btn::after; width: .1875rem; height: 30%;}
    }

    .img-holder{min-height: 10.5rem; position: relative; background-image:url(../assets/images/photo.jpg); background-position: center; background-size: cover; background-repeat: no-repeat;
        .indicator{position: absolute; bottom: 1rem; right: 1rem; display: block; min-width: 6rem; border-radius: .25rem; font-size: .875rem; text-align: center; line-height: 1.8; color: #fff; padding: .25rem .5rem;
            &.direct{background-color: $yelow;}
            &.indirect{background-color: $blue-middle;}
        }
    }

    .item-content{padding: 1.5rem .75rem .75rem; border-top: 1px solid $border-color-main;
        h3{text-align: center;}
    }
    .item-content-inner{display: flex; flex-flow: column wrap;}
    .item-content-segment{display: flex; justify-content: space-between; border-bottom: 1px dashed $border-color-main; padding: .75rem 0; margin: 0 .75rem;

        &.summary{background-color: $red-light; border-radius: .5rem;  margin: 0; padding: .75rem; color: $red;}
        &:nth-last-child(2), &:last-child {border-bottom: none;}

        span{font-size: .875rem; font-weight: 400; line-height: 1.6;
            &.list-data{font-weight: 500;}
        }
    }
    /* === ITEMS SECTION end === */

    /* === DETAILS SECTION start === */
    .details-section{position: relative; border: 1px dashed $border-color-main3; border-radius: .75rem; background-color: $elem-background; text-align: center; margin: 4.5rem 0; background-image: url("../assets/images/bulb.png"); background-size: contain; background-repeat: no-repeat;background-position: 90% 0; padding: 0 1.5rem;
        p{margin-bottom: 1.5rem}
    }
    .details-btn{$btn-dim:3.5rem; background: $blue-btn; border: none; color: #fff; width: $btn-dim; height: $btn-dim; border-radius: 50%; position: relative; top: calc( -#{$btn-dim} / 2); cursor: pointer; outline: none;}
    /* === DETAILS SECTION end === */

    /* === FOOTER SECTION start === */
    .footer{display: flex; justify-content: space-between; padding-top: 2.5rem; padding-bottom: 2.5rem;}
    .btn-holder{max-width: 20rem; width: 100%;
        button{position: relative; width: 100%; font-size: 1.125rem; line-height: 1.4; font-family: inherit; outline: none; background-color: $elem-background; border: none; border-radius: .5rem; box-shadow: $box-shadow; padding: .75rem; cursor: pointer;
            span{display: block; text-align: left;}
            i{position: absolute; top: 50%; transform: translateY(-50%); font-size:2rem;}

            &.back{padding-left: 5rem; padding-right: 1.5rem;
                span{color: $gray-lighter;
                     strong{color: $gray-dark;}
                }
                i{left: 1.5rem; color: $gray-lighter;}
            }
            &.next{background-color: $blue-btn; padding-left: 1.5rem; padding-right: 5rem;
                span{color: $blue-light;
                     strong{color: #fff;}
                }
                i{right: 1.5rem; color: $blue-light;}
            }
        }
    }
    .progress-area{position: relative; display: flex; align-items: center;
        h4{position: absolute; top: -2rem; width: 100%; text-align: center; color: $gray-light;}
    }
    .pills-holder{position: relative; border: 1px solid $border-color-main2; border-radius: 1.125rem;
        span{ display: inline-block; padding: .5rem 1rem; font-size: .875rem; border-radius: 1.125rem; color: $gray-lighter;
            &.active.left{border-right: 1px solid $border-color-main2; background-color: $elem-background; color: $blue; font-weight: 800;}
            &.active.rigth{border-left: 1px solid $border-color-main2;}
        }
    }
    /* === FOOTER SECTION end === */

    /* ===== RESPONSIVE ===== */
    @media only screen and (max-width: 1440px) {
        body{margin: 0;}
        .header-inner {
            .header-item{font-size: 1rem; padding: .75rem 1.5rem;
                .pill{padding: .25rem .75rem; font-size: .75rem; border-radius: 1rem;}
            }
        }

        .item{position: relative; flex: 0 1 calc( 25% - 1.875rem); 
            &:nth-child(4n){margin-right: 0;}
            &:nth-child(5n){margin-right: 2.5rem;}
        }
    }

    @media only screen and (max-width: 1280px) {
        .item{flex: 0 1 calc( 33.3333% - 1.75rem);
            &:nth-child(3n){margin-right: 0;}
            &:nth-child(4n){margin-right: 2.5rem;}
        }
    }

    @media only screen and (max-width: 992px) {
        .header-inner{flex-direction: column;}
        .heading{flex-direction: column; align-items: center; padding-bottom: 1.5rem;}

        .item{flex: 0 1 calc( 33.3333% - 1.75rem);
            &:nth-child(3n){margin-right: 0;}
            &:nth-child(4n){margin-right: 2.5rem;}
        }

        .btn-holder {
            max-width: 12rem;
        }
    }

    @media only screen and (max-width: 768px) {
        .block-wrapper{padding: 0 1.5rem;}

        .sub-heading{flex-direction: column;}
        .sub-heading-text{margin-bottom: 0;}
        .display-item-holder{align-self: flex-end;}

        .item{position: relative; flex: 0 1 calc( 50% - 0.75rem); margin: 1rem 1.5rem 1rem 0;
            &:nth-child(5n){margin-right: 1.5rem;}
            &:nth-child(3n){margin-right: 1.5rem;}
            &:nth-child(2n){margin-right: 0;}
        }

        .footer{flex-wrap: wrap; margin-bottom: 1.5rem;}
        .progress-area{flex: 1 0 100%; order: 1;}
        .pills-holder{margin: 1rem auto;}
        .btn-holder{order: 2;}
    }

    @media only screen and (max-width: 500px) {
        .item{position: relative; flex: 0 1 100%; margin: 1rem 1.5rem 1rem 0;
            &:nth-child(n){margin-right: 0;}
            &.add-item{height: 12rem;}
        }

        .info-block .info-inner {min-width: 8rem; font-size: 1rem; padding: 1rem .5rem 1rem 2.5rem;}

        .btn-holder{max-width: 8rem;
            button{font-size: .75rem;
                i{font-size: 1rem}
                &.back{padding: .5rem .5rem .5rem 2rem;
                    i{left: .5rem;}
                }

                &.next{padding: .5rem .2rem .5rem .5rem;
                    i{right: .5rem;}
                }
            }
        }
    }
    

</style>