//设置滚动图片
export const scrollimg = ({commit}) => {
    return new Promise((resolve,reject)=>{
        const data = [
            {img:'static/images/banner1.jpg'},
            {img:'static/images/banner2.jpg'},
            {img:'static/images/banner3.jpg'},
            {img:'static/images/banner4.jpg'},
            {img:'static/images/banner5.jpg'}
        ];
        commit('loadImg',data);
    })
}

export const spikeGoods = ({commit}) => {
    return new Promise((resolve,reject) =>{
        const data = [
            {
                id:1,
                img:"static/images/1.jpg",
                info:"形象美马油滋润护手霜补水滋润防干裂 冬季手部护理保湿手霜30g 零售云精选",
                price:5.5,
                discountPrice:3.5
            },
            {
                id:2,
                img:"static/images/2.jpg",
                info:"20只蓝泡泡环保清新无异味强效杀菌蓝泡泡洁厕宝02",
                price:5.2,
                discountPrice:3.8
            },
            {
                id:3,
                img:"static/images/3.jpg",
                info:"形象美维生素E乳温和滋养补水细腻美肌身体乳液100ml",
                price:5,
                discountPrice:3.5
            },
            {
                id:4,
                img:"static/images/4.jpg",
                info:"同碗福干脆面掌心脆20包",
                price:5.9,
                discountPrice:3
            },
            {
                id:5,
                img:"static/images/5.jpg",
                info:"倩滋小黑裙香水沐浴露500ml",
                price:9.7,
                discountPrice:3.9
            },
            {
                id:6,
                img:"static/images/6.jpg",
                info:"倩保税日本Esthe Dew伊诗露化妆水500ml*2 保湿美白胎盘素爽肤水",
                price:145,
                discountPrice:3.9
            },
            {
                id:7,
                img:"static/images/7.jpg",
                info:"Puma/彪马男运动鞋法拉利赛车鞋低帮透气logo耐磨美国直邮",
                price:1288,
                discountPrice:3.9
            },
            {
                id:8,
                img:"static/images/8.png",
                info:"DAS Mivolis德国多种矿物质泡腾片 无糖型*2 海外本土原版",
                price:39.9,
                discountPrice:3.9
            }
        ];
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const spikeTime = {
            hours: 13,
            minutes: 14,
            seconds: 0
        }
        commit("spikeimg",[data,spikeTime])
    })
}