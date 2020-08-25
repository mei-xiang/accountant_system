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
      selection: 'selection',
      width: '75'
    },
    {
      label: '戶號',
      prop: 'companyName',
      sortable: true,
      width: '200'
    },
    {
      label: '客戶姓名',
      prop: 'num',
      width: '150'
    },
    {
      label: '來電通知人',
      prop: 'name',
      width: '150'
    },
    {
      label: '交易客人名',
      prop: 'relationName',
      width: '150'
    },
    {
      label: '證件類型',
      prop: 'cardMoney',
      width: '200'
    },
    {
      label: '證件國籍',
      prop: 'curTotal1',
      width: '200'
    },
    {
      label: '證件編號',
      prop: 'curTotal',
      width: '200'
    },
    {
      label: 'order類型',
      prop: 'geng',
      width: '150'
    },
    {
      label: '類型',
      prop: 'remark',
      width: '150'
    },
    {
      label: '金額（萬）',
      prop: 'remark',
      width: '200'
    },
    {
      label: '已使用金額（萬）',
      prop: 'remark',
      width: '200'
    },
    {
      label: '剩餘金額（萬）',
      prop: 'remark',
      width: '200'
    },
    {
      label: '時間',
      prop: 'remark',
      width: '200'
    },
    {
      label: '到期日',
      prop: 'remark',
      width: '200'
    },
    {
      label: '備註',
      prop: 'remark',
      width: '200'
    }
  ]
}

export const bigBookColumns = that => {
  return []
}

export const formConfig = function(that) {
  return [
    {
      span: 12,
      list: [
        {
          type: 'text',
          prop: 'HouseholdNum',
          label: '戶口編號',
          borderRight: true,
          searchBtn: {
            icon: 'el-icon-search',
            changeFn(prop) {
              that.handelCheckHousehold(prop)
            }
          }
        },
        {
          type: 'text',
          prop: 'HouseholdName',
          label: '戶  主',
          borderRight: true
        },
        {
          type: 'langTransformation',
          prop: 'access',
          label: '取/存款人',
          borderRight: true
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'text',
          prop: 'cashOnHand',
          label: '結  存',
          afterTxt: '萬',
          borderRight: true
        },
        {
          type: 'radioGroup',
          prop: 'accessType',
          label: '存取類型',
          optionList: [
            {
              label: '存款',
              value: '1'
            },
            {
              label: '取款',
              value: '2'
            },
            {
              label: '轉賬',
              value: '3'
            }
          ],
          changeFn: 'accessTypeChange',
          borderRight: true
        },
        {
          type: 'text',
          prop: 'transferAccounts',
          label: '戶口編號',
          borderRight: true,
          searchBtn: {
            icon: 'el-icon-search',
            changeFn(prop) {
              that.handelCheckAccounts(prop)
            }
          }
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          type: 'plainText',
          label: '特別說明',
          fontSize: '16px',
          color: '#F54645',
          content: '只可以輸入動作者的戶號（如有）/名字/本人',
          borderRight: true
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          type: 'text',
          prop: 'cashOnHand',
          label: '金  額',
          afterTxt: '萬',
          borderRight: true
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          hidden: true,
          type: 'text',
          prop: 'accountName',
          label: '轉賬戶名',
          readOnly: true,
          borderRight: true
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          type: 'checkbox',
          prop: 'convert',
          label: '新增套現',
          afterTxt: '萬',
          optionList: [
            {
              value: '1',
              label: '新增套現'
            }
          ],
          borderRight: true
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          hidden: true,
          type: 'textarea',
          label: '信息備註--動態',
          prop: 'infoRemarksV',
          borderRight: true,
          minRows: 4
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          type: 'textarea',
          label: '信息備註',
          prop: 'infoRemarks',
          borderRight: true,
          minRows: 4
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          hidden: false,
          type: 'textarea',
          label: '短訊備註',
          prop: 'flashRemarks',
          borderRight: true,
          minRows: 4
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          hidden: true,
          type: 'textarea',
          label: '取款短訊備註',
          prop: 'flashRemarks',
          borderRight: true,
          minRows: 4
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          hidden: true,
          type: 'textarea',
          label: '存款短訊備註',
          prop: 'flashRemarks',
          borderRight: true,
          minRows: 4
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          type: 'plainText',
          label: '特別說明',
          fontSize: '16px',
          color: '#F54645',
          content: '只可以輸入動作者的內容，不可以與<取/存款人>欄位的字眼相同',
          borderRight: true
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          hidden: false,
          type: 'textarea',
          label: '內部備註',
          prop: 'insideRemarks',
          borderRight: true,
          minRows: 4
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          hidden: true,
          type: 'textarea',
          label: '取款內部備註',
          prop: 'insideRemarks',
          borderRight: true,
          minRows: 4
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          hidden: true,
          type: 'textarea',
          label: '存款內部備註',
          prop: 'insideRemarks',
          borderRight: true,
          minRows: 4
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          type: 'plainText',
          label: '特別說明',
          fontSize: '16px',
          color: '#F54645',
          content: '只可以輸入不需要重複顯示的字眼或不可以給客人知悉的內容',
          borderRight: true
        }
      ]
    }
  ]
}

export const passConfig = function(that) {
  return [
    {
      span: 24,
      list: [
        {
          type: 'text',
          prop: 'phone',
          label: '電話號碼'
        },
        {
          type: 'text',
          prop: 'phone',
          label: '證件國籍'
        },
        {
          type: 'text',
          prop: 'phone',
          label: '證件號碼'
        },
        {
          type: 'text',
          prop: 'phone',
          label: '到期日'
        },
        {
          type: 'text',
          prop: 'phone',
          label: '證件類別'
        }
      ]
    }
  ]
}

export const trendsTableFalse = [6, 9, 10, 13, 14, 8, 12, 4]

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
