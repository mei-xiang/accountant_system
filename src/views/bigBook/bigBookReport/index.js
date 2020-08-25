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
      label: '存款人',
      prop: 'relationName'
    },
    {
      label: '現結存(萬)',
      prop: 'cardMoney'
    },
    {
      label: '最後取/存款日',
      prop: 'curTotal1'
    },
    {
      label: '最後存款金額(萬)',
      prop: 'curTotal'
    },
    {
      label: '備注',
      prop: 'geng'
    },
    {
      label: '内部備注',
      prop: 'remark'
    }
  ]
}
