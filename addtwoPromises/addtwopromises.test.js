const addTwoPromises = require('./script');

test('Deve somar duas promessas corretamente', async () => {
  const resultado = await addTwoPromises(Promise.resolve(2), Promise.resolve(2));
  expect(resultado).toBe(4);
});

test('Deve lidar com promessas que resultam em erro', async () => {
   const erro = new Error('Erro simulado');
  const promessaComErro = Promise.reject(erro);

  await expect(addTwoPromises(Promise.resolve(2), promessaComErro)).rejects.toThrowError(erro);
});

// Adicione mais casos de teste conforme necessário
