export const formConfig = function(that) {
  return [
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
          label: '中文姓名',
          type: 'langTransformation',
          prop: 'cnName',
          borderRight: true
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'text',
          prop: 'hukouName',
          label: '戶主姓名',
          borderRight: true
        },
        {
          label: '出生日期',
          prop: 'bornDate',
          type: 'date',
          borderRight: true
        }
        // {
        //   type: 'text',
        //   prop: 'kaihuAddress',
        //   label: '開戶地點',
        //   disabled: true
        // },
        // {
        //   type: 'text',
        //   prop: 'kaihuNum',
        //   label: '開戶編號',
        //   disabled: true
        // },
        // {
        //   type: 'textGroup',
        //   label: '短訊號碼',
        //   prop: 'duanxunhaoma',
        //   borderRight: true,
        //   optionType: [
        //     {
        //       value: 1,
        //       label: '+853'
        //     },
        //     {
        //       value: 2,
        //       label: '+86'
        //     },
        //     {
        //       value: 3,
        //       label: '+86'
        //     }
        //   ],
        //   optionList: [
        //     {
        //       phoneMobile: 15773412136,
        //       phoneType: '+86',
        //       phoneRemark: '每天第一遍，快乐无限。'
        //     },
        //     {
        //       phoneMobile: 15773412126,
        //       phoneType: '+86',
        //       phoneRemark: '每天第一遍，快乐无限。'
        //     },
        //     {
        //       phoneMobile: 15773412116,
        //       phoneType: '+86',
        //       phoneRemark: '每天第一遍，快乐无限。'
        //     },
        //     {
        //       phoneMobile: 15773413136,
        //       phoneType: '+86',
        //       phoneRemark: '每天第一遍，快乐无限。'
        //     },
        //     {
        //       phoneMobile: 15773452136,
        //       phoneType: '+86',
        //       phoneRemark: '每天第一遍，快乐无限。'
        //     },
        //     {
        //       phoneMobile: 15773422136,
        //       phoneType: '+86',
        //       phoneRemark: '每天第一遍，快乐无限。'
        // }
        //   ]
        // }
      ]
    },
    {
      span: 24,
      list: [
        {
          type: 'text',
          label: '聯絡地址',
          prop: 'contactAddress',
          width: '98%',
          placeholder: '請輸入聯絡地址',
          borderRight: true
        }
      ]
    },
    {
      span: 24,
      list: [
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
    {
      span: 24,
      list: [
        {
          type: 'checkbox',
          prop: 'checkboxVal',
          label: '相關類型',
          border: true,
          borderRight: true,
          // fixed: true,
          optionList: [
            {
              label: '全選',
              value: 1
            },
            {
              label: '賬房',
              value: 2
            },
            {
              label: '場面',
              value: 3
            },
            {
              label: '飛房',
              value: 4
            }
          ]
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          label: '職業',
          prop: 'job',
          borderRight: true,
          type: 'text',
          width: '97%'
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          label: '備註',
          prop: 'tempRemark',
          type: 'textarea',
          minRows: 4,
          borderRight: true
        }
      ]
    }
  ]
}

export const rules = {
  fullNo: { required: true, message: '請輸入戶口編號', trigger: 'change' },
  cnName: { required: true, message: '請輸入戶口姓名', trigger: 'change' },
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
