function combineUsers(...arrays) {
  const users = [].concat(...arrays);
  const today = new Date();
  const merge_date = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return { users, merge_date };
}

module.exports = { combineUsers };