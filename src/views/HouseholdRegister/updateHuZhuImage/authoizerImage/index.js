export const formConfig = function(that) {
  return [
    {
      span: 12,
      list: [
        {
          type: 'text',
          prop: 'fullNo',
          label: '戶口編號',
          borderRight: true,
          searchBtn: {
            icon: 'el-icon-search',
            changeFn() {
              console.log('input 事件觸發了', that.formConfig)
            }
          }
        }
      ]
    },

    {
      span: 12,
      list: [
        {
          type: 'langTransformation',
          prop: 'hukouName',
          label: '戶主姓名'
        }
      ]
    }
  ]
}

// passport 護照form
export const passportFromConfig = function(that) {
  return [
    {
      span: 12,
      list: [
        {
          type: 'uploadImg',
          label: '護照1',
          prop: 'huzhaoImg1'
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'uploadImg',
          label: '護照2',
          prop: 'huzhaoImg2'
        }
      ]
    }
  ]
}
