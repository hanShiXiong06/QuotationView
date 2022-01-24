<template>
	<view class="content">
		<!-- 提示用户的信息 -->
		<van-notice-bar scrollable left-icon="volume-o" text="本程序是一个数码产品 回收报价查询的App" />
		<!-- 广告位的位置 -->
		<swiper class="swiper over" indicator-dots='true' autoplay="true">
			<swiper-item v-for="(item,index) in bannerList">
				<view class="swiper-item uni-bg-red">
					<image :src="item.banner_add"></image>
				</view>
			</swiper-item>


		</swiper>
		
		<!-- 程序主体 -->
		<van-tabs v-model='TabCur4' background="red" swipeable title-active-color='#ff7400' animated='false'
			@scroll='han'>
			<van-tab class='listBar' v-for="(item,index) in getMailList.navlist " :key='index' :name='item.id'
				:title="item.name | formatstr">

				<view v-for="(items,indexs) in getMailList.typelist " v-if="items.id==item.id " :name='items.id'
					:key='indexs'>
					<van-grid :column-num="3">
						<van-grid-item class='togetcategoryList' @tap="handle(values.id)" :name='values.id'
							v-for="values in items.togetcategory" :key="values.id" :icon="values.logo_image"
							:text="values.name" />
					</van-grid>

				</view>
			</van-tab>
		</van-tabs>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				TabCur4: 2,
				getMailList: [],
				getMailListFlag: false,
				bannerList: []
			}
		},
		onLoad() {
			this.getBannerList()
			this.$nextTick(this.getTabBar());
		},
		components: {},
		methods: {
			han() {
				console.log(123);
			},
			closeMask() {
				this.show = false;
			},
			handle(id) {
				uni.navigateTo({
					url: '../seeoffer/seeoffer?id=' + id
				})
			},
			getTabBar() {
				this.$https({
					url: this.$Interface.getMailList + "?token=f1a66c93-380d-49c5-b035-6a9a5e142d53",
					success: (res => {
						if (!res.code == 1) {
							uni.showToast({
								title: '网络错误,请刷新重试!'
							})
							return;
						}
						this.getMailListFlag = true;
						this.getMailList = res.data

					})
				})
			},
			getBannerList() {
				this.$https({
					url: this.$Interface.getBanners,

					success: (res => {
						this.bannerList = res;
						// console.log(res);
					})
				})
			}
		},
		filters: {
			formatstr(str) {
				var reg = new RegExp("回收报价|回收");
				str = str.replace(reg, '');
				return str;
			}
		}
	}
</script>

<style lang="scss">
	.togetcategoryList {
		text-align: center;
	}

	/deep/ .van-tab {
		flex-basis: 27% !important;
	}

	/deep/ .van-grid-item {
		height: 200rpx !important;
	}

	/deep/ .van-grid-item__icon {
		font-size: 37px !important;
	}

	swiper-item {
		border-radius: 10rpx;
		background: #ff3220;
		color: #fff8ee;

		>view {
			height: 100%;
		}

		>view>image {
			width: 100%;
			max-height: 100%;
		}
	}

	/deep/ .van-grid-item__icon+.van-grid-item__text {
		padding: 0px 10px;
		letter-spacing: 1.2px;
	}

	swiper {
		margin: 20rpx;
		border-radius: 10rpx;
		box-shadow: 0 0 15rpx #333333;
		overflow: hidden;

		>image {
			border-radius: 10rpx;
		}
	}

	.wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.block {
		width: 120px;
		height: 120px;
		background-color: #fff;
		border-radius: 10rpx;
		box-shadow: 0 0 15rpx #c8c3c8;
	}

	/deep/ .van-overlay {}

	.overlay {
		height: 100vh;
		width: 100vw;
		background: rgba(100, 100, 100, 0.7);

		top: 0;
		left: 0;
		position: fixed;
		z-index: 1;
	}

	.hidden {
		display: none;
	}

	.block {
		width: 50vw;
		transform: translateY(-80rpx);
		padding: 20rpx;

		>.mask_text {
			text-indent: 2em;
			font-size: 26rpx;

		}

		display: flex;
		flex-direction:column;
		justify-content: space-between;

		>.btn {
			margin: 0rpx auto;
		}

		.hint {
			color: $uni-color-warning;
		}
	}
</style>
