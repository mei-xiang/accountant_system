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
      prop: 'hukouNum'
    },
    {
      label: '戶號',
      prop: 'name'
    },
    {
      label: '戶名',
      prop: 'type'
    },
    {
      label: '狀態',
      prop: 'status'
    }
  ]
}
