export const searchList = function() {
  return [
    {
      type: 'select-input',
      label: 'LINE',
      span: 8,
      inputWidth: '200',
      bind_key: 'lineVal',
      optionList: [
        {
          value: 1,
          label: 'AA'
        },
        {
          value: 2,
          label: 'bb'
        },
        {
          value: 3,
          label: 'cc'
        }
      ]
    },
    {
      span: 8,
      type: 'rangeInput',
      label: '戶口範圍',
      labelWidth: '70px',
      bind_key: 'randerVal'
    }
  ]
}

export const btnConfig = {
  rightBtnHidden: true,
  leftIcon: 'el-icon-search'
}

export const tableColumns = that => {
  return [
    {
      label: '廰名',
      prop: 'companyName'
    },
    {
      label: '戶號',
      prop: 'num'
    },
    {
      label: '戶名',
      prop: 'name'
    },
    {
      label: '取/存款人',
      prop: 'relationName'
    },
    {
      label: '取/存款(萬)',
      prop: 'cardMoney'
    },
    {
      label: '廳結存(萬)',
      prop: 'curTotal1'
    },
    {
      label: '客人結存(萬)',
      prop: 'curTotal'
    },
    {
      label: '更',
      prop: 'geng'
    },
    {
      label: '備注',
      prop: 'remark'
    },
    {
      label: '内部備注',
      prop: 'interRemark'
    },
    {
      label: '經手人',
      prop: 'employName'
    },
    {
      label: '入數時間',
      prop: 'insertTime'
    },
    {
      label: '小票打印',
      render: function(h, scope) {
        return h('span', {
          style: { color: '#001168', cursor: 'pointer' },
          on: {
            click() {
              that.handleSetPsw(scope)
            }
          }
        }, '小票打印')
      }
    }
  ]
}
