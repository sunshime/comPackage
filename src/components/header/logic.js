//逻辑文件
export default {
    name: '',
    data() {
        return {}
    },
    props: {
        name: String,
        type: Number,
        color: {
            type: String,
            default: '#fff'
        }
    },
    methods: {
        backing() {
            var _this = this;
            let timer = setTimeout(function () {
                _this.$emit('backing');
                clearTimeout(timer);
            },500);
        },
    },
    mounted() {
        let div = ['header'];
        let height = com.adapter(div);
        this.$emit('height', height);
    }
}
