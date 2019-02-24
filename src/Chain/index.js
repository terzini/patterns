// First middleware
const sweets = (env, next) => context => {
    context += ` ate ${env.numberOfSweets()} sweets`
    return next(context)
  }
  
  // Second middleware
  const enjoyed = (env, next) => context => {
    if (env.didEnjoy()) {
      context += ' and enjoyed it.'
    } else {
      context += ' and stuck tongue out.'
    }
    return next(context)
  }
  
  // We can stop the middleware chain
  // and return early if needed
  const early = (env, next) => context => {
    if (env.isTakingPart()) {
      return next(context)
    } else {
      return context + ' did not want to take part'
    }
  }