export const tableColumns = that => {
  return [
    {
      label: 'DS/SS類型',
      prop: 'prefix'
    },
    {
      label: '金額（萬）',
      prop: 'suffix'
    },
    {
      label: '日期',
      prop: 'type'
    },
    {
      label: '備注',
      prop: 'shouquan'
    },
    {
      label: 'DS/SS交付聼',
      prop: 'shouquan'
    },
    {
      label: '經辦人',
      prop: 'shouquan'
    },
    {
      label: '最後修改時間',
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
    }
  ]
}
export const formConfig = function(that) {
  return [
    {
      span: 12,
      list: [
        {
          type: 'select',
          prop: 'fullNo',
          label: 'DS/SS類型',
          borderRight: true,
          optionList: [
            {
              label: '請選擇',
              value: 1
            }
          ]
        },
        {
          type: 'select',
          prop: 'piE',
          label: 'DS/SS交付廰',
          borderRight: true,
          optionList: [
            {
              label: '請選擇',
              value: 1
            }
          ]
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'text',
          prop: 'hukouName',
          label: '金額'
        },
        {
          type: 'date',
          prop: 'pierenshu',
          label: '日期'
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
