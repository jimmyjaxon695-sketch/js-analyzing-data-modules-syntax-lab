// index.js
require('datejs');

function combineUsers(...arrays) {
  return {
    users: [].concat(...arrays),
    merge_date: Date.today().toString("M/d/yyyy")
  };
}

module.exports = { combineUsers };