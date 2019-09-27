import Jquery from '../../../static/js/jquery-3.3.1.min';

let timer = '';
export default {
  name: 'search',
  data() {
    return {
      keywords: ''
    }
  },
  props: {
    placeholder: String
  },
  watch: {
    placeholder(val) {}
  },
  methods: {
    // 计算搜索框的高度
    getHeight() {
      let div = ['searchblock'];
      let height = com.adapter(div);
      console.log('height---->', height)
      this.$emit('height', height);
    },
    // 拿到输入的内容
    // getInputText(e){
    //     let _this = this;
    //     console.log('e----->',e);
    //     if(timer){
    //         clearTimeout(timer);
    //     }
    //     timer = setTimeout(function(){
    //         let value = Jquery('#search').val();
    //         console.log(value,'----------',e.data)
    //         _this.$emit('getValue',value);
    //     })
    // },
    // 清空输入框内容
    clearText() {
      console.log('清空输入框内容')
      let _this = this;
      let input = document.getElementById('search');
      input.focus();
      Jquery('#search').val('');
      _this.$emit('clearText');
      _this.$emit('getValue', '');
    },
    submit() {
      let _this = this;
      let keywords = ''
      Jquery('#search').on('submit', function () {
        return false;
      });

      //监听回车
      Jquery('#input').keydown(function (event) {
        console.log('键盘keycode', event.keyCode);
        if (event.keyCode == 13) {
          var input = document.getElementById("input");
          input.blur(); // 按回车键时将键盘隐藏
          keywords = (_this.keywords);
          // keywords=_this.keywords;
          console.log('提交搜索====>', keywords);
          if (!keywords || keywords == undefined) {
            keywords = '';
          }
          _this.$emit('submit', keywords);
        }
      });
    }
  },
  mounted() {
    this.getHeight();
    this.submit();
  },
}
