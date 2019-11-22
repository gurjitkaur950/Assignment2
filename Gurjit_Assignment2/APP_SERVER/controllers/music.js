var musicArray = [{
    songName: 'Take Off',
    singer: 'Garry Sandhu'
}, {
    songName: 'PCR',
    singer: 'Gurjas Sidhu'
}, {
    songName: 'Hair',
    singer: 'Karan Aujhla'
}];

const musicList = function (req, res) {
    res.render('list-display', {
        song: musicArray,
        title: 'Music List'
    });
};

const about = function (req, res) {
    res.render('about', {
        title: 'About my site'
    });
};
const display = function (req, res) {
    res.render('display', {
        title: 'Not Implemented'
    });
};
module.exports = {
    musicList,about,display
};
