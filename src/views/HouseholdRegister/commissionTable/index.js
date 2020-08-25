export const tableColumns = that => {
  return [
    {
      label: '前綴',
      prop: 'prefix'
    },
    {
      label: '後綴',
      prop: 'suffix'
    },
    {
      label: '佣金',
      prop: 'type'
    },
    {
      label: '津貼',
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
                that.handleDel(scope)
              }
            }
          },
          '刪除'
        )
      }
    }
  ]
}
