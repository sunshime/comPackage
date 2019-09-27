((window) => {
  var fn = {};
  // 计算高度
  fn.adapter = function (obj) {
      let arr = [];
      let height = 0;
      for (let keys in obj) {
        let length = 0;
        try {
          length = document.getElementById(obj[keys]).offsetHeight;
          height = height + length;
          console.log('counts----->', keys, obj[keys], length)
        } catch (e) {
          console.log('高度获取出错了', e);
        }
        arr.push(length)
      }
      return height;
    },
    //获取当天所在的年份
    fn.getYear = function () {
      let mydate = new Date();
      let value = mydate.getFullYear();
      return value;
    }

  //获取当天所在的月数
  fn.getMonth = function () {
    let mydate = new Date();
    let value = mydate.getMonth() + 1;
    return value;
  }

  //获取当天所在的号数
  fn.getDate = function () {
    let mydate = new Date();
    let value = mydate.getDate();
    return value;
  }

  //获取天数
  fn.getDates = function (year, month) {
    let dates = new Date(year, month, 0).getDate();
    return dates;
  }

  //日期格式转化1  2018,1->2018/01
  fn.formatDating = function (year, month, date) {
    month = fn.addZero(month);
    if (date) {
      date = fn.addZero(date);
    }
    return year + '/' + month + (date ? '/' + date : '');
  }

  //日期格式转化2  2018,1->2018年01
  fn.formatDating2 = function (year, month, date) {

    let mon = month.toString();
    if (mon.length < 2 && month < 10) {
      month = fn.addZero(month);
    }
    if (date) {
      let dat = date.toString();
      if (dat.length < 2 && date < 10) {
        date = fn.addZero(date);
      }
    }
    return year + '年' + month + '月' + (date ? date + '日' : '');
  }

  //年份
  fn.getyears = function () {
    let arr = [];
    for (var i = 2000; i < 2030; i++) {
      arr.push({
        name: i,
        value: i
      })
    }
    return arr;
  }

  //月份
  fn.getmonths = function () {
    let arr = [];
    for (var i = 1; i <= 12; i++) {
      arr.push({
        name: i,
        value: i
      })
    }
    return arr;
  }

  //日期格式定向转化  2018/01->2018年01月，2018/01/01->2018年01月01日
  fn.cToe = function (str, type, ind) {
    let restr = ''
    str = str.toString();
    if (ind) {
      type = type == -1 || type == 2 ? type : type + 1
    }

    if (type == 0 || type == 3) {
      //日+自定义   2018/01/01
      restr = str.substring(0, 4) + '/' + str.substring(5, 7) + '/' + str.substring(8, 10) + '';
    } else if (type == 1) {
      //月     2018/01
      restr = str.substring(0, 4) + '/' + str.substring(5, 7) + '';
    } else if (type == 2) {
      //季度   2018 第一季度
      restr = str.substring(0, 4) + ' ' + str.substring(5, str.length);
    } else if (type == -1) {
      //年份
      str = str.toString();
      restr = str.substring(0, str.length);
    }
    return restr;
  }
  window.com = fn;
})(window);
