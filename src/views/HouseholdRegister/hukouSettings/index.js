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
          type: 'text',
          prop: 'piE',
          label: '批額總數',
          borderRight: true,
          afterTxt: '萬'
        },
        {
          type: 'text',
          prop: 'piE',
          label: '單廰額',
          borderRight: true,
          afterTxt: '萬'
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'text',
          prop: 'hukouName',
          label: '中文姓名'
        },
        {
          type: 'text',
          prop: 'pierenshu',
          label: '批額人數'
        },
        {
          type: 'text',
          prop: 'dsss',
          label: 'DS/SS',
          afterTxt: '萬'
        }
      ]
    }
  ]
}

export const formConfigRemark = function(that) {
  return [
    {
      span: 24,
      list: [
        {
          type: 'textarea',
          prop: 'fullNo',
          label: '默認值',
          minRows: 4
        }
      ]
    }
  ]
}
// passport 護照form
export const passportFromConfig = function(that) {
  return [
    {
      span: 12,
      list: [
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
          type: 'uploadImg',
          label: '護照2',
          prop: 'huzhaoImg2'
        }
      ]
    }
  ]
}

export const titleFn = function(that) {
  return `if (this.whichRemarkModal === 1) {
    return '特別備注'
  } else if (this.whichRemarkModal === 2) {
    return '批額備注'
  } else if (this.whichRemarkModal === 3) {
    return '大簿備注'
  } else if (this.whichRemarkModal === 4) {
    return '信息備注'
  } else if (this.whichRemarkModal === 5) {
    return '備注'
  } else if (this.whichRemarkModal === 6) {
    return '轉碼備注'
  } else if (this.whichRemarkModal === 7) {
    return 'MGM 8號會Order'
  } else if (this.whichRemarkModal === 8) {
    return '新增DS/SS'
  } else if (this.whichRemarkModal === 9) {
    return '新增批額'
  } else if (this.whichRemarkModal === 10) {
    return '新增授權'
  } else if (this.whichRemarkModal === 11) {
    return '設定單廰額'
  } else if (this.whichRemarkModal === 12) {
    return '設定共用額'
  } else if (this.whichRemarkModal === 13) {
    return '佣金設定'
  } else if (this.whichRemarkModal === 14) {
    return '利率設定'
  } else if (this.whichRemarkModal === 15) {
    return '戶口短訊'
  } else if (this.whichRemarkModal === 16) {
    return '幕後戶主'
  } else if (this.whichRemarkModal === 17) {
    return '凍結/解凍'
  } else if (this.whichRemarkModal === 18) {
    return '負責聽會'
  } else if (this.whichRemarkModal === 19) {
    return '禮遇級別'
  } else if (this.whichRemarkModal === 20) {
    return '禮遇級別'
  } else if (this.whichRemarkModal === 21) {
    return '擔保戶口'
  }`
}
