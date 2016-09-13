module.exports = function(app){
    app.factory('bandList', function(){
        return [
            {name: 'name1', formed: 1950 },
            {name: 'name2', formed: 1952 },
            {name: 'name3', formed: 1953 },
        ]
    })
}