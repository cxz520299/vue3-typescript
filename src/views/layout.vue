<template>
<div class="layout">
    <header>
        <nav class="inner-shadow">
            <ul>
                <li v-for="(vo,inx) in items" :key="inx">
                    <router-link :to="vo.url">{{vo.name}}</router-link>
                </li>
            </ul>
        </nav>
    </header>
    <router-view></router-view>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    reactive,
    toRefs
} from 'vue'

export default defineComponent({
    setup() {
        const data = reactive({
            items: [{
                name: "手风琴",
                url: "/"
            }, {
                name: "穿梭框",
                url: "shuttle"
            }, {
                name: "多选标签",
                url: "menu"
            }]
        })
        return {
            ...toRefs(data)
        }
    }
})
</script>

<style lang="scss">
.layout {
    @keyframes waves {
        from {
            clip-path: polygon(0% 17%,
                    9% 10%,
                    18% 4%,
                    30% 0%,
                    43% 1%,
                    49% 4%,
                    57% 7%,
                    66% 10%,
                    78% 11%,
                    89% 11%,
                    96% 9%,
                    100% 7%,
                    100% 100%,
                    0% 100%);
        }

        50% {
            clip-path: polygon(0% 4%,
                    6% 9%,
                    13% 13%,
                    23% 15%,
                    31% 16%,
                    42% 15%,
                    49% 13%,
                    61% 10%,
                    71% 5%,
                    81% 3%,
                    90% 2%,
                    100% 5%,
                    100% 100%,
                    0% 100%);
        }

        to {
            clip-path: polygon(0% 17%,
                    9% 10%,
                    18% 4%,
                    30% 0%,
                    43% 1%,
                    49% 4%,
                    57% 7%,
                    66% 10%,
                    78% 11%,
                    89% 11%,
                    96% 9%,
                    100% 7%,
                    100% 100%,
                    0% 100%);
        }
    }

    .inner-shadow {
        border-radius: 0.4375rem;
        box-shadow: inset 0.375rem 0.375rem 0.625rem #d1d9e6, inset -0.375rem -0.375rem 0.625rem #fff;
    }

    .router-link-exact-active {
        color: #fff;
        width: 100px;
        height: 40px;
        background-color: #5352ed;
        border-radius: 4px;
        left: 10px;
        bottom: 0;
        z-index: -1;
        transition: all ease 0.4s;
        animation: 2s ease-in-out waves infinite;
    }

    .header {
        width: 100px;
    }

    nav {
        display: flex;
        align-items: center;
        padding: 10px;
        top: 50px;
        color: #b9babc;
        z-index: 999;
        position: absolute;
        left: 0;
    }

    ul {
        position: relative;
    }

    ul li {
        list-style: none;
        width: 120px;
        line-height: 40px;
        text-align: center;
    }

    ul li a {
        color: #333;
        text-decoration: none;
        display: inline-block;
        width: 100px;
        height: 40px;
    }
}
</style>
