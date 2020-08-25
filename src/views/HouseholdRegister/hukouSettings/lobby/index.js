export const formConfig = function(that) {
  return [
    {
      span: 24,
      list: [
        {
          type: 'simpleTextGroup',
          prop: 'pierenshu',
          label: '客人收益',
          optionList: [
            {
              value: 1,
              label: '凍結'
            },
            {
              value: 2,
              label: '不凍結'
            }
          ],
          optionType: [
            {
              value: 1,
              label: '綜合單'
            },
            {
              value: 2,
              label: '集團佣金'
            }
          ]
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          type: 'select',
          prop: 'selectval',
          optionList: [
            {
              value: 1,
              label: '新葡京廣東斌會'
            }
          ],
          label: '負責廳會'
        }
      ]
    },
    {
      span: 24,
      list: [
        {
          type: 'textarea',
          label: '備注',
          prop: 'remark',
          minRows: 4
        }
      ]
    }
  ]
}
