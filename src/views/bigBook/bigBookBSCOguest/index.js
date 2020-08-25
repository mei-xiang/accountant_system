export const formConfig = function(that) {
  return [
    {
      span: 24,
      list: [
        {
          type: 'dateTime',
          prop: 'excelDate',
          label: '日  期',
          changeFn: 'changeFn'
        }
      ]
    }
  ]
}
