/** bahasadaring.com scrapper by ibnusyawall */

const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Artikata
 * @param {String} kata
 */
const Artikata = kata => {
    var url = `https://bahasadaring.com/arti-kata?kata=${kata}`;
    var options = {
        headers: {
            'User-Agent': 'googlebot',
            'referer': 'https://bahasadaring.com/'
        }
    }

    return new Promise((resolve, reject) => {
        axios(url, options).then(({ data: html }) => {
            var $ = cheerio.load(html);

            var arti = $('div.card-body > p.card-text').html().split('<br>');
            var contoh = $('div.card-body > p.card-text > i').html().split('<br>');

            arti = arti.join(', ');
            contoh = contoh.map(v => v.replace(/\:/, ': ')).filter(trim => !!trim);

            resolve({
                kata,
                arti,
                contoh
            });
        }).catch(e => {
            reject({
                status: 'error',
                stack: String(e),
                e: 'kata tidak ditemukan'
            });
        })
    })
}

module.exports = Artikata;
