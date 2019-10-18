//逻辑文件
export default {
  name: 'cuskeyboard',
  data() {
    return {
      lists: [{
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
        }
      ],
      num: [],
      isEnd: false,
      cssStyle: {
        'display': 'block'
      },
      active: null,

    }
  },
  props: ['value', 'end', 'pattern', 'type'],
  computed: {},
  watch: {
    value(val) {
      this.init();
    },
    end(val) {
      this.init();
    },
    pattern(val) {
      this.init();
    },
    type(val) {

    }
  },
  methods: {
    choosekey(item, index) {
      let _this = this;
      _this.active = index;

      setTimeout(() => {
        _this.active = null;
      }, 100);

      if (item.value == 12) {
        _this.$emit('closekeyboard', _this.num);
      } else {
        if (_this.type) {
          if (item.value != 10) {
            _this.num.push(item.label);
            if (!_this.checkNum()) {
              let arr = _this.num;
              let len = arr.length;
              arr.splice(len - 1, 1);
              _this.num = arr;
              return;
            }
            _this.$emit('changekey', _this.num);
          }
        } else {
          if (_this.num.length < 10) {  // 最多十位数，可以根据需要修改
            _this.num.push(item.label);
          }
          if (!_this.checkNum()) {
            let arr = _this.num;
            let len = arr.length;
            arr.splice(len - 1, 1);
            _this.num = arr;
            return;
          }
          _this.$emit('changekey', _this.num);
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
      let _this = this;
      _this.active = -1;

      setTimeout(() => {
        _this.active = null;
      }, 100);
      //截取数组最后一位
      if (_this.num.length > 0) {
        let num = _this.num.filter(function (ele, idx, arr) {
          return arr.length - 1 !== idx;
        });
        _this.num = num;
      } else {
        _this.num = [];
      }
      _this.$emit('changekey', _this.num);
    },
    makesure() {
      event.stopPropagation();
      this.$emit('makesure', this.num);
    },

  },
  mounted() {}
}
