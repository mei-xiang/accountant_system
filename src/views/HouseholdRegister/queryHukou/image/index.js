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
      type: 'text-input',
      label: '戶號',
      labelWidth: '70px',
      bind_key: 'huhao'
    }
  ]
}

export const btnConfig = {
  rightBtnHidden: true,
  leftIcon: 'el-icon-search'
}

export const formConfig = function(that) {
  return [
    {
      span: 12,
      list: [
        {
          type: 'text',
          label: '戶號',
          prop: 'ds_ss',
          borderRight: true
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          type: 'textarea',
          label: '被批額人',
          prop: 'apie',
          minRows: 4
        }
      ]
    }
  ]
}
