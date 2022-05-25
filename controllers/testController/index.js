exports.testInfo = async function(req, res){
    res.writeHead(200,{'Content-Type':'application/json'})
    res.end(JSON.stringify({
        message:"test succesful"
    }))
}