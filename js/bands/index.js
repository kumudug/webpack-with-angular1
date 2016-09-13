module.exports = function(app){
    require('./band-info')(app);
    require('./band-list')(app);
}