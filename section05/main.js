var app = new Vue({
    el: '#app',
    data: {
      list: ['りんご', 'ばなな', 'いちご'],
      message: '初期メッセージ',
      show: true,
    },
    methods: {
      // v-on:click=で使用するメソッドを指定
      handleClick: function(event) {
        alert(event.target) // [object HTMLButtonElement]
      }
    }
})