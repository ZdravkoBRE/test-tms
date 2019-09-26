<template>
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
</template>

<script>
export default {
    name: "Footer"

}
</script>

<style lang="scss">
    @import "../assets/scss/main.scss";

    /* === FOOTER SECTION start === */
    .footer{display: flex; justify-content: space-between; padding-top: 2.5rem; padding-bottom: 2.5rem; margin: 1.5rem 0;}
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

    @media only screen and (max-width: 992px) {

        .btn-holder {
            max-width: 12rem;
        }
    }

    @media only screen and (max-width: 768px) {

        .footer{flex-wrap: wrap; margin-bottom: 1.5rem;}
        .progress-area{flex: 1 0 100%; order: 1;}
        .pills-holder{margin: 1rem auto;}
        .btn-holder{order: 2;}
    }

    @media only screen and (max-width: 500px) {

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