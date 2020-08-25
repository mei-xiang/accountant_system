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
      label: 'Line',
      prop: 'companyName'
    },
    {
      label: '更利率（%）',
      prop: 'num'
    },
    {
      label: '類型',
      prop: 'name'
    },
    {
      label: '編輯',
      render: function(h, scope) {
        return h('span', {
          style: { color: '#001168', cursor: 'pointer' },
          on: {
            click() {
              that.handleEdit(scope)
            }
          }
        }, '編輯')
      }
    },
    {
      label: '刪除',
      render: function(h, scope) {
        return h('span', {
          style: { color: '#001168', cursor: 'pointer' },
          on: {
            click() {
              that.handleDelete(scope)
            }
          }
        }, '刪除')
      }
    }
  ]
}
