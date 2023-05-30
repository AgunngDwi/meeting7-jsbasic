// quiz 1
let today = new Date()
let yesterday = new Date(today)
yesterday.setDate(yesterday.getDate()-1)
let tommorow = new Date(today)
tommorow.setDate(tommorow.getDate()+1)

console.log('Hari ini tanggal', today.toDateString())
console.log('Kemarin tanggal', yesterday.toDateString())
console.log('Besok tanggal', tommorow.toDateString())

// quiz 2
