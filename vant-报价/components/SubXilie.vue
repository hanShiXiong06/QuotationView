<template>
	<view>
		<view v-for="(fatherData,index) in item.tags" v-if ="fatherData.money!=='12系列' "  >
			{{fatherData.money}}
		</view>
		<!-- <view v-for="(fatherData,index) in item.tags" v-if ="fatherData.money!=='11系列' "  >
			{{fatherData.money}}
		</view>
		<view v-for="(fatherData,index) in item.tags" v-if ="fatherData.money!=='8系列' "  >
			{{fatherData.money}}
		</view>
		<view v-for="(fatherData,index) in item.tags" v-if ="fatherData.money!=='手表系列' "  >
			{{fatherData.money}}
		</view> -->
	</view>
</template>

<script>
	export default {
		name:"SubXilie", 
		props:{fatherData: {
				type: Object,
				default: function() {
					return {};
				}
			},},
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>
