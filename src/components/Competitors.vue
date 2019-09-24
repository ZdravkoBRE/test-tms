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
                        <div class="display-item-btn row-display"></div>
                        <div class="display-item-btn column-dsplay"></div>
                    </div>
                </div>

                <div class="items-holder">
                    <div class="item add-item">
                        <div class="add-item-inner">
                            <div class="add-item-btn">
                                <i class="fa fa-plus"></i>
                            </div>
                            <h3>
                                New Competitor
                            </h3>
                        </div>
                    </div>

                    <div class="item">
                        <div class="img-holder">
                            <img src="" alt="">
                            <div class="indicator direct">Direct</div>
                        </div>
                        <div class="item-content">
                            <h3>
                                Competitor 1
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
                            <div class="indicator direct">Direct</div>
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
                </div>

                <div class="details-section">

                </div>
            </div>
        </div>

        <footer class="footer">
            <div class="btn-holder">
                <button>
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

            </div>
            <div class="btn-holder">
                <button>
                    <span>
                        <strong>
                            Back
                        </strong>
                    </span>
                    <span>Customers</span>
                    <i class="fa fa-arrow-left"></i>
                </button>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name: "Competitors"
}
</script>

<style lang="scss">
@import "../../public/scss/main.scss";
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

    .heading{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid $border-color-main;
        padding-bottom: .5rem;

        h1{flex: 3 1 auto;}
    }

    .info-block{display: flex; flex: 1 1 auto; align-items: center; justify-content: flex-end; color: $gray-middle;

        .info-inner{position: relative; min-width: 10rem; font-size: 1.125rem; background-color: $elem-background; padding: 1rem 1rem 1rem 2rem; box-shadow: $box-shadow; border-radius: .5rem; text-align: center; cursor:pointer;
            &:first-child{margin-right: 1rem;}
            
            i{position: absolute; left: 1rem; font-size: 1.5rem; color: $gray-light;}
        }
    }

    .sub-heading-text{margin: 2.5rem 0 1.5rem;
        h2{margin-bottom: .5rem;}
    }

    .items-holder{display: flex; flex-flow: row wrap;}
    .item{flex: 0 1 calc( 20% - 2rem); background-color: $elem-background; margin-right: 2.5rem; box-shadow: $box-shadow; border-radius: .5rem; 

        &:nth-child(5){margin-right: 0;}
    }
    .img-holder{min-height: 5.5rem;}

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


</style>