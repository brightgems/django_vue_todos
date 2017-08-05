<template>
  <div class="view-page">
      <router-view></router-view>
  </div>
</template>
<<style>
html {
  height: 80%;
}

body {
  displ`y: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

body {
	margin: 0px;
	padding: 0px;
	/*background: url(assets/bg1.jpg) center !important;
		background-size: cover;*/
	// background: #1F2D3D;
	font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
	font-size: 14px;
	-webkit-font-smoothing: antialiased;
}

.view-page {
	position: absolute;
	top: 120px;
	bottom: 0px;
	width: 100%;
}
</style>

<script type="text/javascript">

  export default{
    name: 'page',
  }
</script>
