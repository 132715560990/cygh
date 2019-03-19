<template>
	<!--<div>-->
		<div class="footer">
			<div class="footer-xin">
				<div class="footer-top">
					<ul class="footer-ul">
						<li>
							<h3>订单服务</h3>
							<div class="xiao">
								<p>购买指南</p>
								<p>支付方式</p>
								<p>送货政策</p>
							</div>
						</li>
						<li>
							<h3>订单服务</h3>
							<div class="xiao">
								<p>购买指南</p>
								<p>支付方式</p>
								<p>送货政策</p>
							</div>
						</li>
						<li>
							<h3>订单服务</h3>
							<div class="xiao">
								<p>购买指南</p>
								<p>支付方式</p>
								<p>送货政策</p>
							</div>
						</li>
						<li>
							<h3>订单服务</h3>
							<div class="xiao">
								<p>购买指南</p>
								<p>支付方式</p>
								<p>送货政策</p>
							</div>
						</li>
						<li>
							<h3>订单服务</h3>
							<div class="xiao">
								<p>购买指南</p>
								<p>支付方式</p>
								<p>送货政策</p>
							</div>
						</li>
						<li>
							<h3>订单服务</h3>
							<div class="xiao">
								<p>购买指南</p>
								<p>支付方式</p>
								<p>送货政策</p>
							</div>
						</li>
					</ul>
					<div class="top2">
						<p>400-123-4556</p>
						<span>周一到周日 9:00-18:30</span><br />
						<span>(仅收市话费)</span>
						<div class="bang">在线帮助</div>
					</div>
				</div>
				<div class="footer-xia">
					<h4>
						Copyright © 2019, Smartisan Digital Co., Ltd. All Rights Reserved.
					</h4>
					<h5>北京锤子数码科技有限公司</h5>
					<ul class="xia-ul">
						<li>法律声明</li>
						<li>隐私条款</li>
						<li>开发者中心</li>
					</ul><br />
					
						<router-link to="/">
							<p>京 ICP 备 14041720 号 - 1</p>
						</router-link>
					
				</div>
			</div>
		</div>
	<!--</div>-->
</template>

<script>
	export default{
		
	}
</script>

<style>
	.footer{
		width: 100%;
		height: 355px;
		background: white;
		margin-top: 25px;
	}
	.footer-xin{
		width: 1220px;
		height: 354px;
		margin: 0 auto;
	}
	.footer-top{
		height: 110px;
		width: 1220px;
		padding: 60px 0 55px;
		font-size: 0px;
		border-bottom:1px solid gainsboro;
	}
	.footer-ul{
		width:850px;
		display: inline-block;
		vertical-align: top;
	}
	.footer-ul li{
		width: 48px;
		height: 110px;
		margin-right: 90px;
		display: inline-block;
		vertical-align: top;
	}
	.footer-ul h3{
		font-size: 12px;
		color: #646464;
		width: 48px;
		padding-bottom: 16px;
	}
	.xiao{
		width: 48px;
		height: 78px;
	}
	.xiao p{
		font-size: 12px;
		color: #c3c3c3;
		padding: 5px 0;
	}
	.top2{
		width: 241px;
		height: 106px;
		margin-left: 129px;
		display: inline-block;
		vertical-align: top;
		text-align: right;
	}
	.top2 p{
		font-size: 18px;
		color: #5079d9;
		margin-bottom: 15px;
		font-weight: 900;
	}
	.top2 span{
		font-size: 12px;
		color: #999;
	}
	.footer-xia{
		width: 1220px;
		height: 40px;
		padding: 60px 0 90px;
	}
	.footer-xia h4{
		font-size: 11px;
		color: #bdbdbd;
		display: inline-block;
		vertical-align: top;
	}
	.footer-xia h5{
		margin-left: 3px;
		display: inline-block;
		vertical-align: top;
		color: #bdbdbd;
		font-size: 12px;
	}
	.xia-ul{
		width: 230px;
		height: 12px;
		display: inline-block;
		vertical-align: top;
		margin-left: 12px;
	}
	.xia-ul li{
		padding: 0 8px 0;
		border-left: 1px solid #ccc;
		font-size: 12px;
		color: #ababab;
		display: inline-block;
		vertical-align: top;
	}
	.footer-xia p{
		font-size: 12px;
		color: #bdbdbd;
	}
</style>