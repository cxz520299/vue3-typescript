<template>
<div class="carousel">
    <!-- 要轮播的内容 -->
    <div class="item" v-for="(vo,inx) in items" :key="inx" v-show='inx===active'>
        <div class="item-content">{{vo}}</div>
        <!-- 轮播控件 左右轮播 -->
        <span class="item-left" @click.stop="goLeft(inx)">←</span>
        <span class="item-right" @click.stop="goRight(inx)">→</span>
        <!-- 轮播控件 小圆点 -->
        <div class="item-control">
            <div class="item-inx" v-for="(v,i) in items.length" :key="i" :style="active===i?'background:#222;':''" @click="changeInx(i)"></div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {defineComponent,reactive,toRefs} from 'vue'
export default defineComponent({
    setup() {
        const data = reactive({
            items: ['轮播1','轮播2','轮播3'],
            active: 0,
            // 左切换
            goLeft: (inx: number) => {
                data.active = inx > 0 ? (--inx) : (data.items.length - 1);
            },
            // 右切换
            goRight: (inx: number) => {
                data.active = inx < (data.items.length - 1) ? (++inx) : 0;
            },
            // 小圆点切换
            changeInx: (i: number) => {
                data.active = i
            },
        })
        return {...toRefs(data)}
    }
})
</script>

<style lang="scss" scoped>
.carousel {
    margin: 0 auto;
    padding-top: 50px;
    width: 800px;
    background: #ecf0f3;
    height: 400px;
    overflow: hidden;
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .item {
        animation-name: fadeIn;
        animation-duration: 1s;
        animation-fill-mode: both;
        width: 100%;
        height: 100%;
        position: relative;
        .item-content {
            color: #fff;
            background: rgba(0, 0, 0, .2);
            text-align: center;
        }
        >span {
            padding: 4px;
            color: #fff;
            background: rgba(0, 0, 0, .2);
            top: 46%;
            cursor: pointer;
            z-index: 99;
        }
        .item-left {
            position: absolute;
            left: 10px;
        }
        .item-right {
            position: absolute;
            right: 10px;
        }
        .item-control {
            position: absolute;
            bottom: 20px;
            display: flex;
            justify-content: center;
            left: 0;
            right: 0;
            .item-inx {
                cursor: pointer;
                width: 16px;
                height: 16px;
                background: rgba(0, 0, 0, .2);
                border-radius: 50%;
                margin: 0 4px;
            }
        }
    }
    .item:nth-child(2n) {
     background-color: #99a9bf;
  }
    .item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
}
</style>
