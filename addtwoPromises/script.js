const addTwoPromises = async function (promise1, promise2) {
  try {
    const results = await Promise.all([promise1, promise2]);
    const sum = results[0] + results[1];
    return sum;
  } catch (error) {
    console.error("Erro ao somar promessas:", error.message);
    throw error;
  }
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  .then(console.log)
  .catch(error => {
    console.error("Erro durante a execução:", error);
});

module.exports = addTwoPromises;
