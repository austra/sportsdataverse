const axios = require('axios');

const getSchedule = async ({
    year = null,
    month = null,
    day = null
}) => {
    const baseUrl = `http://cdn.espn.com/core/nhl/schedule?dates=${year}${parseInt(month) <= 9 ? "0" + month : month}${parseInt(day) <= 9 ? "0" + day : day}`;
    const params = {
        xhr: 1,
        render: false,
        device: 'desktop',
        userab: 18
    };

    const res = await axios.get(baseUrl, {
        params
    });
    return res.data.content.schedule;
}

module.exports = {
    getSchedule
}