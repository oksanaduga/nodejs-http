const users = [
  { id: 1, name: 'one' },
  { id: 2, name: 'two' },
];

const getUsers = (req, res) => {

  if (req.params.id) {
    return res.send(users.find(user => user.id == req.params.id))
  }

  res.send(users);
}

const createUser = (req, res) => {
  const user = req.body;

  users.push(user);
  res.send(user);
}

module.exports = {
  getUsers,
  createUser
}