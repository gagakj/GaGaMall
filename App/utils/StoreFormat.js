'use strict';

//进行格式化商家的商品数据-满足section进行使用
export function formatStore(storeData){
        let goodTagMap = []
        storeData.food_spu_tags.forEach(spu_tag => {
          spu_tag.spus.forEach(spu => {
              if (!goodTagMap[spu_tag.name]) {
                  goodTagMap[spu_tag.name] = []
              }
              goodTagMap[spu_tag.name].push(spu)      
          })
       })
       return goodTagMap;
}

export function calculateGood(storeData){
        let value = 0;
        storeData.food_spu_tags.forEach(spu_tag => {
          spu_tag.spus.forEach(spu => {
              value ++ ;    
          })
       })
       return value;
}

