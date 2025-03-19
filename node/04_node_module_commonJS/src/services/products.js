
//########USANDO COMMONJS

module.exports ={ //pode exportar mais de uma funcao/valores/etc
    getFullName,
};

async function getFullName( codeId, productName){ 
    console.log(codeId + "--" + productName);
};