export default {
  name: 'keyboard',
  data() {
    return {
      cssStyle: {
        'display': 'block'
      },
      num: [],
      isEnd: false,
      keyList: [{
        value: 1,
        label: '1'
      }, {
        value: 2,
        label: '2'
      }, {
        value: 3,
        label: '3'
      }, {
        value: 4,
        label: '4'
      }, {
        value: 5,
        label: '5'
      }, {
        value: 6,
        label: '6'
      }, {
        value: 7,
        label: '7'
      }, {
        value: 8,
        label: '8'
      }, {
        value: 9,
        label: '9'
      }, {
        value: 10,
        label: '0'
      }, {
        value: 11,
        label: '.'
      }],
      keyword: ''
    }
  },
  /**
   * value  表示通过自定义键盘输入的值
   */
  props: ['value', 'end', 'pattern', 'type'],
  methods: {
    choosekey(item) {
      console.log('choosekey--------1111------>', item);
      if (item.value == 12) {
        this.$emit('closekeyboard', this.num);
      } else {
        if (this.type) {
          if (item.value != 10) {
            this.num.push(item.label);
            if (!this.checkNum()) {
              let arr = this.num;
              let len = arr.length;
              arr.splice(len - 1, 1);
              this.num = arr;
              return;
            }
            this.$emit('changekey', this.num);
          }
        } else {
          if (this.num.length < 6) {
            this.num.push(item.label);
          }
          //   console.log('this.num--->',this.num)
          if (!this.checkNum()) {
            let arr = this.num;
            let len = arr.length;
            arr.splice(len - 1, 1);
            this.num = arr;
            return;
          }
          this.$emit('changekey', this.num);
        }
      }
    },
    checkNum() {
      //正常数字校验
      let str = /^(\-)?\d+(\.\d{1,3})?$/;
      let number = (this.num.join('')) + '0';
      let status = true;
      status = str.test(number);
      console.log('checkNume', status);
      return status;
    },
    init() {
      if (this.value) {
        let value = this.value.toString();
        this.num = value.split('');
      } else {
        this.num = [];
      }
      this.isEnd = this.end;
      this.cssStyle = this.pattern;
    },
    rebacking() {
      //截取数组最后一位
      if (this.num.length > 0) {
        let num = this.num.filter(function (ele, idx, arr) {
          return arr.length - 1 !== idx;
        });
        this.num = num;
      } else {
        this.num = [];
      }
      this.$emit('changekey', this.num);
    },
    nexting() {
      this.$emit('nexting', this.isEnd);
    },
    makesure() {
      event.stopPropagation();
      this.$emit('makesure', this.num);
    }
  }
}
