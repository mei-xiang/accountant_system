export const formConfig = function(that) {
  return [
    {
      span: 24,
      list: [
        {
          type: 'textGroup',
          label: '短訊電話',
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
          type: 'radioGroup',
          prop: 'pierenshu',
          label: '利率',
          border: true,
          borderRight: true,
          optionList: [
            {
              value: 1,
              label: '轉碼'
            },
            {
              value: 2,
              label: '積分'
            }
          ]
        }
      ]
    }
  ]
}
