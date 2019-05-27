Vue.component('my-component', {
    // テンプレートのルート要素は単一である必要がある
    // 複数にわたるときは全体を一意の要素で囲む
    template: '<div><span>{{ message1 }}</span><span>{{ message2 }}</span></div>',
    // データはオブジェクトを返す関数である必要がある
    data: function() {
        return {
            message1: 'Hello Vue.js!',
            message2: 'konnitiha Vue.js'
        }
    },
})

// var myComponent = {
//     template: '<p>MyComponent</p>'
// }
// componentはルートインスタンスが作成される前に定義する必要がある
new Vue({
    el: "#app",
    // components: {
    //     // <my-component>がルートで使用可能になる。
    //     'my-component': myComponent,
    // }
})