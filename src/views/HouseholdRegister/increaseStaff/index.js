export const formConfig = function(that) {
  return [
    {
      span: 12,
      list: [
        {
          type: 'text',
          prop: 'staffNo',
          label: '員工編號',
          borderRight: true,
          searchBtn: {
            icon: 'el-icon-search',
            changeFn(val) {
              console.log('拿到input 的值', val)
            }
          }
        },
        {
          type: 'text',
          prop: 'nickName',
          label: '員工別名',
          borderRight: true
        },
        {
          type: 'simpleTextGroup',
          prop: 'addressList',
          label: '工作地點',
          optionList: [],
          borderRight: true,
          optionType: [
            {
              value: 1,
              label: '呼啦啦瞭解到'
            },
            {
              value: 2,
              label: '薩拉赫有'
            },
            {
              value: 3,
              label: '過完整個夏天'
            }
          ]
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'langTransformation',
          label: '員工姓名',
          borderRight: true,
          prop: 'staffName'
        },
        {
          type: 'text',
          prop: 'enName',
          label: '英文姓名',
          borderRight: true
        },
        {
          type: 'select',
          label: '菜單權限',
          prop: 'permission',
          borderRight: true,
          filterable: true,
          optionList: [
            {
              value: 1,
              label: 'CEO'
            },
            {
              value: 2,
              label: 'CFO'
            },
            {
              value: 3,
              label: 'COO'
            }
          ]
        },
        {
          type: 'select',
          label: '密碼權限',
          prop: 'password',
          borderRight: true,
          optionList: [
            {
              value: 1,
              label: 'CEO'
            },
            {
              value: 2,
              label: 'CFO'
            },
            {
              value: 3,
              label: 'COO'
            }
          ]
        },
        {
          type: 'select',
          label: '權限等級',
          prop: 'level',
          borderRight: true,
          optionList: [
            {
              value: 1,
              label: 'CEO'
            },
            {
              value: 2,
              label: 'CFO'
            },
            {
              value: 3,
              label: 'COO'
            }
          ]
        },
        {
          type: 'select',
          label: '狀態',
          prop: 'status',
          borderRight: true,
          optionList: [
            {
              value: 1,
              label: 'CEO'
            },
            {
              value: 2,
              label: 'CFO'
            },
            {
              value: 3,
              label: 'COO'
            }
          ]
        },
        {
          type: 'radioItem',
          label: '網上查數',
          prop: 'queryNum',
          borderRight: true
        }
      ]
    },
    // 中介人
    {
      span: 24,
      list: [
        {
          type: 'select',
          label: '中介人',
          prop: 'middlePeople',
          borderRight: true,
          optionList: [
            {
              value: 1,
              label: '海星-人有限公司'
            },
            {
              value: 2,
              label: '海星-人有限公司'
            },
            {
              value: 3,
              label: '愛我的話你都説'
            }
          ],
          changeFn: 'middlePeopleClick'
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'date',
          prop: 'jobTime',
          label: '入職時間',
          borderRight: true
        },
        {
          type: 'text',
          prop: 'tel',
          label: '手提電話',
          borderRight: true
        },
        {
          type: 'addSelect',
          prop: 'certificate',
          borderRight: true,
          label: '證件類別',
          addFn: 'addCertificate',
          delFn: 'delCertificate',
          optionList: [
            {
              value: 1,
              label: '夢 會變得很沉重'
            },
            {
              value: 2,
              label: '愛 來匆匆去匆匆'
            }
          ]
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'radioGroup',
          label: '性別',
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
          prop: 'sex',
          borderRight: true,
          border: true
        },
        {
          type: 'text',
          prop: 'housetel',
          label: '住宅電話',
          borderRight: true
        },
        {
          type: 'text',
          prop: 'certificateNum',
          label: '證件編號',
          borderRight: true
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          type: 'text',
          label: '聯絡地址',
          prop: 'contactAddress',
          borderRight: true,
          width: '97%'
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          type: 'text',
          label: '郵箱',
          prop: 'email',
          borderRight: true,
          width: '97%'
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'date',
          label: '出生日期',
          prop: 'bornDate',
          borderRight: true
        },
        {
          type: 'addSelect',
          prop: 'jobTitle',
          borderRight: true,
          label: '職位',
          addFn: 'addJobTitle',
          delFn: 'delJobTitle',
          optionList: [
            {
              value: 1,
              label: '夢 會變得很沉重'
            },
            {
              value: 2,
              label: '愛 來匆匆去匆匆'
            }
          ]
        },
        {
          type: 'addSelect',
          prop: 'education',
          borderRight: true,
          label: '學歷',
          addFn: 'addEducation',
          delFn: 'delEducation',
          optionList: [
            {
              value: 1,
              label: '夢 會變得很沉重'
            },
            {
              value: 2,
              label: '愛 來匆匆去匆匆'
            }
          ]
        },
        {
          type: 'radioGroup',
          prop: 'chashuyi',
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
          ],
          label: '查數易',
          borderRight: true
        },
        {
          type: 'radioGroup',
          prop: 'hunyin',
          border: true,
          optionList: [
            {
              value: 1,
              label: '未婚'
            },
            {
              value: 2,
              label: '已婚'
            }
          ],
          label: '婚姻狀況',
          borderRight: true
        },
        {
          type: 'text',
          prop: 'parentName',
          label: '父親姓名',
          borderRight: true
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'text',
          label: '出生地點',
          prop: 'emai1l',
          borderRight: true
        },
        {
          type: 'text',
          label: '薪金',
          prop: 'emai1l1',
          borderRight: true
        },
        {
          type: 'addSelect',
          prop: 'country',
          borderRight: true,
          label: '國籍',
          addFn: 'addCountry',
          delFn: 'delCountry',
          optionList: [
            {
              value: 1,
              label: '夢 會變得很沉重'
            },
            {
              value: 2,
              label: '愛 來匆匆去匆匆'
            }
          ]
        },
        {
          type: 'radioGroup',
          prop: 'chazongshu',
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
          ],
          label: '查總數',
          borderRight: true
        },
        {
          type: 'text',
          label: '配偶姓名',
          borderRight: true,
          prop: 'wifename'
        },
        {
          type: 'text',
          label: '母親姓名',
          borderRight: true,
          prop: 'wifename'
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          type: 'textarea',
          label: '備注',
          prop: 'beizhu',
          minRows: 4,
          borderRight: true
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
