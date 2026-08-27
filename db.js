import Database from "better-sqlite3";

const db = new Database("tarefas.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS tarefas (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TTEXT NOT NULL,
        descricao Text NOT NULL,
        concluida INTERGER NOT NULL DEFAULT 0,
        criada_em TEXT NOT NULL DEFAULT (datatime('now'))
    )
`)

export default db;