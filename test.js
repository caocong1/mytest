const data = [
  {
    month: '2019-01',
    list: [
      { name: '语文', share: 98 },
      { name: '数学', share: 89 },
      { name: '其它', share: 45 }
    ]
  },
  {
    month: '2019-02',
    list: [
      { name: '外语', share: 34 },
      { name: '数学', share: 56 },
      { name: '其它', share: 33 }
    ]
  }
]

function trans (data) {
  const r = data.reduce((res, val, i) => {
    res[0].push(val.month)
    val.list.forEach(s => {
      res[1][s.name] = res[1][s.name] || []
      res[1][s.name][i] = s.share
      let j = i - 1
      while (res[1][s.name][j] === undefined && j > -1) {
        res[1][s.name][j--] = 0
      }
    })
    return res
  }, [['month'], {}])
  return [r[0], ...Object.entries(r[1]).map(val => [val[0], ...val[1], ...new Array(r[0].length - val[1].length - 1).fill(0)])]
}

console.log(trans(data))
// [ [ 'month', '2019-01', '2019-02' ],
//   [ '语文', 98, 0 ],
//   [ '数学', 89, 56 ],
//   [ '其它', 45, 33 ],
//   [ '外语', 0, 34 ] ]
