<template>
	<div>
		<div class="header">
			<div class="logo"><img src="../assets/logo.557a1159a7b50cad819b869ebbe5051a.png"/></div>
			<div class="ul">
				<li style="width: 88px;">在线商城</li>
				<li style="width: 104px;">坚果pRO2s</li>
				<li style="width: 82px;">坚果R1</li>
				<li style="width: 130px;">坚果TNT工作站</li>
				<li style="width: 114px;">SmartionOS</li>
				<li style="width: 76px;">欢喜云</li>
				<li style="width: 64px;">论坛</li>
				<li style="width: 100px;">荣誉与奖项</li>
			</div>
			<div class="ren">
				<router-link to="/">
					<img src="../assets/profilephoto.8bafeea9522156520e36033ca3319217.png" />
				</router-link>
			</div>
			<div @mouseover="Over"@mouseout="Out" class="logo2">
				<router-link to="/">
					<img src="../assets/carticon.d57833ca24ea1e7eabfe5448faccf904.png" />
				</router-link>
				
				<div v-show="show" class="yinlogo">
					<img src="../assets/cart-empty.01f4c99a9df22275a7d374be0195adc7.png" />
					<h3>购物车为空</h3>
				</div>
			</div>
			
			<div class="kong"></div>
		</div>
		<div class="header2">
			<div class="header2-xin">
				<ul class="nav" @mouseover="Nav" @mouseout="Tab" >
					<li @mouseover="tab=0"><router-link to="/">首页</router-link></li>
					<li @mouseover="tab=1"><router-link to="/">手机</router-link></li>
					<li @mouseover="tab=2"><router-link to="/">"足迹"系列</router-link></li>
					<li @mouseover="tab=3"><router-link to="/">官方配件</router-link></li>
					<li @mouseover="tab=4"><router-link to="/">畅呼吸系列</router-link></li>
					<li @mouseover="tab=5"><router-link to="/">箱包类</router-link></li>
					<li @mouseover="Tab"><router-link to="/">品牌周边</router-link></li>
					
				</ul>
				<div class="nav2">
					<li><router-link to="/">智能音箱</router-link></li>
					<li><router-link to="/">服务</router-link></li>
					<li><router-link to="/">企业团购</router-link></li>
				</div>
			</div>
			<ol class="nav-box" v-show="nav"@mouseover="Nav"@mouseout="Tab">
				<li v-show="tab==0" class="nav-li">
					<div class="nav-li-xin">
						<div style="margin-left: 100px;" class="nav-li-xin-li">
							<p><router-link to="/">手机</router-link></p>
							<div class="nav-li-item">
								<img src="../assets/b07b9765e272f866da6acda4ee107d88.png" />
								<h1>坚果U系列</h1>
							</div>
							<div class="nav-li-item">
								<img src="../assets/efb9aacaab54e8a7fe5bbfbe8979adcd.png" />
								<h1>坚果R系列</h1>
							</div>
						</div>
						<div class="nav-li-xin-li">
							<p><router-link to="/">官方配件</router-link></p>
							<div class="nav-li-item">
								<img src="../assets/b07b9765e272f866da6acda4ee107d88.png" />
								<h1>坚果U系列</h1>
							</div>
							<div class="nav-li-item">
								<img src="../assets/efb9aacaab54e8a7fe5bbfbe8979adcd.png" />
								<h1>坚果R系列</h1>
							</div>
						</div>
						<div class="nav-li-xin-li">
							<p><router-link to="/"></router-link></p>
							<div class="nav-li-item">
								<img src="../assets/b07b9765e272f866da6acda4ee107d88.png" />
								<h1>坚果U系列</h1>
							</div>
							<div class="nav-li-item">
								<img src="../assets/efb9aacaab54e8a7fe5bbfbe8979adcd.png" />
								<h1>坚果R系列</h1>
							</div>
						</div>
						<div class="nav-li-xin-li">
							<p><router-link to="/">畅呼吸系列</router-link></p>
							<div class="nav-li-item">
								<img src="../assets/b07b9765e272f866da6acda4ee107d88.png" />
								<h1>坚果U系列</h1>
							</div>
							<div class="nav-li-item">
								<img src="../assets/efb9aacaab54e8a7fe5bbfbe8979adcd.png" />
								<h1>坚果R系列</h1>
							</div>
						</div>
						<div class="nav-li-xin-li">
							<p><router-link to="/">服饰箱包</router-link></p>
							<div class="nav-li-item">
								<img src="../assets/b07b9765e272f866da6acda4ee107d88.png" />
								<h1>坚果U系列</h1>
							</div>
							<div class="nav-li-item">
								<img src="../assets/efb9aacaab54e8a7fe5bbfbe8979adcd.png" />
								<h1>坚果R系列</h1>
							</div>
						</div>
					</div>
				</li>
				<li v-show="tab==1" class="nav-li">
					<div class="nav-li-xin">
						<div style="margin-left: 300px;" class="nav-li-xin-li2">
							<img src="../assets/fac4130efc39ed4db697cc8d137890e9.png" />
							<h6>坚果 R1</h6>
							<span><font color="red">￥2999.0</font>起</span>
						</div>
						<div class="nav-li-xin-li2">
							<img src="../assets/fac4130efc39ed4db697cc8d137890e9.png" />
							<h6>坚果 R1</h6>
							<span><font color="red">￥2999.0</font>起</span>
						</div>
						<div class="nav-li-xin-li2">
							<img src="../assets/fac4130efc39ed4db697cc8d137890e9.png" />
							<h6>坚果 R1</h6>
							<span><font color="red">￥2999.0</font>起</span>
						</div>
						<div class="nav-li-xin-li2">
							<img src="../assets/fac4130efc39ed4db697cc8d137890e9.png" />
							<h6>坚果 R1</h6>
							<span><font color="red">￥2999.0</font>起</span>
						</div>
					</div>
				</li>
				<li v-show="tab==2" class="nav-li" >
					<div class="nav-li-xin">
						<div style="margin-left: 100px;" class="nav-li-xin-li2">
							<img src="../assets/fac4130efc39ed4db697cc8d137890e9.png" />
							<h6>坚果 R1</h6>
							<span><font color="red">￥2999.0</font>起</span>
						</div>
						<div class="nav-li-xin-li2">
							<img src="../assets/fac4130efc39ed4db697cc8d137890e9.png" />
							<h6>坚果 R1</h6>
							<span><font color="red">￥2999.0</font>起</span>
						</div>
						<div class="nav-li-xin-li2">
							<img src="../assets/fac4130efc39ed4db697cc8d137890e9.png" />
							<h6>坚果 R1</h6>
							<span><font color="red">￥2999.0</font>起</span>
						</div>
						<div class="nav-li-xin-li2">
							<img src="../assets/fac4130efc39ed4db697cc8d137890e9.png" />
							<h6>坚果 R1</h6>
							<span><font color="red">￥2999.0</font>起</span>
						</div>
						<div class="nav-li-xin-li2">
							<img src="../assets/fac4130efc39ed4db697cc8d137890e9.png" />
							<h6>坚果 R1</h6>
							<span><font color="red">￥2999.0</font>起</span>
						</div>
						<div class="nav-li-xin-li2">
							<img src="../assets/fac4130efc39ed4db697cc8d137890e9.png" />
							<h6>坚果 R1</h6>
							<span><font color="red">￥2999.0</font>起</span>
						</div>
					</div>
				</li>
				<li v-show="tab==3" class="nav-li">
					<div class="nav-li-xin">
						<div class="nav-li-xin-li">
							<p><router-link to="/">手机</router-link></p>
							<div class="nav-li-item">
								<img src="../assets/b07b9765e272f866da6acda4ee107d88.png" />
								<h1>坚果U系列</h1>
							</div>
							<div class="nav-li-item">
								<img src="../assets/efb9aacaab54e8a7fe5bbfbe8979adcd.png" />
								<h1>坚果R系列</h1>
							</div>
						</div>
						<div class="nav-li-xin-li">
							<p><router-link to="/">官方配件</router-link></p>
							<div class="nav-li-item">
								<img src="../assets/b07b9765e272f866da6acda4ee107d88.png" />
								<h1>坚果U系列</h1>
							</div>
							<div class="nav-li-item">
								<img src="../assets/efb9aacaab54e8a7fe5bbfbe8979adcd.png" />
								<h1>坚果R系列</h1>
							</div>
						</div>
						<div class="nav-li-xin-li">
							<p><router-link to="/"></router-link></p>
							<div class="nav-li-item">
								<img src="../assets/b07b9765e272f866da6acda4ee107d88.png" />
								<h1>坚果U系列</h1>
							</div>
							<div class="nav-li-item">
								<img src="../assets/efb9aacaab54e8a7fe5bbfbe8979adcd.png" />
								<h1>坚果R系列</h1>
							</div>
						</div>
						<div class="nav-li-xin-li">
							<p><router-link to="/">畅呼吸系列</router-link></p>
							<div class="nav-li-item">
								<img src="../assets/b07b9765e272f866da6acda4ee107d88.png" />
								<h1>坚果U系列</h1>
							</div>
							<div class="nav-li-item">
								<img src="../assets/efb9aacaab54e8a7fe5bbfbe8979adcd.png" />
								<h1>坚果R系列</h1>
							</div>
						</div>
						<div class="nav-li-xin-li">
							<p><router-link to="/">服饰箱包</router-link></p>
							<div class="nav-li-item">
								<img src="../assets/b07b9765e272f866da6acda4ee107d88.png" />
								<h1>坚果U系列</h1>
							</div>
							<div class="nav-li-item">
								<img src="../assets/efb9aacaab54e8a7fe5bbfbe8979adcd.png" />
								<h1>坚果R系列</h1>
							</div>
						</div>
						<div class="nav-li-xin-li">
							<p><router-link to="/">服饰箱包</router-link></p>
							<div class="nav-li-item">
								<img src="../assets/b07b9765e272f866da6acda4ee107d88.png" />
								<h1>坚果U系列</h1>
							</div>
							<div class="nav-li-item">
								<img src="../assets/efb9aacaab54e8a7fe5bbfbe8979adcd.png" />
								<h1>坚果R系列</h1>
							</div>
						</div>
					</div>
				</li>
				<li v-show="tab==4" class="nav-li">
					<div class="nav-li-xin">
						<div style="margin-left: 100px;" class="nav-li-xin-li2">
							<img src="../assets/fac4130efc39ed4db697cc8d137890e9.png" />
							<h6>坚果 R1</h6>
							<span><font color="red">￥2999.0</font>起</span>
						</div>
						<div class="nav-li-xin-li2">
							<img src="../assets/fac4130efc39ed4db697cc8d137890e9.png" />
							<h6>坚果 R1</h6>
							<span><font color="red">￥2999.0</font>起</span>
						</div>
						<div class="nav-li-xin-li2">
							<img src="../assets/fac4130efc39ed4db697cc8d137890e9.png" />
							<h6>坚果 R1</h6>
							<span><font color="red">￥2999.0</font>起</span>
						</div>
						<div class="nav-li-xin-li2">
							<img src="../assets/fac4130efc39ed4db697cc8d137890e9.png" />
							<h6>坚果 R1</h6>
							<span><font color="red">￥2999.0</font>起</span>
						</div>
						<div class="nav-li-xin-li2">
							<img src="../assets/fac4130efc39ed4db697cc8d137890e9.png" />
							<h6>坚果 R1</h6>
							<span><font color="red">￥2999.0</font>起</span>
						</div>
						<div class="nav-li-xin-li2">
							<img src="../assets/fac4130efc39ed4db697cc8d137890e9.png" />
							<h6>坚果 R1</h6>
							<span><font color="red">￥2999.0</font>起</span>
						</div>
					</div>
				</li>					
				<li v-show="tab==5" class="nav-li" >
					<div class="nav-li-xin">
						<div class="nav-li-xin-li">
							<p><router-link to="/">手机</router-link></p>
							<div class="nav-li-item">
								<img src="../assets/b07b9765e272f866da6acda4ee107d88.png" />
								<h1>坚果U系列</h1>
							</div>
							<div class="nav-li-item">
								<img src="../assets/efb9aacaab54e8a7fe5bbfbe8979adcd.png" />
								<h1>坚果R系列</h1>
							</div>
						</div>
						<div class="nav-li-xin-li">
							<p><router-link to="/">官方配件</router-link></p>
							<div class="nav-li-item">
								<img src="../assets/b07b9765e272f866da6acda4ee107d88.png" />
								<h1>坚果U系列</h1>
							</div>
							<div class="nav-li-item">
								<img src="../assets/efb9aacaab54e8a7fe5bbfbe8979adcd.png" />
								<h1>坚果R系列</h1>
							</div>
						</div>
						<div class="nav-li-xin-li">
							<p><router-link to="/"></router-link></p>
							<div class="nav-li-item">
								<img src="../assets/b07b9765e272f866da6acda4ee107d88.png" />
								<h1>坚果U系列</h1>
							</div>
							<div class="nav-li-item">
								<img src="../assets/efb9aacaab54e8a7fe5bbfbe8979adcd.png" />
								<h1>坚果R系列</h1>
							</div>
						</div>
						<div class="nav-li-xin-li">
							<p><router-link to="/">畅呼吸系列</router-link></p>
							<div class="nav-li-item">
								<img src="../assets/b07b9765e272f866da6acda4ee107d88.png" />
								<h1>坚果U系列</h1>
							</div>
							<div class="nav-li-item">
								<img src="../assets/efb9aacaab54e8a7fe5bbfbe8979adcd.png" />
								<h1>坚果R系列</h1>
							</div>
						</div>
						<div class="nav-li-xin-li">
							<p><router-link to="/">服饰箱包</router-link></p>
							<div class="nav-li-item">
								<img src="../assets/b07b9765e272f866da6acda4ee107d88.png" />
								<h1>坚果U系列</h1>
							</div>
							<div class="nav-li-item">
								<img src="../assets/efb9aacaab54e8a7fe5bbfbe8979adcd.png" />
								<h1>坚果R系列</h1>
							</div>
						</div>
						<div class="nav-li-xin-li">
							<p><router-link to="/">服饰箱包</router-link></p>
							<div class="nav-li-item">
								<img src="../assets/b07b9765e272f866da6acda4ee107d88.png" />
								<h1>坚果U系列</h1>
							</div>
							<div class="nav-li-item">
								<img src="../assets/efb9aacaab54e8a7fe5bbfbe8979adcd.png" />
								<h1>坚果R系列</h1>
							</div>
						</div>
					</div>
				</li>
			</ol>
		</div>
		<div class="lun">
			<ul class="lun-ul">
				<li>
					<img src="../assets/PC2019011701.png" />
				</li>
				<li>
					<img src="../assets/tidiaozhibo1.png" />
				</li>
			</ul>
			<ol>
				<li></li>
				<li></li>
			</ol>
		</div>
		<div class="he">
			<div class="he-zi">
				<router-link to="/">
					<img src="../assets/3c9489bedef473d26af2ffa15d4b114f.jpg" />
				</router-link>
			</div>
			<div class="he-zi">
				<router-link to="/">
					<img src="../assets/3c9489bedef473d26af2ffa15d4b114f.jpg" />
				</router-link>
			</div>
			<div class="he-zi">
				<router-link to="/">
					<img src="../assets/3c9489bedef473d26af2ffa15d4b114f.jpg" />
				</router-link>
			</div>
			<div class="he-zi"style="margin-right: 0px;">
				<router-link to="/">
					<img src="../assets/3c9489bedef473d26af2ffa15d4b114f.jpg" />
				</router-link>
			</div>
		</div>
		<div class="box1">
			<ul class="shang">
				<h5>热门商品</h5>
			</ul>
			<ol class="shangtu">
				<li>
					<div class="shangtu-1">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1" style="border-right: none;">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
				</li>
			</ol>
		</div>
		<div class="box2">
			<ul class="shang">
				<h5>坚果手机及配件</h5>
			</ul>
			<ol class="shangtu">
				<li>
					<div class="box2-tu">
						<!--<img src="../assets/896f85d0ee0669ee1fdd8efc19bffc57.jpg" />-->
					</div>
					<div class="shangtu-1">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1"style="border-top:1px solid rgba(0,0,0,.14);">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1" style="border-top:1px solid rgba(0,0,0,.14);">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1" style="border-top:1px solid rgba(0,0,0,.14);">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1" style="border-right: none;border-top:1px solid rgba(0,0,0,.14);">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
				</li>
			</ol>
		</div>
		<div class="box2">
			<ul class="shang">
				<h5>官方精选配件</h5>
			</ul>
			<ol class="shangtu">
				<li>
					<div class="box3-tu">
						<!--<img src="../assets/896f85d0ee0669ee1fdd8efc19bffc57.jpg" />-->
					</div>
					<div class="shangtu-1">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1"style="border-top:1px solid rgba(0,0,0,.14);">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1" style="border-top:1px solid rgba(0,0,0,.14);">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1" style="border-top:1px solid rgba(0,0,0,.14);">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1" style="border-right: none;border-top:1px solid rgba(0,0,0,.14);">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
				</li>
			</ol>
		</div>
		<div class="box2">
			<ul class="shang">
				<h5>净化器及配件</h5>
			</ul>
			<ol class="shangtu">
				<li>
					<div class="box4-tu">
						<!--<img src="../assets/896f85d0ee0669ee1fdd8efc19bffc57.jpg" />-->
					</div>
					<div class="shangtu-1">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1"style="border-top:1px solid rgba(0,0,0,.14);">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1" style="border-top:1px solid rgba(0,0,0,.14);">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1" style="border-top:1px solid rgba(0,0,0,.14);">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1" style="border-right: none;border-top:1px solid rgba(0,0,0,.14);">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
				</li>
			</ol>
		</div>
		<div class="box2">
			<ul class="shang">
				<h5>品牌周边</h5>
			</ul>
			<ol class="shangtu">
				<li>
					<div class="box5-tu">
						<!--<img src="../assets/896f85d0ee0669ee1fdd8efc19bffc57.jpg" />-->
					</div>
					<div class="shangtu-1">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1"style="border-top:1px solid rgba(0,0,0,.14);">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1" style="border-top:1px solid rgba(0,0,0,.14);">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1" style="border-top:1px solid rgba(0,0,0,.14);">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1" style="border-right: none;border-top:1px solid rgba(0,0,0,.14);">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
				</li>
			</ol>
		</div>
		<div class="box2">
			<ul class="shang">
				<h5>品牌精选</h5>
			</ul>
			<ol class="shangtu">
				<li>
					<div class="box6-tu">
						<!--<img src="../assets/896f85d0ee0669ee1fdd8efc19bffc57.jpg" />-->
					</div>
					<div class="shangtu-1">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1"style="border-top:1px solid rgba(0,0,0,.14);">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1" style="border-top:1px solid rgba(0,0,0,.14);">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1" style="border-top:1px solid rgba(0,0,0,.14);">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
					<div class="shangtu-1" style="border-right: none;border-top:1px solid rgba(0,0,0,.14);">
						<router-link to="/">
							<ul class="tu1-ul">
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
								<li>
									<img src="../assets/2f2afca6f88e3aef5b1f332ea0c1d65a.png" />
								</li>
							</ul>
							<h4>坚果Pro 2S</h4>
							<h6>双系统，无限屏</h6>
							<p>￥2,298.00</p>
						</router-link>
					</div>
				</li>
			</ol>
		</div>
		<div class="he2">
			<div class="he-zi">
				<router-link to="/">
					<img src="../assets/3c9489bedef473d26af2ffa15d4b114f.jpg" />
				</router-link>
			</div>
			<div class="he-zi">
				<router-link to="/">
					<img src="../assets/3c9489bedef473d26af2ffa15d4b114f.jpg" />
				</router-link>
			</div>
			<div class="he-zi">
				<router-link to="/">
					<img src="../assets/3c9489bedef473d26af2ffa15d4b114f.jpg" />
				</router-link>
			</div>
			<div class="he-zi"style="margin-right: 0px;">
				<router-link to="/">
					<img src="../assets/3c9489bedef473d26af2ffa15d4b114f.jpg" />
				</router-link>
			</div>
		</div>
		<div class="luntanbox">
			<ul class="luntanshang">
				<h5>论坛精选</h5>
			</ul>
			<div class="luntan">
				<div class="luntan-1">
					<img src="../assets/6ec05c65c0d08c1b83c346f4b779a8c3.png" />
					<h5>[开箱]坚果Pro 2S内敛骚蓝惊艳...</h5>
					<p>内敛骚蓝，惊艳炫光</p>
					<span>阅读全文  ></span>
				</div>
				<div class="luntan-1">
					<img src="../assets/6ec05c65c0d08c1b83c346f4b779a8c3.png" />
					<h5>[开箱]坚果Pro 2S内敛骚蓝惊艳...</h5>
					<p>内敛骚蓝，惊艳炫光</p>
					<span>阅读全文  ></span>
				</div>
				<div class="luntan-1">
					<img src="../assets/6ec05c65c0d08c1b83c346f4b779a8c3.png" />
					<h5>[开箱]坚果Pro 2S内敛骚蓝惊艳...</h5>
					<p>内敛骚蓝，惊艳炫光</p>
					<span>阅读全文  ></span>
				</div>
				<div class="luntan-1">
					<img src="../assets/6ec05c65c0d08c1b83c346f4b779a8c3.png" />
					<h5>[开箱]坚果Pro 2S内敛骚蓝惊艳...</h5>
					<p>内敛骚蓝，惊艳炫光</p>
					<span>阅读全文  ></span>
				</div>
			</div>
		</div>
		<jiao></jiao>
	</div>
</template>

<script>
	import Jiao from "@/views/footer"
	export default{
		components:{Jiao},
		data(){
			return{
				show:false,
				tab:0,
				nav:false
			}
		},
		methods:{
			Over(){
				this.show=true;
			},
			Out(){
				this.show=false;
			},
			Tab(){
				this.nav=false;
			},
			Nav(){
				this.nav=true;
			}
			
		}
	}
</script>

<style>
	.logo{
		width: 18px;
		height: 18px;
		margin-left: 21px;
		padding: 13px 0 0;
		float: left;
	}
	.logo img{
		width: 100%;
		height: 100%;
	}
	.header{
		width: 100%;
		height: 45px;
		background: black;
		display: inline-block;
	}
	.ul{
		width: 760px;
		height: 28px;
		list-style: none;
		margin: 9px auto 0;
	}
	
	.ul li{
		display: inline-block;
		color: #e5e5e5;
		font-size: 12px;
		line-height: 28px;
		text-align: center;
		width:auto;
		float: left;
		
	}
	.ul li:hover{
		color: white;
	}
	.ren{
		width: 20px;
		height: 20px;
		float: right;
		margin: -23px 63px 0 0;
		background: saddlebrown;
	}
	.ren img{
		width: 100%;
		height: 100%;
	}
	.logo2{
		width: 21px;
		height: 20px;
		background: saddlebrown;
		float: right;
		margin: -23px 20px 0 0;
	}
	.logo2 img{
		width: 100%;
		height: 100%;
	}
	.kong{
		clear: both;
	}
	.yinlogo{
		width: 300px;
		height: 250px;
		background: white;
		box-shadow: 2px 2px 2px gainsboro;
		border-radius: 10px;
		margin-left: -278px;
		margin-top: 9px;
		display: inline-block;
		text-align: center;
		position: relative;
		z-index: 100;
	}
	.yinlogo img{
		width: 80px;
		height: 60px;
		display: block;
		margin: 60px auto 0;
	}
	.yinlogi h3{
		margin: 0 auto;
	}
	.active:{
		color: lightskyblue;
	}
	.header2{
		width: 100%;
		height: 75px;
		display: inline-block;
		background: whitesmoke;
		box-shadow: 1px 1px 1px silver;
	}
	.header2-xin{
		width: 1220px;
		height: 28px;
		margin: 0 auto;
		padding: 23px 0;
	}
	.nav{
		width: auto;
		height: 50px;
		display: inline-block;
		vertical-align: top;
	}
	.nav2{
		width: auto;
		height: 50px;
		display: inline-block;
		vertical-align: top;
	}
	.nav2 li{
		width: auto;
		padding: 0px 11px;
		height: 28px;
		display: inline-block;
		font-size: 14px;
	}
	.nav li{
		width: auto;
		padding: 0px 11px;
		height: 28px;
		display: inline-block;
		font-size: 14px;
	}
	.nav-box{
		width: 100%;
		overflow: hidden;
		background: white;
		/*animation: dong 1s inherit;*/
		height: 266px;
		position: absolute;
		z-index: 9;
	}
	/*@keyframes  dong{
		0%{
			height: 0px;
		}
		100%{
			height: 266px;
		}
	}*/
	.nav-li{
		width: 100%;
		height: 266px;
	}
	.nav-li-xin{
		width: 1220px;
		height: 266px;
		margin: 0 auto;
		font-size: 0;
	}
	.nav-li-xin-li{
		width: 202px;
		height: 238px;
		padding-top: 28px;
		display: inline-block;
		vertical-align: top;
	}
	.nav-li-xin-li p{
		color:black;
		width: auto;
		height: 20px;
		opacity: 1;
		font-size: 12px;
		display: block;
	}
	.nav-li-item{
		width: 180px;
		height: 40px;
		margin-top: 10px;
	}
	.nav-li-item img{
		width: 40px;
		height: 40px;
		display: inline-block;
		vertical-align: top;
	}
	.nav-li-item h1{
		width: 130px;
		height: 40px;
		color: rgba(0,0,0,.8);
		display: inline-block;
		vertical-align: top;
		font-size: 14px;
		line-height: 40px;
		
	}
	.nav-li-xin-li2{
		width: 126px;
		height: 222px;
		padding-top: 28px;
		display: inline-block;
		vertical-align: top;
		text-align: center;
		margin-right: 30px;
	}
	.nav-li-xin-li2 img{
		width: 126px;
		height: 126px;
		display: block;
	}
	.nav-li-xin-li2 h6{
		width: 126px;
		height: 16px;
		margin: 16px 0 8px;
		color: #333;
		font-size: 14px;
		font-weight: 700;
	}
	.nav-li-xin-li2 span{
		color: gray;
		font-size: 12px;
	}
	.lun{
		width: 1218px;
		height: 553px;
		margin: 0 auto;
		overflow: hidden;
		border-radius: 10px;
	}
	.lun-ul{
		width: 2436px;
		height: 553px;
		font-size: 0px;
	}
	.lun-ul li{
		display: inline-block;
		vertical-align: top;
	}
	.lun-ul img{
		width: 1218px;
		height: 553px;
	}
	.he{
		width: 1218px;
		height: 202px;
		margin: 0 auto;
		font-size: 0px;
		border-radius: 10px;
		overflow: hidden;
	}
	.he-zi:hover{
		box-shadow: 0px 2px 10px 3px gainsboro inset!important;
	    border-radius: 5px;
	}
	.he-zi{
		width: 302px;
		height: 202px;
		display: inline-block;
		vertical-align: top;
		margin-right: 2px;
	}
	.he-zi img{
		width: 302px;
		height: 202px;
	}
	.box1{
		width: 1220px;
		height: 491px;
		margin: 25px auto 0;
		border:1px solid rgba(0,0,0,.14);
		border-radius: 10px;
	} 
	.shang{
		width: 1218px;
		height: 61px;
		margin: 0 auto;
		line-height: 61px;
		background: white;
		opacity: 0.6;
		border-bottom:1px solid rgba(0,0,0,.14);
	}
	.shang h5{
		margin-left: 25px;
		font-size: 20px;
	}
	.shangtu{
		width: 1218px;
		height: 429px;
		margin: 0 auto;
		font-size: 0px;
	}
	.shangtu-1{
		width: 303.6px;
		height: 429px;
		display: inline-block;
		vertical-align: top;
		text-align: center;
		background: white;
		border-right:1px solid rgba(0,0,0,.14);
	}
	.shangtu-1:hover{
		box-shadow: 0px 4px 10px 5px gainsboro inset;
	    border-radius: 5px;
	}
	.tu1-ul{
		width: 215px;
		height: 216px;
		margin: 0 auto;
		padding: 45px 0 20px;
	}
	.tu1-ul li{
		width: 215px;
		height: 216px;
		position: absolute;
	}
	.tu1-ul img{
		width: 215px;
		height: 216px;
	}
	.shangtu-1 h4{
		width: 304px;
		font-size: 14px;
		color: black;
	}
	.shangtu-1 h6{
		font-size: 12px;
		color: #999;
		margin: 15px;
	}
	.shangtu-1 p{
		font-size: 20px;
		color: #d44d44;
		margin-top: 20px;
	}
	.box2{
		width: 1220px;
		height: 920px;
		margin: 25px auto 0;
		border:1px solid rgba(0,0,0,.14);
		border-radius: 10px;
		overflow: hidden;
	}
	.box2-tu{
		width: 608px;
		height: 429px;
		display: inline-block;
		vertical-align: top;
		background: url(../assets/896f85d0ee0669ee1fdd8efc19bffc57.jpg)no-repeat;
	}
	.box2-tu:hover{
		box-shadow: 0px 2px 10px 3px gainsboro inset;
	    border-radius: 5px;
	}
	.box3-tu{
		width: 608px;
		height: 429px;
		display: inline-block;
		vertical-align: top;
		background:url(../assets/245982d378f254a284fd5fb825156d69.jpg)  no-repeat;
	}
	.box3-tu:hover{
		box-shadow: 0px 2px 10px 3px gainsboro inset;
	    border-radius: 5px;
	}
	.box4-tu{
		width: 608px;
		height: 429px;
		display: inline-block;
		vertical-align: top;
		background: url(../assets/edcf6641a401a8ef07896dcd469a3c1e.jpg) no-repeat;
	}
	.box4-tu:hover{
		box-shadow: 0px 2px 10px 3px gainsboro inset;
	    border-radius: 5px;
	}
	.box5-tu{
		width: 608px;
		height: 429px;
		display: inline-block;
		vertical-align: top;
		background:url(../assets/img3.png) no-repeat;
	}
	.box5-tu:hover{
		box-shadow: 0px 2px 10px 3px gainsboro inset;
	    border-radius: 5px;
	}
	.box6-tu{
		width: 608px;
		height: 429px;
		display: inline-block;
		vertical-align: top;
		background:url(../assets/befb01aec2e4bf88b3880ca8f082f6e0.png) no-repeat;
	}
	.box6-tu:hover{
		box-shadow: 0px 2px 10px 3px gainsboro inset;
	    border-radius: 5px;
	}
	.he2{
		width: 1218px;
		height: 202px;
		margin: 25px auto 0;
		font-size: 0px;
		border-radius: 10px;
		overflow: hidden;
	}
	.luntanbox{
		width: 1220px;
		height: 369px;
		margin: 25px auto 0;
		border:1px solid rgba(0,0,0,.14);
		border-radius: 10px;
	} 
	.luntanshang{
		width: 1218px;
		height: 61px;
		margin: 0 auto;
		line-height: 61px;
		background: white;
		opacity: 0.6;
		border-bottom:1px solid rgba(0,0,0,.14);
	}
	.luntanshang h5{
		margin-left: 25px;
		font-size: 20px;
	}
	.luntan{
		width: 1218px;
		height: 306px;
		margin: 0 auto;
		font-size: 0px;
	}
	.luntan-1{
		width: 243.3px;
		height: 246px;
		padding: 30px;
		display: inline-block;
		vertical-align: top;
		background: white;
		border-right:1px solid rgba(0,0,0,.14);
	}
	.luntan-1:hover{
		box-shadow: 0px 4px 10px 5px gainsboro inset;
	    border-radius: 5px;
	}
	.luntan-1 img{
		width: 246px;
		height: 138px;
	}
	.luntan-1 h5{
		margin: 30px 0 12px;
		color: black;
		font-size: 15px;
	}
	.luntan-1 p{
		color: #999;
		font-size: 12px;
	}
	.luntan-1 span{
		display: block;
		color: #5079d9;
		font-size: 12px;
		margin-top:12px;
	}
	
	
</style>