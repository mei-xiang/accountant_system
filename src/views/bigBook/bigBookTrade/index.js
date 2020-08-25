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
      prop: 'companyName',
      sortable: true
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

export const formConfig = function(that) {
  return [
    {
      span: 24,
      list: [
        {
          type: 'dateTime',
          label: '日  期',
          changeFn: 'changeFn'
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'date',
          label: '截更日期',
          prop: 'staffName',
          borderRight: true
        },
        {
          type: 'text',
          label: '戶口編號',
          prop: 'hukouNumber',
          borderRight: true
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'select',
          prop: 'gengshu',
          label: '更  數',
          optionList: [{
            key: '1',
            label: '--請選擇--',
            value: '1'
          }, {
            key: '2',
            label: '早',
            value: '2'
          }, {
            key: '3',
            label: '中',
            value: '3'
          }, {
            key: '4',
            label: '夜',
            value: '4'
          }],
          labelWidth: '150px'
        },
        {
          type: 'text',
          prop: 'jiaoyi',
          label: '最近交易條數',
          labelWidth: '150px'
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          type: 'langTransformation',
          label: '存款人',
          prop: 'cunkuan'
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'select',
          label: '廳名',
          prop: 'tingming',
          optionList: [{
            key: '1',
            label: '--請選擇--',
            value: '1'
          }, {
            key: '2',
            label: '新葡京廣東貴賓會（2）',
            value: '2'
          }, {
            key: '3',
            label: '新濠廣東貴賓會（1）',
            value: '3'
          }],
          filterable: true,
          width: '250px'
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'select',
          label: '交易類型',
          prop: 'cunkuan',
          optionList: [{
            key: '1',
            label: '--請選擇--',
            value: '1'
          }, {
            key: '2',
            label: '存款',
            value: '2'
          }, {
            key: '3',
            label: '取款',
            value: '3'
          }]
        }
      ]
    }
  ]
}

export const rules = {
  staffNo: { required: true, message: '請輸入員工編號', trigger: 'change' },
  staffName: { required: true, message: '請輸入員工姓名', trigger: 'change' },
  jobTime: { required: true, message: '請填寫入職時間', trigger: 'date' },
  permission: { required: true, message: '請選擇菜單權限', trigger: 'change' },
  addressList: { required: true, message: '請選擇工作地點', trigger: 'blur' },
  certificateNum: {
    required: true,
    message: '請填寫證件編號',
    trigger: 'blur'
  },
  introducer: { required: true, message: '請輸入介紹人', trigger: 'change' }
}
