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
    props: { id: Number, name: String , hp: Number},
    methods: {
        doAttack: function() {
            // 親コンポーネントのデータをそのまま操作することになり警告がでる
            // this.hp -= 10

            // attackを発火させ、引数に自身のidを渡す
            this.$emit('attack', this.id)
        }
    }
})
// Vue.component('comp-child', {
//     // 子が自分のイベントを起こし、$emitで親へ渡す
//     template: '<button v-on:click="handleClick">イベント発火</button>',
//     methods: {
//         // ボタンのクリックイベントのハンドラでchilds-eventを発火させる
//         handleClick: function() {
//             this.$emit('childs-event')
//         }
//     }
// })
new Vue({
    el: "#app",
    data: {
        message: "Hello",
        list: [
            { id: 1, name: 'スライム', hp: 100 },
            { id: 2, name: 'ゴブリン', hp: 300 },
            { id: 3, name: 'ドラゴン', hp: 500 },
        ],
    },
    methods: {
        parentsMethod: function() {
            alert('イベントをキャッチ！')
        },
        handleAttack: function(id) {
            // 引数のidから要素を検索
            var item = this.list.find(function(el) {
                return el.id === id
            })
            if (item !== undefined && item.hp > 0) item.hp -= 10
        }
    }
})