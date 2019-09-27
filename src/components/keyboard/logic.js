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
      keyword:''
    }
  },
  /**
   * value  表示通过自定义键盘输入的值
   */
  props:['value','end','pattern','type'],
  methods: {
    choosekey(item) {
      console.log('item----->',item);
    },
    rebacking() {

    },
    makesure() {

    }
  }
}
