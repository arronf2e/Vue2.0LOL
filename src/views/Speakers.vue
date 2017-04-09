<template>
    <div>
        <div class="list" v-if="speakersList.length > 0">
            <div class="list_item" v-for="speaker in speakersList" v-if="speaker.videonum > 0">
                <div class="list_item-avatar">
                    <mu-avatar slot="left" :src="speaker.img[0] == 'h' ? `${speaker.img}` :`http:${speaker.img}`"/>
                </div>
                <div class="list_item-name">
                    <span>
                        {{ speaker.name }}
                    </span>
                </div>
                <div class="list_item-number">
                    <span>
                        {{ speaker.videonum | pv }}个视频
                    </span>
                </div>
            </div>
        </div>
        <Loading v-else></Loading>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import Loading from '../components/Loading'
import { pv } from '../filters'
export default {
    created () {
        this.init()
    },
    data () {
        return {
            
        }
    },
    computed: {
        ...mapState(['speakersList'])
    },
    methods: {
        init() {
            this.$store.dispatch('GET_SPEAKERS_LIST')
            this.setTitle()
        },
        setTitle () {
            this.$store.commit('set_title', '全部解说')
        }
    },
    components: {
        Loading
    },
    filters: {
        pv
    }
}
</script>
<style lang="less">
.list {
    background: #eceff6;
    padding: 0 0.5rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    &_item {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 0.2rem;
        background: #fff;
        padding: 0.2rem 0;
        &-avatar {
            flex: 1;
            padding-left: 0.4rem;
            display: flex;
            align-items: center;
        }
        &-name {
            flex: 3;
            display: flex;
            align-items: center;
        }
        &-number {
            flex: 1;
            display: flex;
            align-items: center;
            span {
                color: #666;
                font-size: 0.24rem;
            }
        }
    }
}
</style>