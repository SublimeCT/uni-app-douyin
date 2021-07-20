<template>
	<view class="content">
		<u-card title="热榜" sub-title="TOP5">
			<view class="list" slot="body">
				<view
					v-for="(b, k) of billboards"
					:key="k"
					class="u-body-item u-flex u-border-bottom u-col-between u-p-t-0 row">
					<view class="rank" :data-rank="b.rank">{{ b.rank }}</view>
					<view class="title">{{ b.title }}</view>
					<view class="hot_value">{{ b.$hot_value }}</view>
				</view>
			</view>
		</u-card>
		<app-tabbar />
	</view>
</template>

<script lang="ts" src="./Explor.ts"></script>

<style lang="scss" scoped>
	$width-rank: 30px;
	$width-hot-value: 50px;
	.list {
		.row {
			display: flex;
			.rank {
				width: $width-rank;
				font-size: 20px;
				line-height: $width-rank;
				&[data-rank="1"] { color: #db5336; }
				&[data-rank="2"] { color: #dd713e; }
				&[data-rank="3"] { color: #edb013; }
			}
			.title {
				width: calc(100% - #{$width-hot-value + $width-rank});
			}
			.hot_value {
				width: $width-hot-value;
				text-align: right;
			}
		}
	}
</style>
