export const tableColumns = that => {
  return [
    {
      label: '批額戶號',
      prop: 'prefix'
    },
    {
      label: '批額人',
      prop: 'suffix'
    },
    {
      label: '廰會',
      prop: 'type'
    },
    {
      label: '共用額(萬)',
      prop: 'shouquan'
    },
    {
      label: '批額日期',
      prop: 'shouquan'
    },
    {
      label: '跟進人',
      prop: 'shouquan'
    },
    {
      label: '備注',
      prop: 'shouquan'
    }
  ]
}
export const formConfig = function(that) {
  return [
    {
      span: 12,
      list: [
        {
          type: 'text',
          prop: 'fullNo',
          label: '批額戶號',
          borderRight: true
        },
        {
          type: 'text',
          prop: 'piE',
          label: '單廰額',
          borderRight: true,
          afterTxt: '萬'
        },
        {
          type: 'date',
          prop: 'pierenshu',
          label: '批額日期'
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'text',
          prop: 'hukouName',
          label: '批額人'
        },
        {
          type: 'addSelect',
          prop: 'pierenshu',
          label: '跟進人'
        },
        {
          type: 'text',
          prop: 'pierenshu',
          label: '備注'
        }
      ]
    }
  ]
}
