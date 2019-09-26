<template>

    <div>
        <div class="items-holder">
            <div class="item add-item">
                <div class="add-item-inner">
                    <div @click="displayPopup" class="add-item-btn"></div>
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
        </div>

        <div ref="popup" class="add-item-wrapper">
            <form @submit="onSubmit" class="add-item-form">
                <input type="number" v-model="id" placeholder="Add Competitor id ..." >
                <input type="text" v-model="location" placeholder="Add location ...">
                <input type="text" v-model="quality" placeholder="Add quality ...">
                <input type="text" v-model="image" placeholder="Add image ...">
                <input type="text" v-model="place" placeholder="Add place ...">
                <input type="text" v-model="threat" placeholder="Add threat ...">
                <input type="submit" value="ADD COMPETITOR">
            </form>
        </div>

    </div>
  
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: "Items",
    data() {
        return {
            id: '',
            location: '',
            quality: '',
            image: '',
            place: '',
            threat: '',
        }
    },
    methods: {
        ...mapActions(['fetchItems', 'addItems']),
        onSubmit(e) {
            e.preventDefault();

            this.addItems(this.id, this.location, this.quality, this.image, this.place, this.threat);
            this.$refs.popup.style.display = "none;"
        },
        displayPopup() {

           this.$refs.popup.style.display = "block";
        }
    },
    computed: mapGetters(['allItems']),
    created() {
        this.fetchItems();
    }
}
</script>

<style lang="scss">
    @import "../assets/scss/main.scss";

    /* === ITEMS SECTION start === */
    .items-holder{display: flex; flex-flow: row wrap;}
    .item{position: relative; flex: 0 1 calc( 20% - 2rem); background-color: $elem-background; margin: 1.25rem 2.5rem 1.5rem 0; box-shadow: $box-shadow; border-radius: .5rem; overflow: hidden;
    
        &:nth-child(5n){margin-right: 0;}
        &.add-item{min-height: 12rem; background-color: transparent; box-shadow: none; border: 1px dashed $gray-middle;}
    }

    .add-item-inner{position: absolute; width: 100%; height: 100%; display: flex; align-items: center; flex-direction: column; justify-content: center;}
    .add-item-btn{position: relative; max-width: 7.5rem; width: 100%; max-height: 7.5rem; height: 100%; background-color: $blue-lighter; border-radius: 50%; margin-bottom: 1rem; cursor: pointer;
        &::after{content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: block; width: 30%; height:.1875rem; background-color: $blue;}
        &::before{@extend .add-item-btn::after; width: .1875rem; height: 30%;}

        &:hover{transition: all .3s ease-in-out; background-color: $blue-light;
            &::after{background-color:#fff;}
            &::before{background-color: #fff;}
        }
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

    /* === FORM POPUP start === */
    .add-item-wrapper{display: none; position: absolute; top: 50%; background-color: #fff;
    left: 50%; transform: translate(-50%, -50%);}
    .add-item-form{display: flex; flex-direction: column; max-width: 20rem; width: 100%; margin: 0 auto;
        input{height: 2.5rem; margin-bottom: .5rem; border: 1px solid $gray-middle; border-radius: .25rem; padding: .25rem .75rem; font-size: 1rem; font-family: $montserrat;}
    }
    /* === FORM POPUP end === */

    /* ===== RESPONSIVE ===== */
    @media only screen and (max-width: 1440px) {
        body{margin: 0;}

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

        .item{flex: 0 1 calc( 33.3333% - 1.75rem);
            &:nth-child(3n){margin-right: 0;}
            &:nth-child(4n){margin-right: 2.5rem;}
        }
    }

    @media only screen and (max-width: 768px) {

        .item{position: relative; flex: 0 1 calc( 50% - 0.75rem); margin: 1rem 1.5rem 1rem 0;
            &:nth-child(5n){margin-right: 1.5rem;}
            &:nth-child(3n){margin-right: 1.5rem;}
            &:nth-child(2n){margin-right: 0;}
        }
    }

    @media only screen and (max-width: 500px) {

        .item{position: relative; flex: 0 1 100%; margin: 1rem 1.5rem 1rem 0;
            &:nth-child(n){margin-right: 0;}
            &.add-item{height: 12rem;}
        }
    }

</style>