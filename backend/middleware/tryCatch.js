module.exports = (asyncAwaitErrors) => (req, res, next) => {
    Promise.resolve(asyncAwaitErrors(req, res, next)).catch(next);    
  };