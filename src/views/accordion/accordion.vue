<template>
<div class="accordion">
    <div v-for="(vo,inx) in items" :key="inx">
        <!-- 手风琴标题 -->
        <div class="item" @click="changeItem(vo,inx)">
            {{vo.title}}
        </div>
        <!-- 手风琴内容 -->
        <div class="content" v-show="active==inx&&vo.show">
            {{vo.content}}
            <!-- 可以自定义内容结构 -->
            <div v-if="inx===0">
                我是自定义内容1
            </div>
            <div v-if="inx===1">
                我是自定义内容2
            </div>
            <div v-if="inx===2">
                我是自定义内容3
            </div>
        </div>
    </div>
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
                    title: "JavaScript",
                    content: "这是内容1",
                    show: true
                },
                {
                    title: "Java",
                    content: "这是内容2",
                    show: true
                },
                {
                    title: "C++",
                    content: "这是内容3",
                    show: true
                }
            ],
            active: 0,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            changeItem: (vo: any, inx: number) => {
                //如果重复点击一个栏目item 可以关闭和打开当前栏目手风琴内容
                if (inx === data.active) {
                    vo.show = !vo.show
                } else {
                    vo.show = true
                }
                data.active = inx
            }
        })
        return {
            ...toRefs(data)
        }
    }
})
</script>

<style lang="scss" scoped>
.accordion {
    width: 800px;
    padding: 50px 20px;
    background: #ecf0f3;
    height: 600px;
    margin: 0 auto;
    .item {
        text-align: center;
        line-height: 80px;
        margin: 0 auto;
        width: 600px;
        height: 80px;
        border-radius: 12px;
        box-shadow: inset 12px 12px 20px #d1d9e6, inset -12px -12px 20px #fff;
        cursor: pointer;
        margin-bottom: 5px;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
    .content {
        opacity: 0;
        min-height: 80px;
        width: 600px;
        margin: 0 auto;
        animation-name: fadeIn;
        animation-duration: 1s;
        animation-fill-mode: both;
    }
}
</style>
