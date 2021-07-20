import { ActionTree, GetterTree, Module, MutationTree } from "vuex";

export default class BaseModule<VuexState> implements Module<VuexState, unknown> {
    // 启用命名空间
    namespaced: boolean = true
    state?: VuexState;
    getters?: GetterTree<VuexState, unknown>;
    actions?: ActionTree<VuexState, unknown>;
    mutations?: MutationTree<VuexState>;
}
