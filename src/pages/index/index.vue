<template>
	<view class="content">
		<u-navbar :is-back="false" :background="{ background: Config.primaryBackgroundColor }">
			<view class="header">
				<view class="logo">
					<u-image height="34px" width="120px" src="@/static/images/douyin_logo.svg"></u-image>
				</view>
				<view class="search-bar">
					<u-search
						placeholder="搜索视频和用户"
						v-model="query"
						@search="onSearch"
						:show-action="false"></u-search>
				</view>
				<view class="actions">
					<u-icon name="zhuanfa" @click="onClickHeaderIcon" size="40"></u-icon>
				</view>
			</view>
		</u-navbar>
		<view>
            <video-list ref="videos" />
        </view>
		<app-tabbar />
	</view>
</template>

<script lang="ts" src="./Index.ts"></script>

<style lang="scss" scoped>
	$margin-header: 10px;
	$width-header-search: 120px;
	$width-header-actions: 70px;

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.row {
			width: 100%;
		}
		.header {
			display: flex;
			height: 100%;
			justify-content: space-between;
			align-items: center;
			margin-left: $margin-header;
			.logo {
				width: $width-header-search;
			}
			.search-bar {
				width: calc((100% - #{$width-header-search + $width-header-actions}));
			}
			.actions {
				width: $width-header-actions;
				display: flex;
				justify-content: flex-end;
				height: 100%;
				padding-right: 10px;
			}
		}
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
