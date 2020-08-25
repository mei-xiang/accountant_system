export const formConfig = function(that) {
  return [
    {
      span: 12,
      list: [
        {
          type: 'text',
          prop: 'fullNo',
          label: 'SS内期限',
          borderRight: true
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'date',
          prop: 'pierenshu',
          label: '利率',
          borderRight: true
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'text',
          prop: 'piE',
          label: 'DS内期限',
          borderRight: true
        }
      ]
    },
    {
      span: 12,
      list: [
        {
          type: 'text',
          prop: 'pierenshu',
          label: 'DS/SS外期限',
          borderRight: true
        }
      ]
    }
  ]
}
