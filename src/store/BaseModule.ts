import { Module } from "vuex";

export default class BaseModule<VuexState> implements Module<VuexState, unknown> {
    // 启用命名空间
    namespaced: boolean = true
}
