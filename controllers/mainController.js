var request = require('request');
var https = require('https');
const root = "https://sl.se/api/sv/TravelPlanner/SearchTravelById/";

module.exports = {
  bus: bus,
  ornsberg: ornsberg,
  telefonplan: telefonplan
};

function bus(req, restofront) {
  const bus = "Bokbindarv%C3%A4gen%20(Stockholm)/Liljeholmen%20(Stockholm)/1734/9294/null/depart/sv/null/null/2,8,1,4,96,/null/null/null/null/null/false/null/0/0/null/false";
  const endpoint = root+bus

  request({
      uri: endpoint,
      method: 'GET'
    }, function (err, res, body) {
      console.log(body);
      body = JSON.parse(body);

      restofront.status(200)
          .json({
            status: '200',
            data: body.data
          });
    });

}

function ornsberg(req, restofront) {
  const ornsberg = "%C3%96rnsberg%20(Stockholm)/T-Centralen%20(Stockholm)/9292/9001/null/depart/sv/null/null/2,8,1,4,96,/null/null/null/null/null/false/null/1/0/null/false";

  const endpoint = root+ornsberg

  request({
      uri: endpoint,
      method: 'GET'
    }, function (err, res, body) {
      console.log(body);
      body = JSON.parse(body);

      restofront.status(200)
          .json({
            status: '200',
            data: body.data
          });
    });

}

function telefonplan(req, restofront) {
  const telefonplan = "Telefonplan%20(Stockholm)/T-Centralen%20(Stockholm)/9263/9001/null/depart/sv/null/null/2,8,1,4,96,/null/null/null/null/null/false/null/1/0/null/false";

  const endpoint = root+telefonplan

  request({
      uri: endpoint,
      method: 'GET'
    }, function (err, res, body) {
      console.log(body);
      body = JSON.parse(body);

      restofront.status(200)
          .json({
            status: '200',
            data: body.data
          });
    });

}
