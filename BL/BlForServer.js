const data = require('../general_data')
let comparator = function( elemA, elemB){
     return elemB.value - elemA.value 
}
exports.getArtists = function(onlyFamous){
    if(onlyFamous){
        let artists_json = data["famous_artists"].sort()
        return artists_json
    }
    else{
        let artists_json = data["chords_weight_by_artists"]
        let keys = Object.keys(artists_json).sort();
        return keys;
    }
}

exports.getDataOfSpecificArtistOrCategory = function(artist_category_name,is_group,isArtist){
    let url =""
    let result 
    if(isArtist){
        url = data.artists_urls[artist_category_name]
        if(is_group)
            result = data.chords_weight_in_groups_by_artists
        else
            result= data.chords_weight_by_artists
    }
    else{
        if(is_group)
            result = data.chords_weight_in_groups_by_genres
        else
            result= data.chords_weight_by_genres
    }
    let keys = Object.keys(result);
    new_keys = keys.filter((key) => {
      return key === artist_category_name
    })
    let res_json_not_sorted = result[new_keys[0]]
    let res_array_not_sorted = []
    for (key of Object.keys(res_json_not_sorted)) {
      res_array_not_sorted.push({ chord: key, value: res_json_not_sorted[key] })
    }
    let res_array_sorted = res_array_not_sorted.sort(comparator)
    return { result: res_array_sorted, artist_url: url}
}

exports.getDataForAllSongs = function(is_group){
    let res_json_not_sorted
    if (is_group)
        res_json_not_sorted = data.chords_weight_in_groups
    else
        res_json_not_sorted = data.chords_weight
    let res_array_not_sorted = []
    for (key of Object.keys(res_json_not_sorted)) {
      res_array_not_sorted.push({ chord: key, value: res_json_not_sorted[key] })
    }
    let res_array_sorted = res_array_not_sorted.sort(comparator)
    return res_array_sorted
 }

exports.getCategories = function(){
    return  data.categories.sort()
 }

// exports.getAllData= async function ()
// {
//     let data = await generalDataDal.readJsonData()
//         data = data.categories
//         var body = data[2].toString('utf8');
//                 console.log(body)

//         // var info = JSON.parse(body)

// }