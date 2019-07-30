const delighted = require('delighted')(process.env.DELIGHTED_API_KEY);

module.exports = {
  sendSurvey: (email) => {
    return delighted.person.create({
      email
    }, (err, res) => {
      if (err) console.log(err);
      else console.log(res);
    })
  }
}