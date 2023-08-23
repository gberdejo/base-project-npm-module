const mongoose = require('mongoose');

class MiFramework {
  db
    
  constructor(options) {
      this.databaseUrl = options.databaseUrl || 'mongodb://localhost/mydb';

      this.connect()

      this.User = mongoose.model('User', require('./schema/user'))
  }

  connect() {
    mongoose.connect(this.databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this.db = mongoose.connection;
    this.db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
    this.db.once('open', () => {
      console.log('Conectado a la base de datos MongoDB');
    });
  }
}


module.exports = MiFramework;