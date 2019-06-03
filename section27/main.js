// Vue.component('my-component-a', {
//     template: '<div class="my-component-a">component A</div>'
// })
// Vue.component('my-component-b', {
//     template: '<div class="my-component-b">component B</div>'
// })

// メッセージ一覧用
Vue.component('comp-board', {
    template: '<div>message board</div>'
})
// 入力フォーム用
Vue.component('comp-form', {
    template: '<div>Form<textarea v-model="message"></textarea></div>',
    data: function() {
        return {message: ''}
    }
})
new Vue({
    el: '#app',
    data: {
        componentTypes: [
            'my-component-a',
            'my-component-b',
        ],
        // current: 0,
        current: 'comp-board',
    },
    computed: {
        component: function() {
            return this.componentTypes[this.current]
        }
    }
})