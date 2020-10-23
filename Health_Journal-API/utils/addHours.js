module.exports.addHours = function(Date,h) {
    Date.setTime(Date.getTime() + (h*60*60*1000));
    return Date;
  }