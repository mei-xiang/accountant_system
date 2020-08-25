export const inputList = function(that) {
  return [
    {
      type: 'text-input',
      label: '戶號',
      span: 6,
      bind_key: 'hukouNum',
      searchBtn: {
        icon: 'el-icon-search',
        changeFn(val) {
          console.log('搜索事件觸發了', val)
        }
      }
    }
  ]
}

export const btnConfig = {
  leftLabel: '刪除戶口',
  rightBtnHidden: true
}

export const tableColumns = function(that) {
  return [
    {
      prop: 'hukouNameNum',
      label: '待刪戶口'
    },
    {
      prop: 'hukouName',
      label: '戶名'
    },
    {
      prop: 'status',
      label: '狀態'
    },
    {
      prop: 'detail',
      label: '明細',
      render(h, scope) {
        return h(
          'span',
          {
            style: { color: '#001168', cursor: 'pointer' },
            on: {
              click() {
                that.handleDetail()
              }
            }
          },
          '明細'
        )
      }
    }
  ]
}

export const pageData = {
  currentPage: 1,
  pageSize: 300,
  total: 1000
}

export const formConfig = function(that) {
  return [
    {
      span: 12,
      list: [
        {
          type: 'text',
          label: 'DS/SS',
          prop: 'ds_ss',
          afterTxt: '萬',
          borderRight: true
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'text',
          label: '批額',
          prop: 'pie',
          afterTxt: '萬'
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          type: 'text',
          label: '被批額人',
          prop: 'apie'
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'text',
          label: '未出碼糧總數',
          prop: 'pie',
          afterTxt: '萬',
          borderRight: true
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'text',
          label: '未出綜合單總數',
          prop: 'pie1',
          afterTxt: '萬'
        }
      ]
    }
  ]
}

export const detailTable = function(that) {
  return [
    {
      label: '廳名',
      prop: 'roomName'
    },
    {
      label: '已簽貸款',
      prop: 'loan'
    },
    {
      label: '大簿',
      prop: 'bigBook'
    },
    {
      label: '存碼',
      prop: 'saveMa'
    },
    {
      label: '消費',
      prop: 'xiaofei'
    },
    {
      label: '佣金',
      prop: 'yongjin'
    },
    {
      label: '應收未收手續費',
      prop: 'shouxufei'
    },
    {
      label: '津貼餘額',
      prop: 'jintie'
    }
  ]
}
