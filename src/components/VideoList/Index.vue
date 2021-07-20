<template>
    <scroll-view class="video-list-component">
        <u-row gutter="20" v-for="(vRow, vk) of videoRows" :key="vk" class="video-row">
            <u-col
                v-for="(v, k) of vRow"
                class="video-col"
                :key="k"
                :span="columnSpan">
                <div class="card" :hover-class="hover">
                    <view class="header">
                        <u-image class="cover" width="100%" border-radius="6px" height="140px" :src="v.cover"></u-image>
                        <view class="video-stat">
                            <view class="digg">
                                <u-icon name="heart"></u-icon>
                                <view class="label">{{ v.$digg_count }}</view>
                            </view>
                            <view class="duration">
                                <view class="label">{{ v.$duration }}</view>
                            </view>
                        </view>
                    </view>
                    <view class="footer">
                        <view class="u-line-2">{{ v.title }}</view>
                    </view>
                </div>
            </u-col>
        </u-row>
    </scroll-view>
</template>

<script lang="ts" src="./Index.ts"></script>

<style lang="scss" scoped>
    $height-row: 200px;
    $height-cell-cover: 140px;
    $margin-cell: 7px;

    .video-list-component {
        // background-color: $i-color-background;
        .video-row {
            height: $height-row;
        }
        .video-col {
            .card {
                width: calc(100% - #{$margin-cell * 2});
                height: calc(100% - #{$margin-cell * 2});
                margin: $margin-cell;
                margin-right: $margin-cell * 0.5;
                background-color: $i-color-background;
                border-radius: 6px;
                transition: 0.2s all ease-in-out;
                &:active, &.hover {
                    background-color: #FFF;
                }
            }
            .header {
                position: relative;
                height: $height-cell-cover;
                .video-stat {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    padding: 0 5px;
                    height: $height-cell-cover * 0.2;
                    background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
                    display: flex;
                    justify-content: space-between;
                    .digg {
                        display: flex;
                        align-items: center;
                        color: #EEE;
                        .label {
                            margin-left: 3px;
                        }
                    }
                    .duration {
                        display: flex;
                        align-items: center;
                        color: #bfbdbd;
                    }
                }
            }
            .footer {
                padding: 5px;
                font-size: 13px;
            }
        }
    }
</style>