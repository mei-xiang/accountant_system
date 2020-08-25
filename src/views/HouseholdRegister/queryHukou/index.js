export const tableColumns = that => {
  return [
    {
      label: '戶號',
      prop: 'huhao'
    },
    {
      label: '客戶姓名',
      prop: 'huming'
    },
    {
      label: '英文名',
      prop: 'ds'
    },
    {
      label: '聯係電話',
      prop: 'tel'
    },
    {
      label: '證件編號',
      prop: 'bianhao'
    },
    {
      label: '出生日期',
      prop: 'date'
    },
    {
      label: '開戶日期',
      prop: 'kaihu'
    },
    {
      label: '幕後戶主',
      prop: 'muhouhuhzu'
    },
    {
      label: '職業',
      prop: 'zhiye'
    },
    {
      label: '性別',
      prop: 'sex'
    },
    {
      label: '省份',
      prop: 'shengfen'
    },
    {
      label: '地址',
      prop: 'address'
    }
  ]
}

export const formConfig = function(that) {
  return [
    {
      span: 12,
      list: [
        {
          type: 'langTransformation',
          label: '中文姓名',
          prop: 'zhongwen',
          borderRight: true
        },
        {
          type: 'text',
          label: '英文姓名',
          prop: 'enName',
          borderRight: true
        },
        {
          type: 'dateTime',
          label: '出生日期',
          prop: 'chusheng',
          borderRight: true,
          dateType: 'daterange'
        },
        {
          type: 'radioGroup',
          label: '性別',
          prop: 'sex',
          optionList: [
            {
              value: 1,
              label: '男'
            },
            {
              value: 2,
              label: '女'
            }
          ],
          borderRight: true,
          border: true
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'text',
          label: '電話',
          prop: 'pie'
        },
        {
          type: 'text',
          label: '證件編號',
          prop: 'zhengjian'
        },
        {
          type: 'dateTime',
          label: '開戶日期',
          prop: 'chusheng',
          dateType: 'daterange'
        },
        {
          type: 'select',
          label: '省份',
          prop: 'shengfen',
          optionList: [
            {
              value: 1,
              label: '天津'
            }
          ]
        }
      ]
    }
  ]
}
