
const comp = f => g => x => g(f(x))

module.exports.comp = comp

