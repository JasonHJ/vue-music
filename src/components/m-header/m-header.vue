<template>
	<div class="header-container">
		<div class="header-top">
			<a href="#" class="logo"></a>
			<ul class="header-nav">
				<li>
					<a href="https://y.qq.com/portal/profile.html" class="header-nav_cur">
						音乐馆
					</a>
				</li>
				<li>
					<a href="#">
						我的音乐
					</a>
				</li>
				<li>
					<a href="https://y.qq.com/download/index.html" target="_blank">
						客户端
					</a>
				</li>
				<li>
					<a href="https://y.qq.com/vip/daren_recruit/apply.html" target="_blank">
						音乐号
					</a>
				</li>
				<li>
					<a href="https://y.qq.com/vipportal/"  target="_blank">
						VIP
					</a>
				</li>
			</ul>
			<div class="header-search">
				<input type="text" class="text" :placeholder="special_key" @click="showItem=!showItem" @blur="showItem=!showItem">
				<a class="btn" :href="special_url">
					<i class="icon-sprite"></i>
				</a>
				<transition name="fade">
					<div class="result" v-if="showItem">
						<a v-for="(item,index) in hot_key" href="#" class="result-item">
							<span class="rank">{{index+1}}</span>
							<span class="title">{{item.k}}</span>
							<span class="num">{{item.n}}</span>
						</a>
						<div class="history">
							<span>搜索历史</span>
							<i class="icon-sprite"></i>
						</div>
					</div>
				</transition>
			</div>
			<div class="header-login">
				<a href="#" class="login">登录</a>
				<a href="#" class="open-green">开通绿钻豪华版</a>
				<a href="#" class="open-vip">开通付费包</a>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import {getRecommend} from 'api/gethotkey'
	import {ERR_OK} from 'api/config'

	const HOTKEY_LEN=5

	export default {
		data(){
			return {
				hotkeys:[],
				special_key:'',
				special_url:'',
				showItem:false
			}
		},
		created(){
			this._gethotkey();
		},
		computed:{
			hot_key:function() {
				return this.hotkeys.slice(0,5).map(function (item) {
					var obj={},str='';
					obj.k=item.k;
					str=(item.n/10000).toFixed(1)+'';
					obj.n=(str[str.length-1]==="0"?parseInt(str):str)+'万'
					return obj;
				})
			}
		},
		methods:{
			_gethotkey(){
				getRecommend().then((res)=>{
					if(res.code===ERR_OK){
						this.hotkeys=res.data.hotkey;
						this.special_key=res.data.special_key;
						this.special_url=res.data.special_url;
					}
				})
			}
		}
	}
</script>

<style scoped>
	@import '~common/css/m-header.css'
</style>
