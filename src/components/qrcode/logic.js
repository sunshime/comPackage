import QRcode from 'qrcodejs2';
let qrcode = '';
export default {
  name: 'qrcode',
  data() {
    return {

    }
  },
  computed: {
    name: {
      get() {
        let sid = 'qrcode';
        if (this.sid) {
          sid = this.sid;
        }
        return sid;
      },
      set(value) {
        this.name = value;
      }
    },
    value: {
      get() {
        let value = '123123';
        if (this.text) {
          value = this.text;
        }
        return value;
      },
      set(value) {
        this.value = value;
      }
    },
    qrwidth() {
      let width = 0;
      if (this.swidth) {
        width = this.swidth; //370*320/(window.innerWidth)/20
      } else {
        width = 5.33; //250*320/(window.innerWidth)/20
      }
      return width;
    }
  },
  props: {
    sid: {
      type: String
    },
    text: {
      type: String
    },
    swidth: {
      type: Number
    }
  },
  methods: {
    qrcode() {
      console.log('qrcode---------->', qrcode);
      if (qrcode) {
        // qrcode.clear();
        // qrcode.makeCode('new content');
        qrcode = null;
      } else {
        qrcode = new QRcode(this.name, {
          // width: this.qrwidth * 20 * (window.innerWidth) / 320,
          // height: this.qrwidth * 20 * (window.innerWidth) / 320, // 高度  ,250*320/(window.innerWidth)/20
          width: this.qrwidth * 20 * (window.innerWidth) / 500,
          height: this.qrwidth * 20 * (window.innerWidth) / 500,
          text: this.value, // 二维码内容
          image: '',
          correctLevel: QRcode.CorrectLevel.L

        })
      }

      console.log(qrcode)
    }
  },
  destroyed() {
    // qrcode.clear();
    qrcode = null;
  },
  mounted() {
    this.qrcode();
  }
}
