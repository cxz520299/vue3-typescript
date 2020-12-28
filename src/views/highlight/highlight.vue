<template>
<div class="highlight">
    <h1>{{htmlV.title}}</h1>
    <div v-html="htmlV.oneList"></div>
    <h1>{{htmlV.titleInstall}}</h1>
    <div class="npm">npm 安装 <span>npm install highlight.js --save</span></div>
    <h1>{{htmlV.titleUse}}</h1>
    <h2>main.ts中使用</h2>
    <div v-highlight>
        <pre>
             <code class="ts">
{{htmlV.useContet}}
    </code>
        </pre>
    </div>
    <h2>{{htmlV.titleVue}}</h2>
    <!-- 要高亮的代码块用“v-highlight” -->
    <div>
        <img :src="htmlV.titleVueFlse" alt="" srcset="">
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
            htmlV: {
                title: '为何选择 Highlight.js',
                titleInstall: '安装',
                titleUse: '使用',
                useContet: `import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import hljs from 'highlight.js' //导入代码高亮文件
import 'highlight.js/styles/monokai-sublime.css'  //导入代码高亮样式

const app = createApp(App)

//自定义一个代码高亮指令
app.directive('highlight', function (el) {
const blocks = el.querySelectorAll('pre code');
blocks.forEach((block: any) => {
hljs.highlightBlock(block)
})
})

app.use(store);
app.use(router);
app.mount('#app')`,
                titleVue: 'vue文件中使用',
                titleVueFlse: require('@/assets/vueM.png'),
                npmAdress: '<p>npm 安装<code></code></p>',
                oneList: `<ul><li><a href="https://highlightjs.org/static/demo/">190种语言和97种样式</a></li><li>自动语言检测</li><li>多语言代码突出显示</li><li>可用于node.js</li><li>适用于任何标记</li><li>与任何js框架兼容</li></ul>`
            },

        })
        const data_ = toRefs(data)
        return {
            ...data_
        }
    }
})
</script>

<style lang="scss">
.highlight {
    padding: 50px 0;
    width: 800px;

    a {
        color: #428bca;
        text-decoration: none;
    }

    h1 {
        font-size: 24px;
        font-weight: bold;
        margin: 20px 0;
    }

    h2 {
        margin-bottom: 20px;
    }

    ul {
        li {
            line-height: 1.6;
        }
    }

    .npm span {
        font-size: 90%;
        color: #c7254e;
        background-color: #f9f2f4;
        padding: 1px 4px;
    }

}
</style>
