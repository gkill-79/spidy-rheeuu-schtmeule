


const { Sequelize, DataTypes } = require('sequelize');
const PatientModel = require('../models/patients');
const AddictionsModel = require('../models/addictions');
const UserModel = require('../models/users');
const CounterModel = require('../models/counter');
const AdvicesModel = require('../models/advices');
const users = require('./mock-users');
// const bcrypt = require('bcrypt');

const sequelize = new Sequelize('the_rabbit_hold2', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false,
});

const Patient = PatientModel(sequelize, DataTypes);
const Addiction = AddictionsModel(sequelize, DataTypes);
const User = UserModel(sequelize, DataTypes);
const Counter = CounterModel(sequelize, DataTypes);
const Advices = AdvicesModel(sequelize, DataTypes);

// Ajoutez ces lignes juste avant l'appel à `sequelize.sync`
Patient.associate({ addictions: Addiction });
Addiction.associate({ patients: Patient });
Counter.associate({ patients: Patient, addictions: Addiction });
Advices.associate({ patients: Patient });

const initDb = () => {
  return sequelize.sync({ force: true }).then((_) => {
    console.log("La table 'addictions' a bien été créée dans la base de données.");
    users.map((user) => {
      User.create({
        username: user.username,
        password: user.password,
        email: user.email,
        created: new Date(),
      }).then((createdUser) => console.log(createdUser.toJSON()));
    });

    // bcrypt.hash('admin', 10)
    // .then(hash => User.create({ username: 'admin', password: hash }))
    // .then(user => console.log(user.toJSON()))

    console.log('La base de donnée a bien été initialisée !!!');
  });
};

module.exports = {
  initDb,
  Patient,
  Addiction,
  User,
  Counter,
  Advices,
};





























