<template>
	<view>
		
		
		<!-- <van-sticky> -->
			<view v-if='totality==2|| totality==4' class="seeofferTitle">
				<view v-for='(item , index) in seeofferTitle[5]'>
					{{item}}
				</view>
			</view>
			<view v-else-if='totality==87||  totality==114 ||  totality==235' class="seeofferTitle">
				<view v-for='(item , index) in seeofferTitle[2]'>
					{{item}}
				</view>
			</view>
			<view v-else-if='totality ==43' class="seeofferTitle">
				<view v-for='(item , index) in seeofferTitle[4]'>
					{{item}}
				</view>
			</view>
			<view v-else-if=' totality ==117|| totality ==36||totality ==158 || totality==140' class="seeofferTitle">
				<view v-for='(item , index) in seeofferTitle[1]'>
					{{item}}
				</view>
			</view>
			<view v-else-if=' totality ==34|| totality ==89' class="seeofferTitle">
				<view v-for='(item , index) in seeofferTitle[6]'>
					{{item}}
				</view>
			</view>
			
			<view v-else-if='tagsNum ==3' class="seeofferTitle">
				<view v-for='(item , index) in seeofferTitle[2]'>
					{{item}}
				</view>
			</view>
			<view v-else-if='tagsNum ==2' class="seeofferTitle">
				<view v-for='(item , index) in seeofferTitle[0]'>
					{{item}}
				</view>
			</view>
		<!-- </van-sticky> -->
		<uni-collapse class="seeofferTitles" ref="collapse" v-model="value" @change="change"  v-for='(item,index) in seeofferList' :key='index' >
			<!-- {{item}} -->
			<uni-collapse-item   :title="item "  >
				<view class="content" >
					<view class=" comments ">
						 <h4>等级</h4> 
						<view v-for="(items,indexs) in item.level" :key='indexs'  class="levelLine">
							<text class="tags" @click="showLevel(items.standard)">
								{{items.name}}
							</text> 
													
							<text class="recently">
								<button @click="lookPrice" type="primary" >格</button>
								<!-- <button size="mini" type="primary" size="mini"  @click="lookPrice">近10天价格</button> -->
								
							</text>
							<text class=""><van-icon name="balance-o" />{{items.money}}</text>
							
							<!-- <text> <button type="default" size="mini"> 查看标准</button>	</text> -->
						</view>
					</view>
					<view class=" comments ">
						 <h4>扣费项</h4> 
						 <view class="" v-if='!!item.pdeduction' v-for="(items,indexs) in item.pdeduction" :key='indexs' class="levelLine">
						 	<text class="tags" @click="showLevel(items.standard)">
						 		{{items.name}}
						 	</text> 
							减 {{items.minmax}}
						 </view>
					</view>
					<!-- -->
					
				</view>
			</uni-collapse-item>	
			
			
		</uni-collapse>
	<uni-load-more  :loadingType="loadingType" :contentText="contentText" ></uni-load-more>
	</view>

</template>

<script>
	import Dates from "../../util/date.js"
	import myIcon from "../../components/myIcon"
	import uniLoadMore from '../../components/uni-load-more.vue'
	var _self= this;
	export default {
		data() {
			return {
				 activeNames: ['1'],
				cid: '',
				seeofferList: [],
				tagsNum: '',
				page:1,
				totality: '',
				seeofferTitle: [
					[ '型号', '内存', '价格','操作'],
					['型号', '网络/版本', '内存', '价格','操作'],
					[ '型号', '内存', '颜色', '价格','操作'],
					[ '型号',  '尺寸', '内存', '价格','操作'],
					[ '型号', '内存', '备注', '价格','操作'],
					[ '名称', '型号', '价格','操作'],
					['尺寸','型号','CPU','存储','价格','操作']
				],
				active: 0,
				loadingText: '加载中...',
				loadingType: 0,//定义加载方式 0---contentdown  1---contentrefresh 2---contentnomore
				contentText: {
					contentdown:'上拉显示更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了'
				},
				content:'asdsa'
			}
		},
		components: {
			myIcon,
			uniLoadMore
		},
		methods: {
			showData(i){
				//console.log(123);	
			},
			change(){
				console.log('change');
			}
			,
			showList(index) {
				if(this.active == index){
					this.active=-1;
				}
					
				this.active = index;
				
			},
			formatData(list){
				
				// 对各个品类的数据进行格式化
				// 全新iPhone格式化
				if(this.totality ==114){
					this.subXilie(list);
					list.some(res=>{
							res.tags.splice(1,1);								 
					})
				}
				// 对在保 的iPhone格式化
				if(this.totality ==26 ){
					this.subXilie(list);
					this.tagsNum = list[0].tags.length;
				}
				// 过保的iPhone 数据格式化
				if(this.totality == '54' || this.totality == 52){
					
					// that.seeofferList = that.format54(res.data)
					this.subXilie(list);
					// 去掉型号 A1220这样的数据
					// //console.log(res.data.list)
					this.subModel(list,'A');
					this.tagsNum = list[0].tags.length;
				
				}
				// 原封iPad数据格式化
				if(this.totality == '43'){
					
					// that.seeofferList = that.format54(res.data)
					this.subXilie(list);
					this.tagsNum = list[0].tags.length;
				}
				// 荣耀和华为数据格式化
				if( this.totality ==235||this.totality == 68 ||  this.totality ==161||  this.totality == 212){
					this.subXilie(list);
					this.subModel(list,
					'JAD|EVR|HMA|ALP|MHA|NXT|CRR|ABR|VOG|ELE|EML|VKY|VTR|VIE|EVA|SPN|GLK|SPN|VCE|UL00|AL30|UL10|AL50|AN10|AL00|AN00|AL20|CL10|CL00|TL00|AL10|MAR|CLT|ANA|ELS|ANG|BRQ|CND|CDL|CDY|JEF|JER|WLZ|PPA|DVC|ART|JSC|JNY|CHL|FRL|AQM|MED|STK|TYH|TNN|TAS|NOH|OCE|ELZ|ALA|YOK|OXF|PCT|BKL|JMM|NOP|LIO|LYA|NEO|LON|TET|TAH|BLA|BAH|WGR|WRR|MRR|SCMR'
					)
					this.tagsNum = list[0].tags.length;
					//console.log(_self.tagsNum)
				}
				// 小米系列
				if(this.totality == 141||this.totality == 34|| this.totality == 143|| this ==50|| this.totality ==112){
					this.subXilie(list);
					this.tagsNum = list[0].tags.length;
				}
				// IQOO和Vivo系列
				if(this.totality ==36||this.totality ==57 ||this.totality == 158|| this.totality == 140 || this.totality ==74 ){
					this.subXilie(list);
					this.tagsNum = list[0].tags.length;
				}
				// iqoo 去空
				if(this.totality ==113||this.totality ==39||this.totality ==72  ){
					
					this.subXilie(list);
					
						list.some(res=>{
						
						
						if(!res.tags[2].money){
							
							res.tags.splice(2,1);
							
						 }
					})
					
				}
				//魅族
				if(this.totality == 83){
					this.subXilie(list);
					this.subModel(list,
					'M|S|A')
				}
				// 一加系列格式化
				if(this.totality ==15 ){
					
					this.subXilie(list);
					
					list.some(res=>{
						
						
						if(!res.tags[1].money){
							
							res.tags.splice(1,1);
							
						 }
					})
					
				}
				// 华为平板
				if(this.totality ==42||this.totality ==49 ){
					
					this.subXilie(list);
					this.subModel(list,
					'MRR|WGR|BAH|SCMR|WRR'
					)
					
					
				}
				// 二手iPad去型号
				if(this.totality ==117){
					this.subModel(list,
					'A'
					)
				}
				return list
			},
			getmorenews: function() {
				
				_self = this;
				if (_self.loadingType !== 0) { //loadingType!=0;直接返回
					return false;
				}
				_self.loadingType = 1;
				uni.showNavigationBarLoading(); //显示加载动画
				console.log('3.page的值是'+_self.page);
				this.$https({
					url: this.$Interface.getSeeoffer,
					data: {
						cid: this.cid,
						offer_date:Dates.getCurrentDate(),
						page: _self.page
					},
					method: 'GET',
					success: (res => {
						if (!res.data.list.length ) { //没有数据
						//console.log(123)
							_self.loadingType = 2;
							uni.hideNavigationBarLoading(); //关闭加载动画
							return;
						}
						console.log('4.page的值是'+_self.page);
						_self.page++; //每触底一次 page +1						
						_self.loadingType = 0; //将loadingType归0重置
						uni.hideNavigationBarLoading();
						console.log( res.data.list[0].tags.length);
						// this.tagsNum = res.data.list[0].tags.length;
						this.totality = res.data.totality;
						
						// //console.log(this.totality);
						let list = this.formatData(res.data.list)
						//将数据拼接在一起
						for (var i = 0; i < list.length; i++) {
						console.log(list[i]);
							_self.seeofferList.push(list[i])
						
						}
						//console.log(this.seeofferList.list)


					})
					
				});
			},
			// 对系列去掉
			subXilie(obj){
				obj.some(res=>{
					let reg = /系列/;
					if(reg.test(res.tags[0].money)){
						res.tags.shift()
					}
				})
			},
			// 去掉iPhone的型号 例如A1220 
			subModel(obj,str){
				obj.some(res=>{
					let reg = new RegExp(str);
					// //console.log();
					if(reg.test(res.tags[1].money)){
						res.tags.splice(1,1);						
					}
				})
			},
			testTotality(){
				
			},
			showLevel(str){
				uni.showToast({
					title:str,
					icon:'none'
				})
			}
			,
			lookPrice(){
				uni.showToast({
					title:"接口未完善,请等待更新"
				})
			},
			getnewsList: function() { //第一次回去数据
				var that = this;
				that.loadingType = 0;
				uni.showNavigationBarLoading();
				//console.log();
				that.$https({
					url: that.$Interface.getSeeoffer,
					data: {
						cid: that.cid,
						offer_date:Dates.getCurrentDate(),
						// offer_date: "2021-09-04",
						page: that.page
					},
					success: function(res) {
						 //得到数据之后page+1
						console.log(res);
						that.totality = res.data.totality;
						
						let list = that.formatData(res.data.list)
		
						if(!that.tagsNum){
							that.tagsNum = list[0].tags.length;
						}
						that.seeofferList =list;
						uni.hideNavigationBarLoading();
						uni.stopPullDownRefresh(); //得到数据后停止下拉刷新
						console.log('1.page的值是'+_self.page);
						that.page++;
						console.log('2.page的值是'+_self.page);
					}
				})
			},
			},
			onLoad(options) {
				
				 _self = this;
				this.cid = options.id;
				uni.startPullDownRefresh();
				// this.getnewsList();
			},
			onPullDownRefresh: function() {
				//下拉刷新的时候请求一次数据
				this.getnewsList();
			},
			onReachBottom: function() {
					//触底的时候请求数据，即为上拉加载更多
					//为了更加清楚的看到效果，添加了定时器
			        this.getmorenews();			 
			},
			filters: {
				// 去掉系列相关的信息
				subiPhone(str) {
					var reg = new RegExp("iPhone");
					if (!reg.test(str)) {
						// return str.replace(reg,'')
						return 123;						
					}
				}
			}
		}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';
	
	.example-body {
		flex-direction: column;
		flex: 1;
	}
	
	.content {
		padding: 15px;
	}
	
	.text {
		font-size: 14px;
		color: #666;
		line-height: 20px;
	}
	
	.button {
		// margin-top: 10px;
		margin: 10px;
		margin-bottom: 0;
	}
	.forward {
		width: 14rpx;
		height: 14rpx;
		border-right: 1px solid #333333;
		border-bottom: 1px solid #333333;
		margin-left: 10rpx;
		transform: rotate(45deg);
	}

	.forwardClick {
		transform: rotate(45+180deg);
	}

	// 各种情况例如小花 大花 样式
	.remarks {
		display: flex;
		justify-content: space-between;
		padding: 10rpx 20rpx;
		// background:#fff;
	}

	.remarks:nth-child(even) {
		// background: #C0C0C0;
	}

	.seeofferTitle {
		font-weight: 900;
		font-size: 28rpx !important;
	}

	.seeofferLists,
	.seeofferTitle {
		display: flex;
		font-size: 26rpx;
		line-height: 40rpx;
		height: 80rpx;
		justify-content: space-around;
		text-align: center;
		align-items: center;
		box-sizing: border-box;
	}

	.seeofferLists>view,
	.seeofferTitle>view {
		flex: 1;
	}
	.seeofferTitle{
		>view{
		flex: 2;
		}
		>view:last-child{
			flex: 1;
		}
	}
	

	.seeofferLists>view:nth-child(2) {
		padding: 0px 0rpx;
	}

	.seeofferLists {
		padding: 46rpx 0px;
		border-bottom: 1rpx solid #333333;
	}

	.seeoffer>.seeofferList:nth-child(even) {
		// background-color: #bfbfbf;

	}

	.money,
	.price {
		display: flex;
		align-items: center;
		justify-content: center;


	}

	.seeofferLists .money:nth-child(4) {
		display: flex;
		justify-content: space-between;

		// padding: 0px 150rpx;
		>view:nth-child(1) {
			padding-left: 60rpx;
		}

		>view:nth-child(2) {
			padding-right: 30rpx;
		}
	}

	.money {
		>view {
			padding: 0px 0rpx;
		}
	}

	.seeofferData {
		display: none;
		font-size: 24rpx;
		// border: 1rpx solid #333333;
		border-top: none;
		padding: 0px 20rpx;
		margin: 0px 10rpx 30rpx;
		// margin-bottom: 50rpx ;
	}

	.block {
		display: block;
	}

	.activeBorder {
		
		background-color: #C0C0C0;
	}

	.fontB {
		border: none;
		font-size: 30rpx;
		font-weight: bold;
		// margin: 0px 10rpx;
	}
	.seeofferTitles{
		font-size: 24rpx;
	}
	.tags{
		padding: 12rpx 20rpx;
		background: #FF7400;
		color:#fff;
		font-size: 24rpx;
	}
	.levelLine{
		margin-top: 20rpx;
		// display: flex;
		
		>text{
			padding-left: 20rpx;
			// flex: 1;
		}
		>text:nth-child(3){
			font-size: 32rpx;
			// float: right;
			margin-top: 10px;
		}
	}
	.comments:nth-child(2){
		margin-bottom: 30rpx;
		padding-top: 20rpx;
		border-top: 1px solid #ebeef5;
	}
	.comments:nth-child(1){
		margin-bottom: 30rpx;
		
	}
	// .price{
	// 	font-size: 26rpx;
	// 	color: red; 
	// }
	.recently{
		// font-size: 24rpx;
		// padding: 10rpx;
		// background: #669ec8;
		// border-radius: 10rpx;
		button{
			transform: translateY(20rpx);
		}
		
	}
</style>
