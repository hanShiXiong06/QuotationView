<template>
	<view>
		
		<view>回收地址: 河北省石家庄市裕华区塔冢 <button size="mini" type="primary"  @click="copytext('add')">复制地址</button></view>
		<view>联系电话(同微信):15832117979 <button size="mini" type="primary"  @click="copytext('phone')">复制电话</button> </view>
		<view>联系人:韩世雄 </view>
		<button size="mini" type="primary"  @click="copytext('all')">复制全部</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			copytext(str){
				if(str == 'add'){
					str  = '河北省石家庄市裕华区塔冢'
				} else if( str == 'phone'){
					str = '15832117979'
				}else{
					str = '河北省石家庄市裕华区塔冢,15832117979,韩世雄'
				}
				 uni.setClipboardData({
				      //准备复制的数据
				      data: '123',
				      success: function (res) {
				        uni.showToast({
				          title: '复制成功',
				        });
				      }
				    })
				}
		}
	}
</script>

<style>

</style>
