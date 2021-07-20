<template>
	<view class="content">
		<view>
            <web-view :src="src"></web-view>
        </view>
		<app-tabbar />
	</view>
</template>

<script lang="ts" src="./About.ts"></script>

<style lang="scss" scoped>
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
