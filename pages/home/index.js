var util = require("../../utils/util")
var cards = require("../../utils/cards")
const app = getApp()

Page({
  data: {
    datetime: util.formatDatetime(new Date()),
    customCards: []
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        datetime: util.formatDatetime(new Date())
      });
    }, 1000);
    // 加载卡片数据
    var cardList = new Array();
    cardList[0] = new cards.AnniversaryCard("墨墨生日", new Date('2023/08/02 04:45:00'));
    cardList[1] = new cards.AnniversaryCard("蕊蕊生日", new Date('1993/06/17 00:00:00'));
    cardList[2] = new cards.AnniversaryCard("我的生日", new Date('1994/09/25 00:00:00'));
    cardList[3] = new cards.AnniversaryCard("老爸生日", new Date('1968/08/08 00:00:00'));
    cardList[4] = new cards.AnniversaryCard("老妈生日", new Date('1968/09/23 00:00:00'));
    cardList[5] = new cards.CountdownCard("距离过年", new Date('2025/01/01 00:00:00'));
    console.log(JSON.stringify(cardList))
    var list = new Array();
    for(var i=0; i<cardList.length; i++) {
      if(cardList[i].type == 1) {
        
      } 
      switch(cardList[i].type) {
        case 1: 
          list[i] = {
            type: cardList[i].type,
            title: cardList[i].title,
            date: util.formatDate(cardList[i].date),
            hasDays: util.nextAnniversaryDays(cardList[i].date)
          }
          break;
        case 3: 
            list[i] = {
              type: cardList[i].type,
              title: cardList[i].title,
              date: util.formatDate(cardList[i].date),
              lastDays: util.lastDaysOfDate(cardList[i].date)
            }
            break;
        case 5:
          list[i] = {
            type: cardList[i].type,
            title: cardList[i].title,
            date: util.formatDate(cardList[i].date),
            days: 1 // mock
          }
          break;
        default:
      }
    }
    console.log("list: " + JSON.stringify(list));
    this.setData({
      customCards: list
    });
  }
})
