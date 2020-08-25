export const searchList = that => {
  return [
    {
      type: 'text-input',
      label: '戶號',
      span: 6,
      bind_key: 'hukouNum',
      searchBtn: {
        icon: 'el-icon-search',
        changeFn(val) {}
      }
    }
  ]
}

export const tableColumns = that => {
  return [
    {
      label: '廰名',
      prop: 'hukouNum'
    },
    {
      label: '戶口編號',
      prop: 'name'
    },
    {
      label: '會員編號',
      prop: 'type'
    },
    {
      label: '中文姓名',
      prop: 'shouquan'
    },
    {
      label: '英文姓名',
      prop: 'shouquanDate'
    },
    {
      label: '備注',
      prop: 'shouquanguoqi'
    },
    {
      label: '經手人',
      prop: 'password'
    },
    {
      label: '新增時間',
      prop: 'status'
    },
    {
      label: '操作',
      render: function(h, scope) {
        return h('div', [
          h(
            'span',
            {
              style: { color: '#001168', cursor: 'pointer', marginRight: '10px' },
              on: {
                click() {
                  that.handleSetPsw(scope)
                }
              }
            },
            '編輯'
          ),
          h(
            'span',
            {
              style: { color: '#001168', cursor: 'pointer' },
              on: {
                click() {
                  that.handleSetPsw(scope)
                }
              }
            },
            '刪除'
          )
        ])
      }
    }
  ]
}

export const formConfig = that => {
  return [
    {
      span: 24,
      list: [
        {
          type: 'uploadImg',
          label: '',
          prop: 'yanzhengjieguo'
        }
      ]
    }
  ]
}
