const videosJSON = require('./update_videos.json')
const originJSON = require('../src/static/videos.json')
const fs = require('fs')
const path = require('path')

const launch = async () => {
    const videos = []
    for (const v of videosJSON.aweme_list) {
        videos.push({
            video: v.video.play_addr.url_list[0],
            cover: v.video.cover.url_list[0],
            title: v.desc,
            avatar: v.author
                ? (v.author.avatar_300x300 || v.author.avatar_168x168 || v.author.avatar_medium).url_list[0]
                : '',
            nickname: v.author.nickname,
            digg_count: v.statistics.digg_count,
            comment_count: v.statistics.comment_count,
            duration: v.video.duration,
        })
    }
    fs.writeFileSync(path.join(__dirname, '../src/static/videos.json'), JSON.stringify([...(originJSON || []), ...videos,], null, 4))
}

launch()
