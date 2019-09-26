<template>
    <div>
        <Header></Header>

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

                <!-- ITEMS SECTION -->
                <Items></Items>

                <AddDetails />
            </div>
        </div>

        <!-- FOOTER SECTION -->
        <Footer></Footer>
    </div>
</template>

<script>
import Items from './Items';
import Footer from './Footer';
import Header from './Header';
import AddDetails from './AddDetails';

export default {
    name: "Competitors",
    components: {
        Items,
        Footer,
        Header,
        AddDetails
    }
}
</script>

<style lang="scss">
    @import "../assets/scss/main.scss";

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

    /* ===== RESPONSIVE ===== */

    @media only screen and (max-width: 992px) {
        .heading{flex-direction: column; align-items: center; padding-bottom: 1.5rem;}
    }

    @media only screen and (max-width: 768px) {
        .sub-heading{flex-direction: column;}
        .sub-heading-text{margin-bottom: 0;}
        .display-item-holder{align-self: flex-end;}
    }

    @media only screen and (max-width: 500px) {
        .info-block .info-inner {min-width: 8rem; font-size: 1rem; padding: 1rem .5rem 1rem 2.5rem;}
    }
    

</style>