<template>
    <view class="app-tabbar-component">
        <u-tabbar
            :bg-color="Config.primaryBackgroundColor"
            :hide-tab-bar="true"
            :list="$store.state.app.tabBarList" />
    </view>
</template>

<script src="./Index.ts" lang="ts"></script>

<style></style>