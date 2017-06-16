var mdTo = {
    install: function(Vue, options) {

        Vue.directive("md-to", {
            bind: function(el, binding, vnode) {
                el.onclick = function() {
                    vnode.context.$router.push(binding.value)
                }
            }
        })
    }
}
export default mdTo;