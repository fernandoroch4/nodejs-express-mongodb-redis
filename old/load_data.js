const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'sala_modelo';
const client = new MongoClient(url, { useNewUrlParser: true });

client.connect((err, client) => {
    if (err) {
        console.error(err);
    } else {
        const db = client.db(dbName);
        for (let index = 0; index < 8000; index++) {
            const record = {
                shortname: 'shortname' + index,
                disciplina: 'disciplina ' + index,
                ordem_unidade: 'ordem_unidade ' + index,
                unidade: 'unidade ' + index,
                ordem_secao: 'ordem_secao ' + index,
                secao: 'secao ' + index,
                ordem_bloco_aprendizagem: 'ordem_bloco_aprendizagem ' + index,
                bloco_aprendizagem: 'bloco_aprendizagem ' + index,
                titulo_bloco_aprendizagem: 'titulo_bloco_aprendizagem ' + index,
                descricao_bloco_aprendizagem: 'descricao_bloco_aprendizagem ' + index,
                tag_relevancia: 'tag_relevancia ' + index,
                tag_tipo_conteudo: 'tag_tipo_conteudo ' + index,
                pontos_ac: 'pontos_ac ' + index,
                tempo_estudo: 'tempo_estudo ' + index
            };
            db.collection('salas').insertOne(record, (err) => {
                if (err) console.error(err);
                else console.log(JSON.stringify(record));
            });
        }
    }
    client.close();
});