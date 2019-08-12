function pv(ctx) {
    ctx.session.count++  //redis session
    console.log(ctx.session.count)
    global.console.log('pv',ctx.path)
}

module.exports = function() {
    return async function(ctx,next) {
        pv(ctx)
        await next();
    }
}
