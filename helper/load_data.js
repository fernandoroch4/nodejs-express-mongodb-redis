const db = require('../src/database');
(async () => {
    let countInserts = 0;
    for (let index = 0; index < quantity; index++) {
        const document = {
            shortname: `shortname-${index}`,
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
            tempo_estudo: 'tempo_estudo ' + index,
            link: 'http://localhost',
            abc: [ 'abc', 'def', 'ghi', 123, 456, 678 ],
            def: 123
        };
        try {
            if (await db.insert(document)) countInserts += 1;    
        } catch (error) {
            console.log(error);   
        }        
    }
    console.log(`${countInserts} documents inserts`);
})();