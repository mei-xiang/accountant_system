export const tableColumns = that => {
  return [
    {
      label: '批額呼號',
      prop: 'prefix'
    },
    {
      label: '批額人',
      prop: 'suffix'
    },
    {
      label: '批額（萬）',
      prop: 'type'
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
    },
    {
      label: '編輯',
      render: function(h, scope) {
        return h(
          'span',
          {
            style: { color: '#001168', cursor: 'pointer' },

            on: {
              click() {
                that.handleEdit(scope)
              }
            }
          },
          '編輯'
        )
      }
    },
    {
      label: '刪除',
      render: function(h, scope) {
        return h(
          'span',
          {
            style: { color: '#001168', cursor: 'pointer' },

            on: {
              click() {
                that.handleEdit(scope)
              }
            }
          },
          '刪除'
        )
      }
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
          label: 'DS/SS交付廰',
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
    },
    {
      span: 24,
      list: [
        {
          type: 'textarea',
          label: '備注',
          minRows: 4
        }
      ]
    }
  ]
}
