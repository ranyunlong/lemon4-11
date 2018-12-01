export default {
    namespaced: true,
    state: {
        test: 200
    },
    getters: {
        abc(state) {
            return state.test
        }
    },
    mutations: {
        usertest() {
            console.log('usertest')
        }
    },
    actions: {
        USER_TEST() {
            console.log('usertest')
        }
    }
}