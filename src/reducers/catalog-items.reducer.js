 const itemsDefaultState = [
    {
        title: 'Чарли',
        description: 'очень длинное описание',
        images: [
            'https://sun9-7.userapi.com/c840538/v840538188/335bb/CEeTQvLrVs4.jpg',
            'https://sun1-1.userapi.com/c840538/v840538188/335c5/O48qTUz_glU.jpg',
            'https://sun1-1.userapi.com/c840538/v840538188/335cf/GVyiWMNCTB4.jpg'
        ],
        price: 1111,
        size: 'M',
        category: ['bear'],
        tag: ['bear'],
        id: [1]

    },
    {

        title: 'Лис',
        description: 'очень длинное описание',
        images: ['https://sun9-7.userapi.com/c840538/v840538188/33601/Az8fwVVCKBk.jpg',
            'https://sun1-1.userapi.com/c840538/v840538188/33695/U8DnnMcuF5E.jpg',
            'https://sun1-1.userapi.com/c840538/v840538188/33629/y-BgSGrP0fs.jpg'],
        price: 43433,
        category: ['toys'],
        tag: ['rabbit'],
        id: [2]

    },
    {

        title: 'Еще медведь',
        description: 'очень длинное описание',
        images: ['https://pp.userapi.com/c639630/v639630653/9216/LDvJW0E3g24.jpg',
            'https://pp.userapi.com/c639630/v639630653/9220/rEyhqIPnxmU.jpg',
            'https://pp.userapi.com/c639630/v639630653/922a/UKjsVQanpA0.jpg'],
        price: 77777,
        size: 'S',
        category: ['bears'],
        tag: ['bear'],
        id: [3]

    }
]

 export default function (state = itemsDefaultState, action) {
     switch (action.type) {
         default:
             return state
     }
 }