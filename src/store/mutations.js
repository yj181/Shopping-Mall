// 获取滚动图片
export const loadImg = (state, data) => {
    state.goodsList = data;
};

export const spikeimg = (state, data) =>{
    state.spikeList = data[0];
    state.countdown = data[1];
}

// 倒计时
export const splikeTime = state => {
    state.countdown.seconds--;
    if (state.countdown.seconds === -1) {
      state.countdown.seconds = 59;
      state.countdown.minutes--;
      if (state.countdown.minutes === -1) {
        state.countdown.minutes = 59;
        state.countdown.hours--;
      }
    }
  };

  export const quantityCount = (state,data) =>{
    if(Array.isArray(data)){
      state.quantity = data.length;
    }else{
      state.quantity = data
    }
  }

  export const handlePay = (state,data) =>{
    state.shoppingList.push(data) 
  }