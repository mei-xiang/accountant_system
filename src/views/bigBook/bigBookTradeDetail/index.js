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
      label: '戶口',
      prop: 'companyName',
      fixed: 'left',
      width: '100'
    },
    {
      label: '合計',
      prop: 'num',
      fixed: 'left',
      width: '200'
    },
    {
      label: '新葡京廣東貴賓會',
      prop: 'name',
      width: '200'
    },
    {
      label: '新葡京廣東貴賓會（2）',
      prop: 'relationName',
      width: '200'
    },
    {
      label: '新葡京廣東貴賓會B（2）',
      prop: 'cardMoney',
      width: '200'
    },
    {
      label: '新濠廣東貴賓會',
      prop: 'curTotal1',
      width: '200'
    },
    {
      label: '新濠廣東貴賓會（1）',
      prop: 'curTotal',
      width: '200'
    },
    {
      label: '新濠廣東貴賓會（1）',
      prop: 'geng',
      width: '200'
    },
    {
      label: '新濠廣東貴賓會（1）',
      prop: 'remark',
      width: '200'
    },
    {
      label: '新濠廣東貴賓會（1）',
      prop: 'interRemark',
      width: '200'
    },
    {
      label: '經手人',
      prop: 'employName',
      width: '200'
    },
    {
      label: '入數時間',
      prop: 'insertTime',
      width: '200'
    },
    {
      label: '小票打印',
      render: function(h, scope) {
        return h(
          'span',
          {
            style: { color: '#001168', cursor: 'pointer' },
            on: {
              click() {
                that.handleSetPsw(scope)
              }
            }
          },
          '小票打印'
        )
      },
      width: '200'
    }
  ]
}
