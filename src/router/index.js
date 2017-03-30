
const getAbout = (resolve) => {
    require.ensure([], require => {
        resolve(require('./about/about.vue'));
    })
}

module.exports = {
    routes: [
        {
            path: '/about',
            component: getAbout
        }
    ]
}
