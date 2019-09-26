<template>
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
</template>

<script>
export default {
    name: "Header"

}
</script>

<style lang="scss">
    @import "../assets/scss/main.scss";

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

    /* ===== RESPONSIVE ===== */
    @media only screen and (max-width: 1440px) {
        .header-inner {
            .header-item{font-size: 1rem; padding: .75rem 1.5rem;
                .pill{padding: .25rem .75rem; font-size: .75rem; border-radius: 1rem;}
            }
        }
    }

    @media only screen and (max-width: 992px) {
        .header-inner{flex-direction: column;}
    }

</style>