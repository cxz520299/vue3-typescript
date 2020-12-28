<template>
<div class="shuttle">
    <!-- 左边列表 -->
    <div class="shuttle-box">
        <div class="shuttle-box-title">
            <div>列表一</div>
            <div class="index-num">{{itemLeft.length}}</div>
        </div>
        <div class="shuttle-box-list">
            <div class="shuttle-box-item" v-for="(vo,inx) in itemLeft" :key="inx">
                <input type="checkbox" :value="inx" v-model="checkLeft" :disabled="vo.disabled" /> {{vo.label}}
            </div>
        </div>
    </div>
    <!-- 左右操作按钮 -->
    <div class="shuttle-click">
        <span @click="goLeft">←</span>
        <span @click="goRight">→</span>
    </div>
    <!-- 右边列表 -->
    <div class="shuttle-box">
        <div class="shuttle-box-title">
            <div>列表二</div>
            <div class="index-num">{{itemRight.length}}</div>
        </div>
        <div class="shuttle-box-list">
            <div class="shuttle-box-item" v-for="(vo,inx) in itemRight" :key="inx">
                <input type="checkbox" :value="inx" v-model="checkRight" :disabled="vo.disabled" /> {{vo.label}}
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
            itemLeft: [{
                label: '列表1的第一条数据',
                disabled: true,
            }, {
                label: '列表1的第二条数据',
                disabled: false,
            }],
            itemRight: [{
                label: '列表2的第一条数据',
                disabled: false,
            }, {
                label: '列表2的第二条数据',
                disabled: false,
            }],
            checkLeft: [],
            checkRight: [],
            goLeft: () => {
                //数组排序
                data.checkRight.sort(data.sortIndex);
                data.checkRight.forEach((item) => {
                    //将itemRight对应索引的数据移动到左边去
                    data.itemLeft.push(data.itemRight[item]);
                    //移除
                    data.itemRight.splice(item, 1);
                });
                data.checkLeft = [];
                data.checkRight = [];
            },
            goRight: () => {
                //数组排序
                data.checkLeft.sort(data.sortIndex);
                data.checkLeft.forEach((item) => {
                    //将itemLeft对应索引的数据移动到右边去
                    data.itemRight.push(data.itemLeft[item]);
                    //移除
                    data.itemLeft.splice(item, 1);
                });
                data.checkLeft = [];
                data.checkRight = [];
            },
            //checkbox是绑定的是的数组的索引，所以checkbox的点击的顺序不同的话索引的顺序是不同的，这样删除有可能找不到会报错，排个序从大到小删除就可以
            //这个是排序参数
            sortIndex: (a: number, b: number) => {
                return b - a;
            }
        })
        return {
            ...toRefs(data),
        }
    }
})
</script>

<style lang="scss" scoped>
.shuttle {
    width: 800px;
    padding: 50px 0;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    //整个穿梭框
    .shuttle-box {
        width: 300px;
        height: 500px;
        border: 1px solid #ddd;

        //标题
        .shuttle-box-title {
            background: #f5f7fa;
            padding: 0 20px;
            height: 40px;
            line-height: 40px;
            display: flex;
            justify-content: space-between;

            .index-num {
                color: #909399;
                font-size: 12px;
                font-weight: 400;
            }
        }

        //列表
        .shuttle-box-list {
            padding: 20px;

            //一个列表item
            .shuttle-box-item {
                line-height: 2.0;
            }
        }
    }

    //左右穿梭按钮
    .shuttle-click {
        padding-top: 60px;
        cursor: pointer;

        span {
            padding: 5px 10px;
            display: inline-block;
            background: #409eff;
            color: #ffffff;
            margin: 0 5px;
            text-align: center;
        }
    }
}
</style>
