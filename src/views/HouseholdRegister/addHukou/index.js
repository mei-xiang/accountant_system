export const formConfig = function(that) {
  return [
    // 左側
    {
      span: 12,
      list: [
        {
          type: 'text',
          prop: 'fullNo',
          label: '戶口編號',
          borderRight: true,
          searchBtn: {
            icon: 'el-icon-search',
            changeFn() {
              console.log('input 事件觸發了', that.formConfig)
            }
          }
        },
        {
          label: '英文名稱',
          type: 'text',
          prop: 'enName',
          borderRight: true
        },
        {
          label: '開戶日期',
          type: 'date',
          prop: 'today',
          borderRight: true,
          disabled: true
        },
        {
          label: '狀態',
          prop: 'status',
          borderRight: true,
          type: 'radioGroup',
          border: true,
          optionList: [
            {
              value: 1,
              label: '正常'
            },
            {
              value: 2,
              label: '禁用'
            }
          ]
        },
        {
          type: 'textGroup',
          label: '聯絡電話',
          prop: 'accountCallPhoneModels',
          borderRight: true,
          optionType: [
            {
              value: 1,
              label: '+853'
            },
            {
              value: 2,
              label: '+86'
            },
            {
              value: 3,
              label: '+86'
            }
          ],
          optionList: [
            {
              phoneMobile: 15773412136,
              phoneType: '+86',
              phoneRemark: '每天第一遍，快乐无限。'
            },
            {
              phoneMobile: 15773412126,
              phoneType: '+86',
              phoneRemark: '每天第一遍，快乐无限。'
            },
            {
              phoneMobile: 15773412116,
              phoneType: '+86',
              phoneRemark: '每天第一遍，快乐无限。'
            },
            {
              phoneMobile: 15773413136,
              phoneType: '+86',
              phoneRemark: '每天第一遍，快乐无限。'
            },
            {
              phoneMobile: 15773452136,
              phoneType: '+86',
              phoneRemark: '每天第一遍，快乐无限。'
            },
            {
              phoneMobile: 15773422136,
              phoneType: '+86',
              phoneRemark: '每天第一遍，快乐无限。'
            }
          ]
        }
      ]
    },
    // 右側
    {
      span: 12,
      list: [
        {
          type: 'langTransformation',
          prop: 'hukouName',
          label: '戶口姓名'
        },
        {
          type: 'text',
          prop: 'alias',
          label: '別名'
        },
        {
          type: 'text',
          prop: 'kaihuAddress',
          label: '開戶地點',
          disabled: true
        },
        {
          type: 'text',
          prop: 'kaihuNum',
          label: '開戶編號',
          disabled: true
        },
        {
          type: 'textGroup',
          label: '短訊號碼',
          prop: 'duanxunhaoma',
          borderRight: true,
          optionType: [
            {
              value: 1,
              label: '+853'
            },
            {
              value: 2,
              label: '+86'
            },
            {
              value: 3,
              label: '+86'
            }
          ],
          optionList: [
            {
              phoneMobile: 15773412136,
              phoneType: '+86',
              phoneRemark: '每天第一遍，快乐无限。'
            },
            {
              phoneMobile: 15773412126,
              phoneType: '+86',
              phoneRemark: '每天第一遍，快乐无限。'
            },
            {
              phoneMobile: 15773412116,
              phoneType: '+86',
              phoneRemark: '每天第一遍，快乐无限。'
            },
            {
              phoneMobile: 15773413136,
              phoneType: '+86',
              phoneRemark: '每天第一遍，快乐无限。'
            },
            {
              phoneMobile: 15773452136,
              phoneType: '+86',
              phoneRemark: '每天第一遍，快乐无限。'
            },
            {
              phoneMobile: 15773422136,
              phoneType: '+86',
              phoneRemark: '每天第一遍，快乐无限。'
            }
          ]
        }
      ]
    },
    // 短訊類型 這一排
    {
      span: 24,
      list: [
        {
          type: 'checkbox',
          prop: 'checkboxVal',
          label: '短訊類型',
          border: true,
          // fixed: true,
          optionList: [
            {
              label: '存款',
              value: 1
            },
            {
              label: '大簿',
              value: 2
            },
            {
              label: '貸款',
              value: 3
            },
            {
              label: '出糧',
              value: 4
            },
            {
              label: '上下數',
              value: 5
            },
            {
              label: 'B數',
              value: 6
            },
            {
              label: '追數',
              value: 7
            }
          ]
        }
      ]
    },
    // row 3   左
    {
      span: 12,
      list: [
        {
          label: '性別',
          prop: 'sex',
          borderRight: true,
          type: 'radioGroup',
          border: true,
          optionList: [
            {
              value: 1,
              label: '男'
            },
            {
              value: 2,
              label: '女'
            }
          ]
        },
        {
          label: '出生日期',
          prop: 'bornDate',
          type: 'date',
          borderRight: true
        }
      ]
    },
    // row 3   右边
    {
      span: 12,
      list: [
        {
          type: 'addSelect',
          label: '國籍',
          prop: 'addSelectVal',
          addFn: 'addCountry',
          delFn: 'delCountry',
          optionList: [
            {
              label: '中國',
              value: 1
            },
            {
              label: '中國台灣',
              value: 2
            },
            {
              label: '中國香港',
              value: 3
            }
          ]
        },
        {
          type: 'text',
          label: '出生地',
          prop: 'bornAddress'
        }
      ]
    },
    // row4 聯絡地址
    {
      span: 24,
      list: [
        {
          type: 'text',
          label: '聯絡地址',
          prop: 'contactAddress',
          width: '98%',
          placeholder: '請輸入聯絡地址'
        }
      ]
    },
    // row5 左邊

    {
      span: 12,
      list: [
        {
          type: 'addSelect',
          label: '語言',
          prop: 'language',
          addFn: 'addLanguage',
          delFn: 'delLanguage',
          borderRight: true,
          optionList: [
            {
              label: '中文',
              value: 1
            },
            {
              label: '英文',
              value: 2
            },
            {
              label: '日語',
              value: 3
            }
          ]
        },
        {
          type: 'addSelect',
          label: '行業種類',
          prop: 'industry',
          addFn: 'addIndustry',
          delFn: 'delIndustry',
          borderRight: true,
          optionList: [
            {
              label: '中文',
              value: 1
            },
            {
              label: '英文',
              value: 2
            },
            {
              label: '日語',
              value: 3
            }
          ]
        },
        {
          type: 'text',
          label: '介紹人',
          prop: 'introducer'
        }
      ]
    },
    // row5 右邊
    {
      span: 12,
      list: [
        {
          type: 'text',
          label: '客類',
          prop: 'guestType'
        },
        {
          type: 'addSelect',
          label: '職位',
          prop: 'job',
          addFn: 'addJob',
          delFn: 'delJob',
          optionList: [
            {
              label: '中文',
              value: 1
            },
            {
              label: '英文',
              value: 2
            },
            {
              label: '日語',
              value: 3
            }
          ]
        },
        {
          type: 'text',
          label: '擔保戶口',
          prop: 'guaranteeHukou'
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          label: 'IVR密碼',
          prop: 'ivrPassword',
          type: 'radioGroup',
          border: true,
          optionList: [
            {
              value: 1,
              label: '設置密碼'
            },
            {
              value: 2,
              label: '不需要密碼'
            }
          ]
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          label: '臨時備註',
          prop: 'tempRemark',
          type: 'textarea',
          minRows: 4
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          label: '集團備註',
          prop: 'companyRemark',
          type: 'textarea',
          minRows: 4
        }
      ]
    }
  ]
}

export const rules = {
  fullNo: { required: true, message: '請輸入戶口編號', trigger: 'change' },
  hukouName: { required: true, message: '請輸入戶口姓名', trigger: 'change' },
  bornDate: { required: true, message: '請填寫日期', trigger: 'date' },
  contactAddress: { required: true, message: '請輸入地址', trigger: 'change' },
  industry: { required: true, message: '請選擇行業種類', trigger: 'change' },
  job: { required: true, message: '請選擇職位', trigger: 'change' },
  introducer: { required: true, message: '請輸入介紹人', trigger: 'change' }
}

// passport 護照form
export const passportFromConfig = function(that) {
  return [
    {
      span: 12,
      list: [
        {
          type: 'text',
          label: '證件類別',
          prop: 'certificateType'
        },
        {
          type: 'text',
          label: '證件編號',
          prop: 'certificateNum'
        },
        {
          type: 'uploadImg',
          label: '護照1',
          prop: 'huzhaoImg1'
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'addSelect',
          label: '證件國籍',
          prop: 'certificateCountry',
          addFn: 'addCertificateCountry',
          delFn: 'delCertificateCountry',
          optionList: [
            {
              value: 1,
              label: '中國'
            },
            {
              value: 2,
              label: '泰國'
            }
          ]
        },
        {
          type: 'disabledInput',
          label: '證件有效期',
          prop: 'validityCertificate',
          disabledExplain: '不適用'
        },
        {
          type: 'uploadImg',
          label: '護照2',
          prop: 'huzhaoImg2'
        }
      ]
    }
  ]
}

export const passportRules = {}
