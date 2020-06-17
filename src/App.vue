<template>
  <div id="app">
    <div class="shade" v-show="showImgkey" @click="hideImg" @touchmove="touchmove">
      <img :src="activeImgSrc" alt class="show-img" />
      <img src="./assets/img/loading.gif" alt="loading" class="loading" />
    </div>
    <header>
      <div :class="{'active' : filterIndex == 1}" @click="filter(1)">海外注册</div>
      <div :class="{'active' : filterIndex == 2}" @click="filter(2)">发明专利</div>
      <div :class="{'active' : filterIndex == 3}" @click="filter(3)">实用新型</div>
      <div :class="{'active' : filterIndex == 4}" @click="filter(4)">外观设计</div>
    </header>
    <main>
      <div class="search">
        <input type="text" placeholder="请输出查询专利名称" v-model="searchValue" @input="input" />
        <img src="./assets/img/search@2x.png" alt="搜索" @click="search" />
      </div>
      <div class="title">
        <img src="./assets/img/title@2x.png" alt />
        <h3>{{filterTitle}}</h3>
      </div>
      <div class="none" v-show="none">抱歉，没有找到你想要的内容</div>
      <ul class="img-wrapper">
        <li
          class="img-box box-one"
          v-show="filterIndex == 0 || filterIndex == 1 || (item.name.indexOf(searchValue) != -1 && searchValue != '')"
          v-for="(item, index) in imgList[0].img"
          :key="item.name + index"
        >
          <img v-lazy="item.imgSrc" alt="item.name" @click="showImg(item, imgList[0].title)" />
          <p class="name">{{item.name}}</p>
        </li>
        <li
          class="img-box"
          v-show="filterIndex == 0 || filterIndex == 2 || (item.name.indexOf(searchValue) != -1 && searchValue != '')"
          v-for="(item, index) in imgList[1].img"
          :key="item.name + index"
        >
          <img v-lazy="item.imgSrc" alt="item.name" @click="showImg(item, imgList[1].title)" />
          <p class="name">{{item.name}}</p>
        </li>
        <li
          class="img-box"
          v-show="filterIndex == 0 || filterIndex == 3 || (item.name.indexOf(searchValue) != -1 && searchValue != '')"
          v-for="(item, index) in imgList[2].img"
          :key="item.name + index"
        >
          <img v-lazy="item.imgSrc" alt="item.name" @click="showImg(item, imgList[2].title)" />
          <p class="name">{{item.name}}</p>
        </li>
        <li
          class="img-box"
          v-show="filterIndex == 0 || filterIndex == 4 || (item.name.indexOf(searchValue) != -1 && searchValue != '')"
          v-for="(item, index) in imgList[3].img"
          :key="item.name + index"
        >
          <img v-lazy="item.imgSrc" alt="item.name" @click="showImg(item, imgList[3].title)" />
          <p class="name">{{item.name}}</p>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
const baseImgUrl = [
  "./assets/img/海外注册/",
  "./assets/img/发明专利/",
  "./assets/img/实用新型/",
  "./assets/img/外观设计/"
];

export default {
  name: "app",
  directives: {
    updateImg: {
      componentUpdated: (el, binding, vnode) => {
        // 发生在指令所在组件和子组件更新之后
        let height = el.offsetHeight;
        vnode.context.none = height == 0 ? true : false;
      }
    }
  },
  data() {
    return {
      filterIndex: 0,
      imgBaseUrl: "",
      searchValue: "",
      showImgkey: false,
      activeImgSrc: "",
      none: false,
      filterList: [
        { title: "全部专利" },
        { title: "海外注册" },
        { title: "发明专利" },
        { title: "实用新型" },
        { title: "外观设计" },
        { title: "搜索结果" }
      ],
      imgList: [
        {
          classify: 1,
          title: "海外注册",
          img: [
            {
              name:
                "DRIVE CONTROL DEVICE AND METHOD OF ELECTRONIC EXPANSION VALVE",
              imgSrc: require(`${baseImgUrl[0]}1.jpg`)
            },
            {
              name: "RADIANT FLOOR HEATING MULTI-SPLIT AIR CONDITIONING SYSTEM",
              imgSrc: require(`${baseImgUrl[0]}2.jpg`)
            },
            {
              name:
                "Drive Control Device and Method for Electronic Expansion Valve",
              imgSrc: require(`${baseImgUrl[0]}3.jpg`)
            },
            {
              name:
                "METHOD AND DEVICE FOR OPTIMIZING OPERATIONAL CONTROL OF COMPRESSORS IN MULTI-COUPLE UNIT AIR-CONDITIONING SYSTEM",
              imgSrc: require(`${baseImgUrl[0]}4.jpg`)
            },

            {
              name:
                "MULTI-COUPLED HEAT PUMP AIR-CONDITIONING SYSTEM AND METHOD OF CONTROLLING MULTICOUPLED HEAT PUMP AIRCONDITIONING SYSTEM",
              imgSrc: require(`${baseImgUrl[0]}5.jpg`)
            },
            {
              name:
                "HEAT RECOVERY VARIABLE-FREQUENCY MULTI-SPLIT HEAT PUMP SYSTEM AND CONTROL METHOD THEREOF",
              imgSrc: require(`${baseImgUrl[0]}6.jpg`)
            },
            {
              name:
                "HEAT RECOVERY VARIABLE-FREQUENCY MULTI-SPLIT HEAT PUMP SYSTEM AND CONTROL METHOD THEREOF",
              imgSrc: require(`${baseImgUrl[0]}7.jpg`)
            }
          ]
        },
        {
          classify: 2,
          title: "发明专利",
          img: [
            {
              name: "一种热泵及热泵控制方法",
              imgSrc: require(`${baseImgUrl[1]}1.jpg`)
            },
            {
              name: "一种空调器送风的控制方法、装置及空调器",
              imgSrc: require(`${baseImgUrl[1]}2.jpg`)
            },
            {
              name: "一种多联机控制系统",
              imgSrc: require(`${baseImgUrl[1]}3.jpg`)
            },
            {
              name: "一种加热装置及其控制方法",
              imgSrc: require(`${baseImgUrl[1]}4.jpg`)
            },
            {
              name: "一种换热循环系统及其控制方法和空调",
              imgSrc: require(`${baseImgUrl[1]}5.jpg`)
            },
            {
              name: "一种嵌入式空调器及其安装工艺",
              imgSrc: require(`${baseImgUrl[1]}6.jpg`)
            },
            {
              name: "一种空调室内机",
              imgSrc: require(`${baseImgUrl[1]}7.jpg`)
            },
            {
              name: "风力机以及空调器",
              imgSrc: require(`${baseImgUrl[1]}8.jpg`)
            },
            {
              name: "一种空调室外机出风结构及空调室外机",
              imgSrc: require(`${baseImgUrl[1]}9.jpg`)
            },
            {
              name: "一种嵌入式空调室内机",
              imgSrc: require(`${baseImgUrl[1]}10.jpg`)
            },
            {
              name: "一种电子膨胀阀的控制方法及装置",
              imgSrc: require(`${baseImgUrl[1]}11.jpg`)
            },
            {
              name: "一种空调出风结构",
              imgSrc: require(`${baseImgUrl[1]}12.jpg`)
            },
            {
              name: "一种协议转换方法、装置及控制系统",
              imgSrc: require(`${baseImgUrl[1]}13.jpg`)
            },
            {
              name: "一种控制方法、通风装置及空调系统",
              imgSrc: require(`${baseImgUrl[1]}14.jpg`)
            },
            {
              name: "一种室内机的控制方法、室内机及空调器",
              imgSrc: require(`${baseImgUrl[1]}15.jpg`)
            },
            {
              name: "一种热泵水暖系统干烧判定方法及装置",
              imgSrc: require(`${baseImgUrl[1]}16.jpg`)
            },
            {
              name: "一种多联式空调机组的控制方法及控制装置",
              imgSrc: require(`${baseImgUrl[1]}17.jpg`)
            },
            {
              name: "空调室内机的风机控制方法及装置和室内机",
              imgSrc: require(`${baseImgUrl[1]}18.jpg`)
            },
            {
              name: "一种风管机",
              imgSrc: require(`${baseImgUrl[1]}19.jpg`)
            },
            {
              name: "一种消音器",
              imgSrc: require(`${baseImgUrl[1]}20.jpg`)
            },
            {
              name: "一种联动环境调节系统及其控制方法",
              imgSrc: require(`${baseImgUrl[1]}21.jpg`)
            },
            {
              name: "多联机空调系统的控制方法及室内机",
              imgSrc: require(`${baseImgUrl[1]}22.jpg`)
            },
            {
              name: "采用喷射器的空调热泵系统、空调器及空调器控制方法",
              imgSrc: require(`${baseImgUrl[1]}23.jpg`)
            },
            {
              name: "一种制冷剂填充的控制方法及空调",
              imgSrc: require(`${baseImgUrl[1]}24.jpg`)
            },
            {
              name: "一种基于热磁发电的空调系统及控制方法",
              imgSrc: require(`${baseImgUrl[1]}25.jpg`)
            },
            {
              name: "一种热泵系统用气液分离器及其制作方法",
              imgSrc: require(`${baseImgUrl[1]}26.jpg`)
            },
            {
              name: "一种空调控制方法及控制装置",
              imgSrc: require(`${baseImgUrl[1]}27.jpg`)
            },
            {
              name: "一种空气源冷热水热泵系统",
              imgSrc: require(`${baseImgUrl[1]}28.jpg`)
            },
            {
              name: "压缩机吸气管路组件及空调室外机",
              imgSrc: require(`${baseImgUrl[1]}29.jpg`)
            },
            {
              name: "一种具备喷射器的多联机空调系统及其控制方法",
              imgSrc: require(`${baseImgUrl[1]}30.jpg`)
            },
            {
              name: "一种空调室外机出风结构",
              imgSrc: require(`${baseImgUrl[1]}31.jpg`)
            },
            {
              name: "一种空调节能控制方法和装置",
              imgSrc: require(`${baseImgUrl[1]}32.jpg`)
            },
            {
              name: "一种冷量回收节能空调系统及控制方法",
              imgSrc: require(`${baseImgUrl[1]}33.jpg`)
            },
            {
              name: "一种隔离电路及隔离电路控制方法",
              imgSrc: require(`${baseImgUrl[1]}34.jpg`)
            },
            {
              name: "一种室内机及其控制方法",
              imgSrc: require(`${baseImgUrl[1]}35.jpg`)
            },
            {
              name: "一种强热型室外机、热泵系统及其控制方法",
              imgSrc: require(`${baseImgUrl[1]}36.jpg`)
            },
            {
              name: "一种空调节能方法、装置及系统",
              imgSrc: require(`${baseImgUrl[1]}37.jpg`)
            },
            {
              name: "一种油气分离装置",
              imgSrc: require(`${baseImgUrl[1]}38.jpg`)
            },
            {
              name: "一种空调舒适度控制方法和装置",
              imgSrc: require(`${baseImgUrl[1]}39.jpg`)
            },
            {
              name: "空调器中室内机的导风板的控制方法、室内机及空调器",
              imgSrc: require(`${baseImgUrl[1]}40.jpg`)
            },
            {
              name: "一种冰蓄冷空调及冰蓄冷方法",
              imgSrc: require(`${baseImgUrl[1]}41.jpg`)
            },
            {
              name: "一种冷媒泄露的检测装置、方法和空调",
              imgSrc: require(`${baseImgUrl[1]}42.jpg`)
            },
            {
              name: "一种电子膨胀阀的开度控制方法、室内机、室外机及空调",
              imgSrc: require(`${baseImgUrl[1]}43.jpg`)
            },
            {
              name: "一种空调测试中模拟值输入方法及空调测试装置",
              imgSrc: require(`${baseImgUrl[1]}44.jpg`)
            },
            {
              name: "一种空调室内机",
              imgSrc: require(`${baseImgUrl[1]}45.jpg`)
            },
            {
              name: "一种蓄热室外机、热泵系统及其控制方法",
              imgSrc: require(`${baseImgUrl[1]}46.jpg`)
            },
            {
              name: "一种自然风控制方法和装置",
              imgSrc: require(`${baseImgUrl[1]}47.jpg`)
            },
            {
              name: "一种中央空调的远程控制系统及其配置方法",
              imgSrc: require(`${baseImgUrl[1]}48.jpg`)
            },
            {
              name: "一种导风板的控制方法和控制装置",
              imgSrc: require(`${baseImgUrl[1]}49.jpg`)
            },
            {
              name: "一种降低空调噪音的室内机",
              imgSrc: require(`${baseImgUrl[1]}50.jpg`)
            },
            {
              name: "一种热泵系统结霜量自动检测的除霜控制方法及装置",
              imgSrc: require(`${baseImgUrl[1]}51.jpg`)
            },
            {
              name: "一种蓄能组件及多联机空调系统",
              imgSrc: require(`${baseImgUrl[1]}52.jpg`)
            },
            {
              name: "一种报警控制方法、装置及空调控制器",
              imgSrc: require(`${baseImgUrl[1]}53.jpg`)
            },
            {
              name: "一种空调器室内机、室外机及空调器",
              imgSrc: require(`${baseImgUrl[1]}54.jpg`)
            },
            {
              name: "一种分集水控制方法、装置及地暖供热系统",
              imgSrc: require(`${baseImgUrl[1]}55.jpg`)
            },
            {
              name: "一种室外机、除霜控制系统及方法",
              imgSrc: require(`${baseImgUrl[1]}56.jpg`)
            },
            {
              name: "一种压缩机频率分配方法及模块式空调",
              imgSrc: require(`${baseImgUrl[1]}57.jpg`)
            },
            {
              name: "一种四通换向阀及空调系统的室外机",
              imgSrc: require(`${baseImgUrl[1]}58.jpg`)
            },
            {
              name: "一种温度控制方法和装置",
              imgSrc: require(`${baseImgUrl[1]}59.jpg`)
            },
            {
              name: "一种空调地址的设定方法和装置",
              imgSrc: require(`${baseImgUrl[1]}60.jpg`)
            },
            {
              name: "一种新风系统及控制方法、控制装置",
              imgSrc: require(`${baseImgUrl[1]}61.jpg`)
            },
            {
              name: "一种室内机电子膨胀阀的控制方法及装置",
              imgSrc: require(`${baseImgUrl[1]}62.jpg`)
            },
            {
              name: "空调室外机、多功能空调系统及其工作方法",
              imgSrc: require(`${baseImgUrl[1]}63.jpg`)
            },
            {
              name: "一种消除系统误差的电路及方法",
              imgSrc: require(`${baseImgUrl[1]}64.jpg`)
            },
            {
              name: "一种多联式空调系统中多压缩机控制方法及装置",
              imgSrc: require(`${baseImgUrl[1]}65.jpg`)
            },
            {
              name: "一种多联机空调系统的控制方法及装置",
              imgSrc: require(`${baseImgUrl[1]}66.jpg`)
            },
            {
              name: "一种空调风机控制方法及装置",
              imgSrc: require(`${baseImgUrl[1]}67.jpg`)
            },
            {
              name: "无时钟同步信号单片机实现HOMEBUS总线通信的方法",
              imgSrc: require(`${baseImgUrl[1]}68.jpg`)
            },
            {
              name: "双系统空调室外机与水模块盘管温度传感器配对控制方法",
              imgSrc: require(`${baseImgUrl[1]}69.jpg`)
            },
            {
              name: "空调器用通讯信号转换器及其控制方法",
              imgSrc: require(`${baseImgUrl[1]}70.jpg`)
            },
            {
              name: "风管式空调室内机抗电压波动的静压自动识别方法及系统",
              imgSrc: require(`${baseImgUrl[1]}71.jpg`)
            },
            {
              name: "一种永磁同步风机超前角控制方法",
              imgSrc: require(`${baseImgUrl[1]}72.jpg`)
            },
            {
              name: "一种单个线控器控制多台空调室内机的方法",
              imgSrc: require(`${baseImgUrl[1]}73.jpg`)
            },
            {
              name: "一种空调双线控器主从关系判断控制方法",
              imgSrc: require(`${baseImgUrl[1]}74.jpg`)
            },
            {
              name: "根据风管式空调室内机直流电机转速测量电网电压的方法",
              imgSrc: require(`${baseImgUrl[1]}75.jpg`)
            },
            {
              name: "水温自适应水源空调系统及其控制方法",
              imgSrc: require(`${baseImgUrl[1]}76.jpg`)
            },
            {
              name: "空调的除霜方法",
              imgSrc: require(`${baseImgUrl[1]}77.jpg`)
            },
            {
              name: "一种空调用气液分离器",
              imgSrc: require(`${baseImgUrl[1]}78.jpg`)
            },
            {
              name: "热泵制热系统及其辅助制热的控制装置和控制方法",
              imgSrc: require(`${baseImgUrl[1]}79.jpg`)
            },
            {
              name: "一种空调机组冷媒分配器控制方法",
              imgSrc: require(`${baseImgUrl[1]}80.jpg`)
            },
            {
              name: "一种空调循环系统",
              imgSrc: require(`${baseImgUrl[1]}81.jpg`)
            },
            {
              name: "电子膨胀阀的驱动控制装置及方法",
              imgSrc: require(`${baseImgUrl[1]}82.jpg`)
            },
            {
              name: "获取多联机空调系统压力参数的方法及装置",
              imgSrc: require(`${baseImgUrl[1]}83.jpg`)
            },
            {
              name: "全热交换器及新风机组系统",
              imgSrc: require(`${baseImgUrl[1]}84.jpg`)
            },
            {
              name: "基于喷射送风的热泵空调系统",
              imgSrc: require(`${baseImgUrl[1]}85.jpg`)
            },
            {
              name: "一种优化多联机空调系统中压缩机运行控制的方法及装置",
              imgSrc: require(`${baseImgUrl[1]}86.jpg`)
            },
            {
              name: "控制多联机空调系统中辅助电加热的方法及装置",
              imgSrc: require(`${baseImgUrl[1]}87.jpg`)
            },
            {
              name: "一种开度反馈电子膨胀阀及其控制系统",
              imgSrc: require(`${baseImgUrl[1]}88.jpg`)
            },
            {
              name: "一种多联式空调低温制热循环系统",
              imgSrc: require(`${baseImgUrl[1]}89.jpg`)
            },
            {
              name: "永磁同步电机控制方法和装置以及空调设备",
              imgSrc: require(`${baseImgUrl[1]}90.jpg`)
            },
            {
              name: "测试线控器的方法和装置",
              imgSrc: require(`${baseImgUrl[1]}91.jpg`)
            },
            {
              name: "故障检测装置及方法",
              imgSrc: require(`${baseImgUrl[1]}92.jpg`)
            },
            {
              name: "控制多联机空调系统中温湿度的方法及多联机空调系统",
              imgSrc: require(`${baseImgUrl[1]}93.jpg`)
            },
            {
              name: "油分离器",
              imgSrc: require(`${baseImgUrl[1]}94.jpg`)
            },
            {
              name: "烟雾报警保护水模块及风冷热泵系统",
              imgSrc: require(`${baseImgUrl[1]}95.jpg`)
            },
            {
              name: "一多联机热泵空调系统及控制多联机热泵空调系统的方法",
              imgSrc: require(`${baseImgUrl[1]}96.jpg`)
            },
            {
              name: "空调器排气消音装置及消音方法",
              imgSrc: require(`${baseImgUrl[1]}97.jpg`)
            },
            {
              name: "顶出风的空调室外机及空调及其控制方法",
              imgSrc: require(`${baseImgUrl[1]}98.jpg`)
            },
            {
              name: "空调系统及其除湿方法",
              imgSrc: require(`${baseImgUrl[1]}99.jpg`)
            },
            {
              name: "一种寒冷地区用多联机热泵系统及其控制方法",
              imgSrc: require(`${baseImgUrl[1]}100.jpg`)
            },
            {
              name: "一种空调散热循环系统",
              imgSrc: require(`${baseImgUrl[1]}101.jpg`)
            },
            {
              name: "控制空调室内机的方法及空调室内机",
              imgSrc: require(`${baseImgUrl[1]}102.jpg`)
            },
            {
              name: "空调控制装置及其定时开机的控制方法",
              imgSrc: require(`${baseImgUrl[1]}103.jpg`)
            },
            {
              name: "空调节能控制方法及空调",
              imgSrc: require(`${baseImgUrl[1]}104.jpg`)
            },
            {
              name: "无线集中控制器、及中央空调远程控制方法和系统",
              imgSrc: require(`${baseImgUrl[1]}105.jpg`)
            },
            {
              name: "室内机负荷容量控制系统及室内机负荷容量控制方法",
              imgSrc: require(`${baseImgUrl[1]}106.jpg`)
            },
            {
              name: "一种空调室内机换热器翅片导流结构",
              imgSrc: require(`${baseImgUrl[1]}107.jpg`)
            },
            {
              name: "支持多移动终端远程控制中央空调的系统和方法",
              imgSrc: require(`${baseImgUrl[1]}108.jpg`)
            },
            {
              name: "风管式空调室内机",
              imgSrc: require(`${baseImgUrl[1]}109.jpg`)
            },
            {
              name: "三管制全热处理多联机空调系统及温湿度独立控制方法",
              imgSrc: require(`${baseImgUrl[1]}110.jpg`)
            },
            {
              name: "多联式中央空调的集中控制系统和控制方法",
              imgSrc: require(`${baseImgUrl[1]}111.jpg`)
            },
            {
              name: "地暖式多联机空调系统",
              imgSrc: require(`${baseImgUrl[1]}112.jpg`)
            },
            {
              name: "多联机空调控油系统及控油方法",
              imgSrc: require(`${baseImgUrl[1]}113.jpg`)
            },
            {
              name: "多联机空调控油系统及控油方法",
              imgSrc: require(`${baseImgUrl[1]}114.jpg`)
            },
            {
              name: "一种带辅助水冷装置的风冷式空调机组以及控制方法",
              imgSrc: require(`${baseImgUrl[1]}115.jpg`)
            },
            {
              name: "多联机空调地暖控制系统及其温度控制方法",
              imgSrc: require(`${baseImgUrl[1]}116.jpg`)
            },
            {
              name: "中央空调控制系统及其控制软件升级方法",
              imgSrc: require(`${baseImgUrl[1]}117.jpg`)
            },
            {
              name: "油气分离器",
              imgSrc: require(`${baseImgUrl[1]}118.jpg`)
            },
            {
              name: "基于图形界面的中央空调集中控制系统和控制方法",
              imgSrc: require(`${baseImgUrl[1]}119.jpg`)
            },
            {
              name: "基于移动终端的远程控制中央空调的系统和方法",
              imgSrc: require(`${baseImgUrl[1]}120.jpg`)
            },
            {
              name: "风管式室内机及控制风管式室内机容量的方法",
              imgSrc: require(`${baseImgUrl[1]}121.jpg`)
            },
            {
              name: "智能家居楼宇控制系统及其接入空调系统的方法",
              imgSrc: require(`${baseImgUrl[1]}122.jpg`)
            },
            {
              name: "基于管壳式换热器的回油控制系统",
              imgSrc: require(`${baseImgUrl[1]}123.jpg`)
            },
            {
              name: "基于多联式空调系统降噪的分流装置",
              imgSrc: require(`${baseImgUrl[1]}124.jpg`)
            },
            {
              name: "负荷自适应变频多联式热泵系统及控制压缩机频率的方法",
              imgSrc: require(`${baseImgUrl[1]}125.jpg`)
            },
            {
              name: "多联机空调系统的制冷剂流量控制方法和装置",
              imgSrc: require(`${baseImgUrl[1]}126.jpg`)
            },
            {
              name: "自由静压风管机",
              imgSrc: require(`${baseImgUrl[1]}127.jpg`)
            },
            {
              name: "多联机空调系统及其冷凝器",
              imgSrc: require(`${baseImgUrl[1]}128.jpg`)
            },
            {
              name: "兼容局域网和广域网的中央空调控制系统和控制方法",
              imgSrc: require(`${baseImgUrl[1]}129.jpg`)
            },
            {
              name: "基于室内机编组的空调集中控制方法及多联机空调系统",
              imgSrc: require(`${baseImgUrl[1]}130.jpg`)
            },
            {
              name: "基于摄像头的空调系统及空调控制方法",
              imgSrc: require(`${baseImgUrl[1]}131.jpg`)
            },
            {
              name: "基于微通道换热器的变频多联式空调及其控制方法",
              imgSrc: require(`${baseImgUrl[1]}132.jpg`)
            },
            {
              name: "热回收变频多联式热泵系统及其控制方法",
              imgSrc: require(`${baseImgUrl[1]}133.jpg`)
            },
            {
              name: "导风组件、空调及空调导风板控制方法",
              imgSrc: require(`${baseImgUrl[1]}134.jpg`)
            },
            {
              name: "中央空调系统及其室内机地址配置方法",
              imgSrc: require(`${baseImgUrl[1]}135.jpg`)
            },
            {
              name: "单相电源接线判定方法及单相电源相位检测电路",
              imgSrc: require(`${baseImgUrl[1]}136.jpg`)
            },
            {
              name: "一种空调器循环系统",
              imgSrc: require(`${baseImgUrl[1]}137.jpg`)
            },
            {
              name: "一种空调的模糊控制方法及其系统",
              imgSrc: require(`${baseImgUrl[1]}138.jpg`)
            },
            {
              name: "一种风管式空调室内机静压的自动识别方法及其系统",
              imgSrc: require(`${baseImgUrl[1]}139.jpg`)
            },
            {
              name: "HBS总线通信协议与RS-485总线通信协议的双向通信转换方法",
              imgSrc: require(`${baseImgUrl[1]}140.jpg`)
            },
            {
              name: "热回收式多联空调机组",
              imgSrc: require(`${baseImgUrl[1]}141.jpg`)
            },
            {
              name: "基于嵌入式系统实现数据异步接收的方法",
              imgSrc: require(`${baseImgUrl[1]}142.jpg`)
            }
          ]
        },
        {
          classify: 3,
          title: "实用新型",
          img: [
            {
              name: "具有电加热装置的管壳式蒸发器",
              imgSrc: require(`${baseImgUrl[2]}1.jpg`)
            },
            {
              name: "一种空气源热泵系统",
              imgSrc: require(`${baseImgUrl[2]}2.jpg`)
            },
            {
              name: "一种温度传感器用固定装置及空调",
              imgSrc: require(`${baseImgUrl[2]}3.jpg`)
            },
            {
              name: "一种空调器室外机的散热系统及具有该散热系统的室外机",
              imgSrc: require(`${baseImgUrl[2]}4.jpg`)
            },
            {
              name: "一种空调控制器",
              imgSrc: require(`${baseImgUrl[2]}5.jpg`)
            },
            {
              name: "冷媒散热片以及空调",
              imgSrc: require(`${baseImgUrl[2]}6.jpg`)
            },
            {
              name: "涡舌结构、离心风扇以及空调器",
              imgSrc: require(`${baseImgUrl[2]}7.jpg`)
            },
            {
              name: "一种空调控制系统及空调",
              imgSrc: require(`${baseImgUrl[2]}8.jpg`)
            },
            {
              name: "一种板式换热器以及空调器",
              imgSrc: require(`${baseImgUrl[2]}9.jpg`)
            },
            {
              name: "一种室外机壳体及空调室外机",
              imgSrc: require(`${baseImgUrl[2]}10.jpg`)
            },
            {
              name: "一种全热交换器控制板及全热交换器控制系统",
              imgSrc: require(`${baseImgUrl[2]}11.jpg`)
            },
            {
              name: "一种空调室内机电机控制电路及空调室内机",
              imgSrc: require(`${baseImgUrl[2]}12.jpg`)
            },
            {
              name: "一种过压保护电路及电子产品",
              imgSrc: require(`${baseImgUrl[2]}13.jpg`)
            },
            {
              name: "一种端子排及空调器",
              imgSrc: require(`${baseImgUrl[2]}14.jpg`)
            },
            {
              name: "一种空调室内机过滤网安装结构及空调室内机",
              imgSrc: require(`${baseImgUrl[2]}15.jpg`)
            },
            {
              name: "离心风机减震轴套和离心风机",
              imgSrc: require(`${baseImgUrl[2]}16.jpg`)
            },
            {
              name: "一种用于空调分流器组件的隔离结构及风管机",
              imgSrc: require(`${baseImgUrl[2]}17.jpg`)
            },
            {
              name: "一种空调室内机",
              imgSrc: require(`${baseImgUrl[2]}18.jpg`)
            },
            {
              name: "一种降低空调噪音的室内机",
              imgSrc: require(`${baseImgUrl[2]}19.jpg`)
            },
            {
              name: "一种配管过滤器以及空调",
              imgSrc: require(`${baseImgUrl[2]}20.jpg`)
            },
            {
              name: "一种空调室内机出风口结构及空调室内机",
              imgSrc: require(`${baseImgUrl[2]}21.jpg`)
            },
            {
              name: "一种空调室外机及空调",
              imgSrc: require(`${baseImgUrl[2]}22.jpg`)
            },
            {
              name: "一种空调室内机壳体与出风口框体用连接套件及空调室内机",
              imgSrc: require(`${baseImgUrl[2]}23.jpg`)
            },
            {
              name: "一种温度传感器的固定装置以及空调器",
              imgSrc: require(`${baseImgUrl[2]}24.jpg`)
            },
            {
              name: "多联式中央空调控制器和多联式中央空调系统",
              imgSrc: require(`${baseImgUrl[2]}25.jpg`)
            },
            {
              name: "压缩机隔音罩及空调室外机",
              imgSrc: require(`${baseImgUrl[2]}26.jpg`)
            },
            {
              name: "一种变压器电气盒以及空调室外机",
              imgSrc: require(`${baseImgUrl[2]}27.jpg`)
            },
            {
              name: "一种通用型压缩机底座以及空调室外机",
              imgSrc: require(`${baseImgUrl[2]}28.jpg`)
            },
            {
              name: "一种空调室外机",
              imgSrc: require(`${baseImgUrl[2]}29.jpg`)
            },
            {
              name: "空调室外机",
              imgSrc: require(`${baseImgUrl[2]}30.jpg`)
            },
            {
              name: "一种风管机",
              imgSrc: require(`${baseImgUrl[2]}31.jpg`)
            },
            {
              name: "一种PM2.5过滤箱",
              imgSrc: require(`${baseImgUrl[2]}32.jpg`)
            },
            {
              name: "浮子开关安装结构",
              imgSrc: require(`${baseImgUrl[2]}33.jpg`)
            },
            {
              name: "一种浮子开关固定装置",
              imgSrc: require(`${baseImgUrl[2]}34.jpg`)
            },
            {
              name: "一种微通道换热器组件",
              imgSrc: require(`${baseImgUrl[2]}35.jpg`)
            },
            {
              name: "一种分流器以及空调",
              imgSrc: require(`${baseImgUrl[2]}36.jpg`)
            },
            {
              name: "一种换热器用均流孔板和板式换热器",
              imgSrc: require(`${baseImgUrl[2]}37.jpg`)
            },
            {
              name: "一种空调室外机",
              imgSrc: require(`${baseImgUrl[2]}38.jpg`)
            },
            {
              name: "一种补气增焓的空调系统",
              imgSrc: require(`${baseImgUrl[2]}39.jpg`)
            },
            {
              name: "一种换热器组件及空调",
              imgSrc: require(`${baseImgUrl[2]}40.jpg`)
            },
            {
              name: "地暖式多联机空调系统",
              imgSrc: require(`${baseImgUrl[2]}41.jpg`)
            },
            {
              name: "",
              imgSrc: require(`${baseImgUrl[2]}2.jpg`)
            },
            {
              name: "一种变频空调的变频驱动电路",
              imgSrc: require(`${baseImgUrl[2]}42.jpg`)
            },
            {
              name: "多孔式气液分离器",
              imgSrc: require(`${baseImgUrl[2]}43.jpg`)
            },
            {
              name: "消音单向阀及使用消音单向阀的排气管",
              imgSrc: require(`${baseImgUrl[2]}44.jpg`)
            },
            {
              name: "油气分离器",
              imgSrc: require(`${baseImgUrl[2]}45.jpg`)
            },
            {
              name: "中央空调远程控制系统及其无线集中控制器",
              imgSrc: require(`${baseImgUrl[2]}46.jpg`)
            },
            {
              name: "集中控制器、及多联式中央空调的集中控制系统",
              imgSrc: require(`${baseImgUrl[2]}47.jpg`)
            },
            {
              name: "三管制全热处理多联机空调系统",
              imgSrc: require(`${baseImgUrl[2]}48.jpg`)
            },
            {
              name: "中央空调集中控制系统",
              imgSrc: require(`${baseImgUrl[2]}49.jpg`)
            },
            {
              name: "用于高温环境下的空调器",
              imgSrc: require(`${baseImgUrl[2]}50.jpg`)
            },
            {
              name: "油分离器",
              imgSrc: require(`${baseImgUrl[2]}51.jpg`)
            },
            {
              name: "一种电子膨胀阀控制电路",
              imgSrc: require(`${baseImgUrl[2]}52.jpg`)
            },
            {
              name: "防沙耐高温换热器翅片",
              imgSrc: require(`${baseImgUrl[2]}53.jpg`)
            },
            {
              name: "多联机热泵空调系统",
              imgSrc: require(`${baseImgUrl[2]}54.jpg`)
            },
            {
              name: "空调器排气消音装置",
              imgSrc: require(`${baseImgUrl[2]}55.jpg`)
            },
            {
              name: "一种空调除霜循环系统",
              imgSrc: require(`${baseImgUrl[2]}56.jpg`)
            },
            {
              name: "一种空调传感器固定夹具",
              imgSrc: require(`${baseImgUrl[2]}57.jpg`)
            },
            {
              name: "一种多联式空调器热水除霜循环系统",
              imgSrc: require(`${baseImgUrl[2]}58.jpg`)
            },
            {
              name: "一种多联式空调低温制热循环系统",
              imgSrc: require(`${baseImgUrl[2]}59.jpg`)
            },
            {
              name: "一种多联式空调换热器",
              imgSrc: require(`${baseImgUrl[2]}60.jpg`)
            },
            {
              name: "一种温度传感器模拟装置",
              imgSrc: require(`${baseImgUrl[2]}61.jpg`)
            },
            {
              name: "一种带有二氧化碳检测装置的空调",
              imgSrc: require(`${baseImgUrl[2]}62.jpg`)
            },
            {
              name: "一种扁管微通道铝制散热器",
              imgSrc: require(`${baseImgUrl[2]}63.jpg`)
            },
            {
              name: "一种新风空调电子膨胀阀控制系统",
              imgSrc: require(`${baseImgUrl[2]}64.jpg`)
            },
            {
              name: "基于太阳能热水器的空调联动系统",
              imgSrc: require(`${baseImgUrl[2]}65.jpg`)
            },
            {
              name: "空调循环系统",
              imgSrc: require(`${baseImgUrl[2]}66.jpg`)
            },
            {
              name: "空调便携式电子膨胀阀驱动装置",
              imgSrc: require(`${baseImgUrl[2]}67.jpg`)
            },
            {
              name: "空调辅助电加热保护装置",
              imgSrc: require(`${baseImgUrl[2]}68.jpg`)
            },
            {
              name: "中央空调系统",
              imgSrc: require(`${baseImgUrl[2]}69.jpg`)
            },
            {
              name: "空调机组电气盒及设置该电气盒的空调机组",
              imgSrc: require(`${baseImgUrl[2]}70.jpg`)
            },
            {
              name: "空气能热泵热水器",
              imgSrc: require(`${baseImgUrl[2]}71.jpg`)
            },
            {
              name: "中央空调系统",
              imgSrc: require(`${baseImgUrl[2]}72.jpg`)
            },
            {
              name: "防反转风机",
              imgSrc: require(`${baseImgUrl[2]}73.jpg`)
            },
            {
              name: "可分户计费的空调",
              imgSrc: require(`${baseImgUrl[2]}74.jpg`)
            },
            {
              name: "逆相自动纠正电路及设置该电路的空调",
              imgSrc: require(`${baseImgUrl[2]}75.jpg`)
            },
            {
              name: "多联式空调系统供油机构",
              imgSrc: require(`${baseImgUrl[2]}76.jpg`)
            },
            {
              name: "使用卸荷阀的热泵空调",
              imgSrc: require(`${baseImgUrl[2]}77.jpg`)
            },
            {
              name: "室内机换热结构及设置该换热结构的室内机",
              imgSrc: require(`${baseImgUrl[2]}78.jpg`)
            },
            {
              name: "一种空调机组均油控制系统",
              imgSrc: require(`${baseImgUrl[2]}79.jpg`)
            },
            {
              name: "空调制冷回路及设置该回路的空调",
              imgSrc: require(`${baseImgUrl[2]}80.jpg`)
            },
            {
              name: "空调机组油分离器均油平衡系统",
              imgSrc: require(`${baseImgUrl[2]}81.jpg`)
            },
            {
              name: "带有旁通水路的地源多联空调",
              imgSrc: require(`${baseImgUrl[2]}82.jpg`)
            },
            {
              name: "地源多联变频空调",
              imgSrc: require(`${baseImgUrl[2]}83.jpg`)
            },
            {
              name: "基于WEB服务的空调管理和计费系统",
              imgSrc: require(`${baseImgUrl[2]}84.jpg`)
            },
            {
              name: "空调机组油分离器均油平衡系统",
              imgSrc: require(`${baseImgUrl[2]}81.jpg`)
            },
            {
              name: "新型变频多联式水热交换器机组",
              imgSrc: require(`${baseImgUrl[2]}85.jpg`)
            },
            {
              name: "一种可控制长管路中制冷剂量的空调器",
              imgSrc: require(`${baseImgUrl[2]}86.jpg`)
            },
            {
              name: "一种新型管壳式换热器",
              imgSrc: require(`${baseImgUrl[2]}87.jpg`)
            },
            {
              name: "带减压回路的室内新风机",
              imgSrc: require(`${baseImgUrl[2]}88.jpg`)
            },
            {
              name: "基于HBS的点阵液晶空调控制器",
              imgSrc: require(`${baseImgUrl[2]}89.jpg`)
            },
            {
              name: "具有无线接收功能的有线遥控器",
              imgSrc: require(`${baseImgUrl[2]}90.jpg`)
            },
            {
              name: "一种空调用气液分离器",
              imgSrc: require(`${baseImgUrl[2]}91.jpg`)
            },
            {
              name: "一种应用于空冷式多联机的新型储液器",
              imgSrc: require(`${baseImgUrl[2]}92.jpg`)
            },
            {
              name: "一种带储液器的水源多联机空调系统",
              imgSrc: require(`${baseImgUrl[2]}93.jpg`)
            },
            {
              name: "一种新型带烘干功能的空调系统",
              imgSrc: require(`${baseImgUrl[2]}94.jpg`)
            },
            {
              name: "基于HBS总线空调机的GSM远程控制器",
              imgSrc: require(`${baseImgUrl[2]}95.jpg`)
            },
            {
              name: "一种冷媒流动音消音器",
              imgSrc: require(`${baseImgUrl[2]}96.jpg`)
            },
            {
              name: "具有防呆设计的空调风机用联轴器",
              imgSrc: require(`${baseImgUrl[2]}97.jpg`)
            },
            {
              name: "一种空调变频模块的新型散热装置",
              imgSrc: require(`${baseImgUrl[2]}98.jpg`)
            },
            {
              name: "具有提供冷热饮用水功能的新型空调系统",
              imgSrc: require(`${baseImgUrl[2]}99.jpg`)
            }
          ]
        },
        {
          classify: 4,
          title: "外观设计",
          img: [
            {
              name: "中央空调室外机格栅",
              imgSrc: require(`${baseImgUrl[3]}1.jpg`)
            },
            {
              name: "中央空调面板",
              imgSrc: require(`${baseImgUrl[3]}2.jpg`)
            },
            {
              name: "商用空调用一键控制器",
              imgSrc: require(`${baseImgUrl[3]}3.jpg`)
            },
            {
              name: "空调室外机",
              imgSrc: require(`${baseImgUrl[3]}4.jpg`)
            },
            {
              name: "新风净化机",
              imgSrc: require(`${baseImgUrl[3]}5.jpg`)
            },
            {
              name: "空调室外机",
              imgSrc: require(`${baseImgUrl[3]}6.jpg`)
            },
            {
              name: "嵌入式两面出风空调室内机",
              imgSrc: require(`${baseImgUrl[3]}7.jpg`)
            },
            {
              name: "空调墙面控制器",
              imgSrc: require(`${baseImgUrl[3]}8.jpg`)
            },
            {
              name: "单面出风嵌入式空调机面板(一)",
              imgSrc: require(`${baseImgUrl[3]}9.jpg`)
            },
            {
              name: "单面出风嵌入式空调机面板(二)",
              imgSrc: require(`${baseImgUrl[3]}10.jpg`)
            },
            {
              name: "空调遥控器",
              imgSrc: require(`${baseImgUrl[3]}11.jpg`)
            },
            {
              name: "空调室内机",
              imgSrc: require(`${baseImgUrl[3]}12.jpg`)
            },
            {
              name: "空调遥控器",
              imgSrc: require(`${baseImgUrl[3]}13.jpg`)
            },

            {
              name: "全热交换器（超薄）",
              imgSrc: require(`${baseImgUrl[3]}14.jpg`)
            },
            {
              name: "空调线控器",
              imgSrc: require(`${baseImgUrl[3]}15.jpg`)
            },
            {
              name: "中央空调控制器",
              imgSrc: require(`${baseImgUrl[3]}16.jpg`)
            },
            {
              name: "空调控制器",
              imgSrc: require(`${baseImgUrl[3]}17.jpg`)
            },
            {
              name: "空调器面板",
              imgSrc: require(`${baseImgUrl[3]}18.jpg`)
            },
            {
              name: "空调线控器",
              imgSrc: require(`${baseImgUrl[3]}19.jpg`)
            },
            {
              name: "空调遥控器",
              imgSrc: require(`${baseImgUrl[3]}20.jpg`)
            },
            {
              name: "空调器室外机（一）",
              imgSrc: require(`${baseImgUrl[3]}21.jpg`)
            },
            {
              name: "空调器室外机（二）",
              imgSrc: require(`${baseImgUrl[3]}22.jpg`)
            },
            {
              name: "空调器室外机（三）",
              imgSrc: require(`${baseImgUrl[3]}23.jpg`)
            },
            {
              name: "空调器室外机（四）",
              imgSrc: require(`${baseImgUrl[3]}24.jpg`)
            },

            {
              name: "空调线控器",
              imgSrc: require(`${baseImgUrl[3]}25.jpg`)
            },
            {
              name: "三管制水源多联机室外机",
              imgSrc: require(`${baseImgUrl[3]}26.jpg`)
            },
            {
              name: "风冷式冷热水机组",
              imgSrc: require(`${baseImgUrl[3]}27.jpg`)
            },
            {
              name: "空调线控器",
              imgSrc: require(`${baseImgUrl[3]}28.jpg`)
            },
            {
              name: "空调线控器",
              imgSrc: require(`${baseImgUrl[3]}29.jpg`)
            },
            {
              name: "空调线控器（86）",
              imgSrc: require(`${baseImgUrl[3]}30.jpg`)
            },
            {
              name: "空调线控器（120）",
              imgSrc: require(`${baseImgUrl[3]}31.jpg`)
            },
            {
              name: "商用空调线控器",
              imgSrc: require(`${baseImgUrl[3]}32.jpg`)
            },
            {
              name: "中央空调线控器",
              imgSrc: require(`${baseImgUrl[3]}33.jpg`)
            },
            {
              name: "空调内机面板",
              imgSrc: require(`${baseImgUrl[3]}34.jpg`)
            },
            {
              name: "人感应器",
              imgSrc: require(`${baseImgUrl[3]}35.jpg`)
            },
            {
              name: "手机远程控制器（i-EZ）",
              imgSrc: require(`${baseImgUrl[3]}36.jpg`)
            },
            {
              name: "手机远程控制器（i-EZ）",
              imgSrc: require(`${baseImgUrl[3]}37.jpg`)
            },
            {
              name: "手机远程控制器（i-EZ）",
              imgSrc: require(`${baseImgUrl[3]}38.jpg`)
            },

            {
              name: "智能语音控制器",
              imgSrc: require(`${baseImgUrl[3]}39.jpg`)
            },
            {
              name: "空调线控器",
              imgSrc: require(`${baseImgUrl[3]}40.jpg`)
            },
            {
              name: "空气盒子",
              imgSrc: require(`${baseImgUrl[3]}41.jpg`)
            },
            {
              name: "空调面板",
              imgSrc: require(`${baseImgUrl[3]}42.jpg`)
            }
          ]
        }
      ]
    };
  },
  computed: {
    filterTitle() {
      return this.filterList[this.filterIndex].title;
    }
  },
  methods: {
    showImg(img, filterTitle) {
      this.showImgkey = true;
      document.body.style.overflow = "hidden";
      let match = img.imgSrc.match(/img\/?(\d+)/),
        imgSrc = `./images/${filterTitle}/${match[1]}.jpg`;
      this.activeImgSrc = imgSrc;
    },
    hideImg() {
      document.body.style.overflow = "auto";
      this.showImgkey = false;
      this.activeImgSrc = "";
    },
    touchmove(event) {
      event.preventDefault();
    },
    filter(index) {
      index = parseInt(index);
      this.searchValue = "";
      this.filterIndex = this.filterIndex == index ? 0 : index; // 点击一次选中分区 再点击取消分区筛选
    },
    input() {
      if (this.searchValue) {
        this.filterIndex = 5;
      } else {
        this.filterIndex = 0;
      }
    },
    search() {
      this.filterIndex = 5;
      const value = this.searchValue; // 搜索框的文字内容
    }
  }
};
</script>

<style lang="less">
@import "./assets/style/reset.css";
html {
  background: #009ea2;
  body {
    background-image: url("./assets/img/bg@2x.png");
    background-size: 100%;
    background-repeat: no-repeat;
  }
}

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  padding: 168px 20px 0px;
  .shade {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 8;
    background: rgba(0, 0, 0, 0.6);
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      max-width: 88%;
      transform: translate(-50%, -50%);
      &.show-img {
        z-index: 8;
      }
      &.loading {
        z-index: 6;
      }
    }
  }
  header {
    display: flex;
    justify-content: space-between;
    height: 28px;
    div {
      width: 24%;
      background: #fff;
      border-radius: 5px;
      text-align: center;
      line-height: 28px;
      color: #6a6a6a;
      font-size: 12px;
      &.active {
        background: #ffc412;
        color: #fff;
        font-size: 15px;
      }
    }
  }
  main {
    flex: 1;
    margin-top: 10px;
    padding-top: 20px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 10px;
    .search {
      position: relative;
      width: 92%;
      height: 26px;
      margin: 0 auto;
      border-radius: 13px;
      box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1) inset;
      input {
        width: 76%;
        height: 100%;
        border-top-left-radius: 13px;
        border-bottom-left-radius: 13px;
        background: transparent;
        text-indent: 1em;
        font-size: 12px;
        color: #6a6a6a;
      }
      img {
        position: absolute;
        right: 0px;
        top: 0px;
        height: 100%;
      }
    }
    .title {
      position: relative;
      font-size: 0px;
      margin-top: 18px;
      padding: 0 6%;
      img {
        width: 100%;
      }
      h3 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 17px;
        font-weight: 500;
        color: #00c1c1;
      }
    }
    .none {
      margin-top: 20px;
      color: #6a6a6a;
      font-size: 13px;
      text-align: center;
    }
    .img-wrapper {
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
      padding: 0 2%;
      .img-box {
        width: 24%;
        margin: 0 4.666% 5px;
        img {
          width: 100%;
          box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
        }
        .name {
          width: 100%;
          font-size: 12px;
          text-align: center;
          color: #0d7c7c;
          width: 120%;
          margin-left: -10%;
          transform: scale(0.8);
          transform-origin: top center;
        }
        &.box-one {
          &:nth-of-type(4),
          &:nth-of-type(5),
          &:nth-of-type(6) {
            margin-bottom: -50px;
          }
          &:nth-of-type(7) {
            margin-bottom: -30px;
          }
          margin-bottom: -10px;
          .name {
            width: 150%;
            margin: 0 0 0 -26%;
            transform: scale(0.6);
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>
