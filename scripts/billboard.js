const videosJSON = require('./billboard.json')
const fs = require('fs')
const path = require('path')

const launch = async () => {
    const billboardList = []
    for (const b of videosJSON.data_list[0].element_list) {
        billboardList.push(b)
    }
    fs.writeFileSync(path.join(__dirname, '../src/static/billboard.json'), JSON.stringify(billboardList, null, 4))
}

launch()
