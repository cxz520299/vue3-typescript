<template>
<div class="menu">
    <div class="menu-box">
        <!-- 循环每个标签 -->
        <duv class="menu-item" v-for="(vo,inx) in items" @click="itemFn(inx)" :class="vo.isTrue?'acitve':''" :key="inx">
            {{vo.name}}
        </duv>
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
                name: '推荐',
                isTrue: false
            }, {
                name: '图片',
                isTrue: false
            }, {
                name: '视频',
                isTrue: false
            }, {
                name: '段子',
                isTrue: false
            }, ],
            itemFn: (inx: number) => {
                data.items[inx].isTrue = !data.items[inx].isTrue
            }
        })
        const data_ = toRefs(data)
        return {
            ...data_
        }
    }
})
</script>

<style lang="scss" scoped>
.menu {
    width: 800px;
    padding: 50px 0;
    margin: 0 auto;
    .menu-box {
        width: 400px;
        height: 80px;
        background: #f5f5f5;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 20px;
        padding-top: 20px;

        .menu-item {
            padding: 6px 15px;
            height: 40px;
            border: 1px solid #ddd;
            border-radius: 20px;
            cursor: pointer;
        }

        .acitve {
            border: 1px solid #409EFF;
            color: #409EFF;
        }
    }
}
</style>
