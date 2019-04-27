var css = new Vue({
    el: '#css',
    data: {
        // まとめて渡したいデータはオブジェクトとして渡すことができる
        classObject: {
            isChild: true,
            isActive: true,
        },
        // isChild: true,
        // isActive: true,
        styleObject: {
            color: 'red',
            backgroundColor: 'lightgray',
        },
        // textColor: 'red',
        // bgColor: 'lightgray',
        item: {
            id: 1,
            alt: '商品1画像',
            width: 100,
            height: 200,
        },
        radius: 50
    }
})