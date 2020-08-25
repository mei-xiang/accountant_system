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
      label: '戶號',
      prop: 'hukouNum'
    },
    {
      label: '客戶姓名',
      prop: 'name'
    },
    {
      label: '類型',
      prop: 'type'
    },
    {
      label: '授權',
      prop: 'shouquan'
    },
    {
      label: '授權過期日期',
      prop: 'shouquanDate'
    },
    {
      label: '授權過期',
      prop: 'shouquanguoqi'
    },
    {
      label: '密碼設定',
      prop: 'password'
    },
    {
      label: '狀態',
      prop: 'status'
    },
    {
      label: '設置密碼',
      render: function(h, scope) {
        return h('i', {
          style: { color: '#001168', cursor: 'pointer' },
          class: ['el-icon-edit'],
          on: {
            click() {
              that.handleSetPsw(scope)
            }
          }
        })
      }
    }
  ]
}

export const formConfig = that => {
  return [
    {
      span: 12,
      list: [
        {
          type: 'text',
          label: '戶號',
          prop: 'huhao',
          borderRight: true,
          readOnly: true
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'text',
          label: '客戶姓名',
          prop: 'name',
          readOnly: true
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'text',
          label: '授權',
          prop: 'shouquan',
          borderRight: true,
          width: '97%',
          readOnly: true
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'text',
          label: '授權過期',
          prop: 'shouquanguoqi',
          width: '97%',
          readOnly: true
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          type: 'text',
          label: '戶主電話',
          prop: 'tel',
          width: '97%',
          readOnly: true
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          type: 'text',
          label: '驗證結果',
          prop: 'yanzhengjieguo',
          width: '97%',
          readOnly: true
        }
      ]
    }
  ]
}
