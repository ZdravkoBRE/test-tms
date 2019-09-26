<template>
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
</template>

<script>
export default {
    name: "AddDetails"
}
</script>

<style lang="scss">
    @import "../assets/scss/main.scss";

    /* === DETAILS SECTION start === */
    .details-section{position: relative; border: 1px dashed $border-color-main3; border-radius: .75rem; background-color: $elem-background; text-align: center; margin: 4.5rem 0; background-image: url("../assets/images/bulb.png"); background-size: contain; background-repeat: no-repeat;background-position: 90% 0; padding: 0 1.5rem;
        p{margin-bottom: 1.5rem}
    }
    .details-btn{$btn-dim:3.5rem; background: $blue-btn; border: none; color: #fff; width: $btn-dim; height: $btn-dim; border-radius: 50%; position: relative; top: calc( -#{$btn-dim} / 2); cursor: pointer; outline: none;}
    /* === DETAILS SECTION end === */

</style>