
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./node-scripts/database/DB_PESSOAL_RH.db', (error) => {
    if (error) console.log(error);
});

db.serialize(() => {
    db.run('create table if not exists TB_PESSOAS (id integer primary key autoincrement , name text)', (error) => {
        if (error) console.log(error);
    });

    db.run('insert into TB_PESSOAS (name) values (?)', ['João Alves Damasceno'], (error) => {
        if (error) console.log(error);
    });

    db.run('insert into TB_PESSOAS (name) values (?)', ['José Nascimento Silva'], (error) => {
        if (error) console.log(error);
    });

    db.run('insert into TB_PESSOAS (name) values (?)', ['Maria Antonieta Braga'], (error) => {
        if (error) console.log(error);
    });
    
    console.log("TB_PESSOAS")

    db.all('select * from TB_PESSOAS', (error, rows) => {
        console.log(error, rows);
    });
});



