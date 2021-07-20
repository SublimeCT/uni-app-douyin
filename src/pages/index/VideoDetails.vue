<template>
    <scroll-view class="video-list-component">
        <view v-if="video.title" class="box-video">
            <video class="video" :src="video.video" :key="video.video" loop />
        </view>
        <view class="info">
            <view class="title">{{ video.title }}</view>
            <view class="infomation">
                <view class="box-author">
                    <u-image class="avatar" shape="circle" :src="video.avatar" width="50px" height="50px" />
                    <view class="nickname">{{ video.nickname }}</view>
                </view>
                <view class="actions">
                    <div class="card digg">
                        <u-icon name="heart-fill"></u-icon>
                        <view class="label">{{ video.$digg_count }}</view>
                    </div>
                    <div class="card comment">
                        <u-icon name="chat-fill"></u-icon>
                        <view class="label">{{ video.$comment_count }}</view>
                    </div>
                    <!-- #ifdef APP-PLUS -->
                    <div class="card open">
                        <u-icon name="share" @click="onOpen(video)"></u-icon>
                        <view class="label">open</view>
                    </div>
                    <!-- #endif -->
                </view>
            </view>
        </view>
        <app-tabbar />
    </scroll-view>
</template>

<script lang="ts" src="./VideoDetails.ts"></script>

<style lang="scss" scoped>
    .box-video {
        width: 100%;
        .video {
            width: 100%;
        }
    }
    .info {
        padding: 5px 10px;
        .title {
            margin-bottom: 10px;
            font-weight: bold;
        }
        .infomation {
            display: flex;
            justify-content: space-between;
            .box-author {
                display: flex;
                align-items: center;
                .nickname {
                    margin-left: 15px;
                }
            }
            .actions {
                display: flex;
                .card {
                    display: flex;
                    align-items: center;
                    margin-right: 8px;
                }
            }
        }
    }
</style>