// importar a dependência do sql lite

// função dentro de objeto chama método

const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações no banco de dados

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizar o objeto de banco de dados

// db.serialize(() => {
// //     // com comandos sql
// //     // 1. criar uma tabela
//     db.run(`
//             CREATE TABLE IF NOT EXISTS places (
//                 id INTEGER PRIMARY KEY AUTOINCREMENT,
//                 name TEXT,
//                 image TEXT,
//                 address TEXT,
//                 number TEXT,
//                 state TEXT,
//                 city TEXT,
//                 items TEXT
//             );
//     `)

//     // 2. inserir dados na tabela
//     const query = `
//         INSERT INTO places (
//             name,
//             image,
//             address,
//             number,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `

//     const values = [
//         "Papersider",
//         "https://images.pexels.com/photos/479453/pexels-photo-479453.jpeg?cs=srgb&dl=amarrotado-amassado-aspero-branco-479453.jpg&fm=jpg",
//         "Guilherme Gemballa, Jardim América",
//         "Nº 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Papéis e Papelão"
//     ]

//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso :D")
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData)

    // 3. consultar dados
    // db.all(`SELECT * FROM places`, function(err, rows) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Aqui estão os seus registros:")
    //     console.log(rows)
    // })

    // 4. deletar dados
//     db.run(`DELETE FROM places where id = ?`, [4], function(err) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Registro deletado com sucesso :D")
//     })

// })