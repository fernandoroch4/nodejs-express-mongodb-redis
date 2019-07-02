const cache = require('./cache');
(async () => {
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
        try {
            await cache.set(record.shortname, record);
        } catch (error) {
            console.log(error);
        }
    }
})();