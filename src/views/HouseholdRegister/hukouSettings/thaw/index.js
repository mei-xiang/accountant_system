export const formConfig = function(that) {
  return [
    {
      span: 24,
      list: [
        {
          type: 'radioGroup',
          prop: 'pierenshu',
          label: '狀態',
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
          border: true
        }
      ]
    }
  ]
}
