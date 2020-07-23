
const generalDataDal = require('../Dal/generalDataDal')


exports.getAllData= async function ()
{
    let data = await generalDataDal.readJsonData()
        data = data.categories
        var body = data[2].toString('utf8');
                console.log(body)

        // var info = JSON.parse(body)

}