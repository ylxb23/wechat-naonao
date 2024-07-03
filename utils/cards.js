
// 卡片类型
const EMPTY_CARD = 0;             // 空卡片
const ANNIVERSARY_CARD = 1;       // 纪念日卡片
const ANNIVERSARY_LIST_CARD = 2;  // 纪念日列表卡片
const COUNTDOWN_CARD = 3;         // 倒计时卡片
const COUNTDOWN_LIST_CARD = 4;    // 倒计时列表卡片
const COUNTDAYS_CARD = 5;         // 计算天数卡片
const TODO_CARD = 6;              // 代办卡片
const TODO_LIST_CARD = 7;         // 代办列表卡片
const PROGRESS_CARD = 8;          // 进度卡片


class AbsCard {
  constructor(_type) {
    this.type = _type;
  }
}

class AnniversaryCard extends AbsCard {
  constructor(_title, _date) {
    super(ANNIVERSARY_CARD)
    this.title = _title;
    this.date = _date;
  }
}

class CountdownCard extends AbsCard {
  constructor(_title, _date) {
    super(COUNTDOWN_CARD)
    this.title = _title;
    this.date = _date;
  }
}

module.exports = {
  AbsCard, AnniversaryCard, CountdownCard
}