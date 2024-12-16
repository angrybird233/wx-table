Component({
  properties: {
    width: {  // 宽度
      type: String,
      value: '750rpx'
    },
    height: {  // 表格高度
      type: String,
      value: 'auto'
    },
    list: {
      type: Array,
      value: [],
    }, // 数据
    header: {
      type: Array,
      value: []
    }, // 表头
    headerBgColor: {
      type: String,
      value: '#43CD80',
    }, // 表头背景色
    stripe: {
      type: Boolean,
      value: true,
    }, // 是否斑马纹
    showOperateColumn: {
      type: Boolean,
      value: true,
    }, // 是否显示操作列
    operateColumnWidth: {
      type: Number,
      value: 100,
    }, // 操作列宽度
    operateColumnLabel: {
      type: String,
      value: '操作',
    }, // 操作列标题
    align: {
      type: String,
      value: 'center',
    }, // 表格对齐方式

  },
  data: {
    totalWidth: 0
  },
  lifetimes: {
    attached: function() {},
  },
  methods: {
    bindOperate(e: any) {
      const { item,index } = e.currentTarget.dataset;
      this.triggerEvent('operate', { item,index  })
    },
  },
})
