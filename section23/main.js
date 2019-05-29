// Vue.component('comp-child', {
//     // テンプレートでvalを使う
//     template: '<p>{{ val }}</p>',
//     // 受け取る属性を指定
//     props: ['val'],
// })
Vue.component('comp-child', {
    // v-forを用いて繰り返し表示する
    template: '<li>{{ name }} HP: {{ hp }}\
        <button v-on:click="doAttack">攻撃する</button></li>',
    props: ['name', 'hp'],
    methods: {
        doAttack: function() {
            // 親コンポーネントのデータをそのまま操作することになり警告がでる
            this.hp -= 10
        }
    }
})
new Vue({
    el: "#app",
    data: {
        message: "Hello",
        list: [
            { id: 1, name: 'スライム', hp: 100 },
            { id: 2, name: 'ゴブリン', hp: 300 },
            { id: 3, name: 'ドラゴン', hp: 500 },
        ],
    }
})