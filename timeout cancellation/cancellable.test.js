const executeWithDelay = require('./cancellable');

// Teste 1: Verifica se a função é executada após o atraso
test('Executa a função após o atraso especificado', (done) => {
  const mockFn = jest.fn();
  const cancelFunction = executeWithDelay(mockFn, [], 100);

  setTimeout(() => {
    expect(mockFn).toHaveBeenCalled();
    done();
  }, 200); // Aguarda tempo suficiente para garantir a execução da função
});

// Teste 2: Verifica se a função é cancelada corretamente
test('Cancela a execução da função', (done) => {
  const mockFn = jest.fn();
  const cancelFunction = executeWithDelay(mockFn, [], 100);

  // Chama a função de cancelamento antes do atraso
  cancelFunction();

  setTimeout(() => {
    expect(mockFn).not.toHaveBeenCalled();
    done();
  }, 200); // Aguarda tempo suficiente para garantir que a função não foi executada
});