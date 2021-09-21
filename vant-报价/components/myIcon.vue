<template>
	<view>
		
		<view class="icon yin" 
		v-if="color == '银'" >
		 	<view class="icon-con">
				
			</view>
		</view>
		<view class="icon shimo"
		v-if="color == '石墨'" >
		 	<view class="icon-con">
				
			</view>
		</view>
		<view class="icon hailan"
		v-if="color == '海蓝'" >
		 	<view class="icon-con">
				
			</view>
		</view>
		<view class="icon jin"
		v-if="color == '金'" >
		 	<view class="icon-con">
				
			</view>
		</view>
	</view>
</template>

<script >
	export default {
		name:"myIcon",
		data() {
			return {
				
			};
		}, 
		props: {
			color:{
				type: String,
				default: '' 
			}
           
		}
	}
</script>

<style lang="scss">
.icon{
	width: 30rpx;
	height: 30rpx;
	border-radius:30rpx ;
	border: 1px solid #8d8c8c;
	background-color: #FFFFFF;
	box-shadow: 0px 0px 4rpx #fff;
	.icon-con{
		width: 26rpx;
		height: 26rpx;
		border-radius:30rpx ;
		transform: translate(2rpx,2rpx);
		box-sizing: border-box;
		
	}
}

.yin{
	border: 1px solid #8d8c8c;
	
	>view{
		background-color: #fff;
	}
}
.shimo{
	border: 1px solid #62605d;
	.icon-con{
		background-color: #62605d;
	}
	
}
.hailan{
	border: 1px solid #3f5764;
	.icon-con{
		background-color: #3f5764;
	}
	
}
.jin{
	border: 1px solid #f9eeda;
	.icon-con{
		background-color: #f9eeda;
	}
	
}
</style>
