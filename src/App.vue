<template>
  <div id="app">
    <transition>
      <div class="el-message" v-show="message">
        <span class="icon">
          <svg
            t="1592375008150"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1247"
            width="20"
            height="20"
          >
            <path
              d="M512 64.003072c-247.412736 0-448 200.576-448 448.002048 0 247.419904 200.587264 447.990784 448 447.990784 247.431168 0 448-200.571904 448-447.990784 0-247.426048-200.568832-448.002048-448-448.002048z m-22.288384 201.660416c-0.007168-12.377088 10.028032-22.403072 22.40512-22.403072 12.367872 0.004096 22.411264 10.034176 22.411264 22.403072v268.778496c0 12.370944-10.036224 22.395904-22.411264 22.395904-12.367872 0.009216-22.406144-10.02496-22.406144-22.4l0.001024-268.7744z m21.941248 515.257344c-37.111808 0-67.196928-30.08-67.196928-67.18976s30.08512-67.198976 67.196928-67.198976c37.107712 0 67.19488 30.089216 67.19488 67.198976s-30.088192 67.18976-67.19488 67.18976z"
              p-id="1248"
              fill="#f56c6c"
            />
          </svg>
        </span>
        查询内容不能为空
      </div>
    </transition>
    <div class="shade" v-show="showImgkey" @click="onHideImg">
      <span class="loading">
        <svg
          t="1592382455902"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2773"
          width="60"
          height="60"
        >
          <path
            d="M523.085935 101.849403m-101.850403 0a101.850403 101.850403 0 1 0 203.700806 0 101.850403 101.850403 0 1 0-203.700806 0Z"
            fill="#00c1c1"
            p-id="2774"
          />
          <path
            d="M769.836489 187.508901m-96.031437 0a96.031437 96.031437 0 1 0 192.062875 0 96.031437 96.031437 0 1 0-192.062875 0Z"
            fill="#00c1c1"
            p-id="2775"
          />
          <path
            d="M903.286707 381.395765m-90.210471 0a90.210471 90.210471 0 1 0 180.420943 0 90.210471 90.210471 0 1 0-180.420943 0Z"
            fill="#00c1c1"
            p-id="2776"
          />
          <path
            d="M905.950692 609.722427m-84.390506 0a84.390506 84.390506 0 1 0 168.781011 0 84.390506 84.390506 0 1 0-168.781011 0Z"
            fill="#00c1c1"
            p-id="2777"
          />
          <path
            d="M799.997313 786.127394m-78.57054 0a78.57054 78.57054 0 1 0 157.141079 0 78.57054 78.57054 0 1 0-157.141079 0Z"
            fill="#00c1c1"
            p-id="2778"
          />
          <path
            d="M605.196454 889.708787m-72.750574 0a72.750574 72.750574 0 1 0 145.501148 0 72.750574 72.750574 0 1 0-145.501148 0Z"
            fill="#00c1c1"
            p-id="2779"
          />
          <path
            d="M397.148673 877.857856m-66.931608 0a66.931608 66.931608 0 1 0 133.863216 0 66.931608 66.931608 0 1 0-133.863216 0Z"
            fill="#00c1c1"
            p-id="2780"
          />
          <path
            d="M223.665689 762.483532m-61.110641 0a61.110642 61.110642 0 1 0 122.221283 0 61.110642 61.110642 0 1 0-122.221283 0Z"
            fill="#00c1c1"
            p-id="2781"
          />
          <path
            d="M134.483212 587.14856m-55.290676 0a55.290676 55.290676 0 1 0 110.581352 0 55.290676 55.290676 0 1 0-110.581352 0Z"
            fill="#00c1c1"
            p-id="2782"
          />
          <path
            d="M135.396207 408.896604m-49.47071 0a49.47071 49.47071 0 1 0 98.94142 0 49.47071 49.47071 0 1 0-98.94142 0Z"
            fill="#00c1c1"
            p-id="2783"
          />
          <path
            d="M205.336797 260.047476m-43.650744 0a43.650744 43.650744 0 1 0 87.301488 0 43.650744 43.650744 0 1 0-87.301488 0Z"
            fill="#00c1c1"
            p-id="2784"
          />
          <path
            d="M315.81515 159.990063m-37.829779 0a37.829778 37.829778 0 1 0 75.659557 0 37.829778 37.829778 0 1 0-75.659557 0Z"
            fill="#00c1c1"
            p-id="2785"
          />
        </svg>
      </span>
      <img :src="activeImgSrc" alt class="show-img" />
    </div>
    <header>
      <div :class="{'active' : filterIndex == 1}" @click="onFilterImg(1)">海外注册</div>
      <div :class="{'active' : filterIndex == 2}" @click="onFilterImg(2)">发明专利</div>
      <div :class="{'active' : filterIndex == 3}" @click="onFilterImg(3)">实用新型</div>
      <div :class="{'active' : filterIndex == 4}" @click="onFilterImg(4)">外观设计</div>
    </header>
    <main>
      <div class="search">
        <input type="text" placeholder="请输出查询专利名称" v-model="searchValue" @input="onInput" />
        <div class="search-button" @click="onSearch">
          <span>
            <svg
              t="1592386527322"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3799"
              width="16"
              height="16"
            >
              <path
                d="M799.117225 727.668111A446.399272 446.399272 0 0 0 896.675651 448.449169a51.046313 51.046313 0 1 0-102.165758 0 346.134953 346.134953 0 1 1-39.345152-160.525295 51.046313 51.046313 0 1 0 90.464597-47.462832 448.300711 448.300711 0 1 0-118.035456 558.730412c1.316381 1.828306 2.92529 3.58348 4.534199 5.19239l204.624044 204.624044a51.046313 51.046313 0 0 0 72.181534-72.181534l-204.624044-204.624043a51.558238 51.558238 0 0 0-5.119258-4.5342z"
                fill="#ffffff"
                p-id="3800"
              />
            </svg>
          </span>
          <span>搜索</span>
        </div>
      </div>
      <div class="title">
        <img src="./assets/img/title.png" alt />
        <h3>{{filterTitle}}</h3>
      </div>
      <div class="none" v-show="searchResultNull">抱歉，没有找到你想要的内容</div>
      <ul class="img-wrapper" v-updateImg>
        <li
          class="img-box box-one"
          v-show="filterIndex == 0 || filterIndex == 1 || (item.name.indexOf(searchValue) != -1 && searchValue != '')"
          v-for="(item, index) in imgList[0].img"
          :key="item.name + index"
        >
          <img v-lazy="item.imgSrc" alt="item.name" @click="onShowImg(index, imgList[0].title)" />
          <p class="name">{{item.name}}</p>
        </li>
        <li
          class="img-box"
          v-show="filterIndex == 0 || filterIndex == 2 || (item.name.indexOf(searchValue) != -1 && searchValue != '')"
          v-for="(item, index) in imgList[1].img"
          :key="item.name + index"
        >
          <img v-lazy="item.imgSrc" alt="item.name" @click="onShowImg(index, imgList[1].title)" />
          <p class="name">{{item.name}}</p>
        </li>
        <li
          class="img-box"
          v-show="filterIndex == 0 || filterIndex == 3 || (item.name.indexOf(searchValue) != -1 && searchValue != '')"
          v-for="(item, index) in imgList[2].img"
          :key="item.name + index"
        >
          <img v-lazy="item.imgSrc" alt="item.name" @click="onShowImg(index, imgList[2].title)" />
          <p class="name">{{item.name}}</p>
        </li>
        <li
          class="img-box"
          v-show="filterIndex == 0 || filterIndex == 4 || (item.name.indexOf(searchValue) != -1 && searchValue != '')"
          v-for="(item, index) in imgList[3].img"
          :key="item.name + index"
        >
          <img v-lazy="item.imgSrc" alt="item.name" @click="onShowImg(index, imgList[3].title)" />
          <p class="name">{{item.name}}</p>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  name: "app",
  directives: {
    updateImg: {
      componentUpdated: (el, binding, vnode) => {
        // 发生在指令所在组件和子组件更新之后
        let height = el.offsetHeight;
        vnode.context.searchResultNull = height == 0 ? true : false;
      }
    }
  },
  data() {
    return {
      filterIndex: 0,
      searchValue: "",
      showImgkey: false,
      activeImgSrc: "",
      searchResultNull: false,
      message: false,
      filterTitleList: [
        { title: "全部专利" },
        { title: "海外注册" },
        { title: "发明专利" },
        { title: "实用新型" },
        { title: "外观设计" },
        { title: "搜索结果" }
      ],
      imgList: [
        {
          classifyId: 1,
          title: "海外注册",
          img: [
            {
              name:
                "DRIVE CONTROL DEVICE AND METHOD OF ELECTRONIC EXPANSION VALVE",
              imgSrc: require(`./assets/img/海外注册/1.jpg`)
            },
            {
              name: "RADIANT FLOOR HEATING MULTI-SPLIT AIR CONDITIONING SYSTEM",
              imgSrc: require(`./assets/img/海外注册/2.jpg`)
            },
            {
              name:
                "Drive Control Device and Method for Electronic Expansion Valve",
              imgSrc: require(`./assets/img/海外注册/3.jpg`)
            },
            {
              name:
                "METHOD AND DEVICE FOR OPTIMIZING OPERATIONAL CONTROL OF COMPRESSORS IN MULTI-COUPLE UNIT AIR-CONDITIONING SYSTEM",
              imgSrc: require(`./assets/img/海外注册/4.jpg`)
            },

            {
              name:
                "MULTI-COUPLED HEAT PUMP AIR-CONDITIONING SYSTEM AND METHOD OF CONTROLLING MULTICOUPLED HEAT PUMP AIRCONDITIONING SYSTEM",
              imgSrc: require(`./assets/img/海外注册/5.jpg`)
            },
            {
              name:
                "HEAT RECOVERY VARIABLE-FREQUENCY MULTI-SPLIT HEAT PUMP SYSTEM AND CONTROL METHOD THEREOF",
              imgSrc: require(`./assets/img/海外注册/6.jpg`)
            },
            {
              name:
                "HEAT RECOVERY VARIABLE-FREQUENCY MULTI-SPLIT HEAT PUMP SYSTEM AND CONTROL METHOD THEREOF",
              imgSrc: require(`./assets/img/海外注册/7.jpg`)
            }
          ]
        },
        {
          classifyId: 2,
          title: "发明专利",
          img: [
            {
              name: "一种热泵及热泵控制方法",
              imgSrc: require(`./assets/img/发明专利/1.jpg`)
            },
            {
              name: "一种空调器送风的控制方法、装置及空调器",
              imgSrc: require(`./assets/img/发明专利/2.jpg`)
            },
            {
              name: "一种多联机控制系统",
              imgSrc: require(`./assets/img/发明专利/3.jpg`)
            },
            {
              name: "一种加热装置及其控制方法",
              imgSrc: require(`./assets/img/发明专利/4.jpg`)
            },
            {
              name: "一种换热循环系统及其控制方法和空调",
              imgSrc: require(`./assets/img/发明专利/5.jpg`)
            },
            {
              name: "一种嵌入式空调器及其安装工艺",
              imgSrc: require(`./assets/img/发明专利/6.jpg`)
            },
            {
              name: "一种空调室内机",
              imgSrc: require(`./assets/img/发明专利/7.jpg`)
            },
            {
              name: "风力机以及空调器",
              imgSrc: require(`./assets/img/发明专利/8.jpg`)
            },
            {
              name: "一种空调室外机出风结构及空调室外机",
              imgSrc: require(`./assets/img/发明专利/9.jpg`)
            },
            {
              name: "一种嵌入式空调室内机",
              imgSrc: require(`./assets/img/发明专利/10.jpg`)
            },
            {
              name: "一种电子膨胀阀的控制方法及装置",
              imgSrc: require(`./assets/img/发明专利/11.jpg`)
            },
            {
              name: "一种空调出风结构",
              imgSrc: require(`./assets/img/发明专利/12.jpg`)
            },
            {
              name: "一种协议转换方法、装置及控制系统",
              imgSrc: require(`./assets/img/发明专利/13.jpg`)
            },
            {
              name: "一种控制方法、通风装置及空调系统",
              imgSrc: require(`./assets/img/发明专利/14.jpg`)
            },
            {
              name: "一种室内机的控制方法、室内机及空调器",
              imgSrc: require(`./assets/img/发明专利/15.jpg`)
            },
            {
              name: "一种热泵水暖系统干烧判定方法及装置",
              imgSrc: require(`./assets/img/发明专利/16.jpg`)
            },
            {
              name: "一种多联式空调机组的控制方法及控制装置",
              imgSrc: require(`./assets/img/发明专利/17.jpg`)
            },
            {
              name: "空调室内机的风机控制方法及装置和室内机",
              imgSrc: require(`./assets/img/发明专利/18.jpg`)
            },
            {
              name: "一种风管机",
              imgSrc: require(`./assets/img/发明专利/19.jpg`)
            },
            {
              name: "一种消音器",
              imgSrc: require(`./assets/img/发明专利/20.jpg`)
            },
            {
              name: "一种联动环境调节系统及其控制方法",
              imgSrc: require(`./assets/img/发明专利/21.jpg`)
            },
            {
              name: "多联机空调系统的控制方法及室内机",
              imgSrc: require(`./assets/img/发明专利/22.jpg`)
            },
            {
              name: "采用喷射器的空调热泵系统、空调器及空调器控制方法",
              imgSrc: require(`./assets/img/发明专利/23.jpg`)
            },
            {
              name: "一种制冷剂填充的控制方法及空调",
              imgSrc: require(`./assets/img/发明专利/24.jpg`)
            },
            {
              name: "一种基于热磁发电的空调系统及控制方法",
              imgSrc: require(`./assets/img/发明专利/25.jpg`)
            },
            {
              name: "一种热泵系统用气液分离器及其制作方法",
              imgSrc: require(`./assets/img/发明专利/26.jpg`)
            },
            {
              name: "一种空调控制方法及控制装置",
              imgSrc: require(`./assets/img/发明专利/27.jpg`)
            },
            {
              name: "一种空气源冷热水热泵系统",
              imgSrc: require(`./assets/img/发明专利/28.jpg`)
            },
            {
              name: "压缩机吸气管路组件及空调室外机",
              imgSrc: require(`./assets/img/发明专利/29.jpg`)
            },
            {
              name: "一种具备喷射器的多联机空调系统及其控制方法",
              imgSrc: require(`./assets/img/发明专利/30.jpg`)
            },
            {
              name: "一种空调室外机出风结构",
              imgSrc: require(`./assets/img/发明专利/31.jpg`)
            },
            {
              name: "一种空调节能控制方法和装置",
              imgSrc: require(`./assets/img/发明专利/32.jpg`)
            },
            {
              name: "一种冷量回收节能空调系统及控制方法",
              imgSrc: require(`./assets/img/发明专利/33.jpg`)
            },
            {
              name: "一种隔离电路及隔离电路控制方法",
              imgSrc: require(`./assets/img/发明专利/34.jpg`)
            },
            {
              name: "一种室内机及其控制方法",
              imgSrc: require(`./assets/img/发明专利/35.jpg`)
            },
            {
              name: "一种强热型室外机、热泵系统及其控制方法",
              imgSrc: require(`./assets/img/发明专利/36.jpg`)
            },
            {
              name: "一种空调节能方法、装置及系统",
              imgSrc: require(`./assets/img/发明专利/37.jpg`)
            },
            {
              name: "一种油气分离装置",
              imgSrc: require(`./assets/img/发明专利/38.jpg`)
            },
            {
              name: "一种空调舒适度控制方法和装置",
              imgSrc: require(`./assets/img/发明专利/39.jpg`)
            },
            {
              name: "空调器中室内机的导风板的控制方法、室内机及空调器",
              imgSrc: require(`./assets/img/发明专利/40.jpg`)
            },
            {
              name: "一种冰蓄冷空调及冰蓄冷方法",
              imgSrc: require(`./assets/img/发明专利/41.jpg`)
            },
            {
              name: "一种冷媒泄露的检测装置、方法和空调",
              imgSrc: require(`./assets/img/发明专利/42.jpg`)
            },
            {
              name: "一种电子膨胀阀的开度控制方法、室内机、室外机及空调",
              imgSrc: require(`./assets/img/发明专利/43.jpg`)
            },
            {
              name: "一种空调测试中模拟值输入方法及空调测试装置",
              imgSrc: require(`./assets/img/发明专利/44.jpg`)
            },
            {
              name: "一种空调室内机",
              imgSrc: require(`./assets/img/发明专利/45.jpg`)
            },
            {
              name: "一种蓄热室外机、热泵系统及其控制方法",
              imgSrc: require(`./assets/img/发明专利/46.jpg`)
            },
            {
              name: "一种自然风控制方法和装置",
              imgSrc: require(`./assets/img/发明专利/47.jpg`)
            },
            {
              name: "一种中央空调的远程控制系统及其配置方法",
              imgSrc: require(`./assets/img/发明专利/48.jpg`)
            },
            {
              name: "一种导风板的控制方法和控制装置",
              imgSrc: require(`./assets/img/发明专利/49.jpg`)
            },
            {
              name: "一种降低空调噪音的室内机",
              imgSrc: require(`./assets/img/发明专利/50.jpg`)
            },
            {
              name: "一种热泵系统结霜量自动检测的除霜控制方法及装置",
              imgSrc: require(`./assets/img/发明专利/51.jpg`)
            },
            {
              name: "一种蓄能组件及多联机空调系统",
              imgSrc: require(`./assets/img/发明专利/52.jpg`)
            },
            {
              name: "一种报警控制方法、装置及空调控制器",
              imgSrc: require(`./assets/img/发明专利/53.jpg`)
            },
            {
              name: "一种空调器室内机、室外机及空调器",
              imgSrc: require(`./assets/img/发明专利/54.jpg`)
            },
            {
              name: "一种分集水控制方法、装置及地暖供热系统",
              imgSrc: require(`./assets/img/发明专利/55.jpg`)
            },
            {
              name: "一种室外机、除霜控制系统及方法",
              imgSrc: require(`./assets/img/发明专利/56.jpg`)
            },
            {
              name: "一种压缩机频率分配方法及模块式空调",
              imgSrc: require(`./assets/img/发明专利/57.jpg`)
            },
            {
              name: "一种四通换向阀及空调系统的室外机",
              imgSrc: require(`./assets/img/发明专利/58.jpg`)
            },
            {
              name: "一种温度控制方法和装置",
              imgSrc: require(`./assets/img/发明专利/59.jpg`)
            },
            {
              name: "一种空调地址的设定方法和装置",
              imgSrc: require(`./assets/img/发明专利/60.jpg`)
            },
            {
              name: "一种新风系统及控制方法、控制装置",
              imgSrc: require(`./assets/img/发明专利/61.jpg`)
            },
            {
              name: "一种室内机电子膨胀阀的控制方法及装置",
              imgSrc: require(`./assets/img/发明专利/62.jpg`)
            },
            {
              name: "空调室外机、多功能空调系统及其工作方法",
              imgSrc: require(`./assets/img/发明专利/63.jpg`)
            },
            {
              name: "一种消除系统误差的电路及方法",
              imgSrc: require(`./assets/img/发明专利/64.jpg`)
            },
            {
              name: "一种多联式空调系统中多压缩机控制方法及装置",
              imgSrc: require(`./assets/img/发明专利/65.jpg`)
            },
            {
              name: "一种多联机空调系统的控制方法及装置",
              imgSrc: require(`./assets/img/发明专利/66.jpg`)
            },
            {
              name: "一种空调风机控制方法及装置",
              imgSrc: require(`./assets/img/发明专利/67.jpg`)
            },
            {
              name: "无时钟同步信号单片机实现HOMEBUS总线通信的方法",
              imgSrc: require(`./assets/img/发明专利/68.jpg`)
            },
            {
              name: "双系统空调室外机与水模块盘管温度传感器配对控制方法",
              imgSrc: require(`./assets/img/发明专利/69.jpg`)
            },
            {
              name: "空调器用通讯信号转换器及其控制方法",
              imgSrc: require(`./assets/img/发明专利/70.jpg`)
            },
            {
              name: "风管式空调室内机抗电压波动的静压自动识别方法及系统",
              imgSrc: require(`./assets/img/发明专利/71.jpg`)
            },
            {
              name: "一种永磁同步风机超前角控制方法",
              imgSrc: require(`./assets/img/发明专利/72.jpg`)
            },
            {
              name: "一种单个线控器控制多台空调室内机的方法",
              imgSrc: require(`./assets/img/发明专利/73.jpg`)
            },
            {
              name: "一种空调双线控器主从关系判断控制方法",
              imgSrc: require(`./assets/img/发明专利/74.jpg`)
            },
            {
              name: "根据风管式空调室内机直流电机转速测量电网电压的方法",
              imgSrc: require(`./assets/img/发明专利/75.jpg`)
            },
            {
              name: "水温自适应水源空调系统及其控制方法",
              imgSrc: require(`./assets/img/发明专利/76.jpg`)
            },
            {
              name: "空调的除霜方法",
              imgSrc: require(`./assets/img/发明专利/77.jpg`)
            },
            {
              name: "一种空调用气液分离器",
              imgSrc: require(`./assets/img/发明专利/78.jpg`)
            },
            {
              name: "热泵制热系统及其辅助制热的控制装置和控制方法",
              imgSrc: require(`./assets/img/发明专利/79.jpg`)
            },
            {
              name: "一种空调机组冷媒分配器控制方法",
              imgSrc: require(`./assets/img/发明专利/80.jpg`)
            },
            {
              name: "一种空调循环系统",
              imgSrc: require(`./assets/img/发明专利/81.jpg`)
            },
            {
              name: "电子膨胀阀的驱动控制装置及方法",
              imgSrc: require(`./assets/img/发明专利/82.jpg`)
            },
            {
              name: "获取多联机空调系统压力参数的方法及装置",
              imgSrc: require(`./assets/img/发明专利/83.jpg`)
            },
            {
              name: "全热交换器及新风机组系统",
              imgSrc: require(`./assets/img/发明专利/84.jpg`)
            },
            {
              name: "基于喷射送风的热泵空调系统",
              imgSrc: require(`./assets/img/发明专利/85.jpg`)
            },
            {
              name: "一种优化多联机空调系统中压缩机运行控制的方法及装置",
              imgSrc: require(`./assets/img/发明专利/86.jpg`)
            },
            {
              name: "控制多联机空调系统中辅助电加热的方法及装置",
              imgSrc: require(`./assets/img/发明专利/87.jpg`)
            },
            {
              name: "一种开度反馈电子膨胀阀及其控制系统",
              imgSrc: require(`./assets/img/发明专利/88.jpg`)
            },
            {
              name: "一种多联式空调低温制热循环系统",
              imgSrc: require(`./assets/img/发明专利/89.jpg`)
            },
            {
              name: "永磁同步电机控制方法和装置以及空调设备",
              imgSrc: require(`./assets/img/发明专利/90.jpg`)
            },
            {
              name: "测试线控器的方法和装置",
              imgSrc: require(`./assets/img/发明专利/91.jpg`)
            },
            {
              name: "故障检测装置及方法",
              imgSrc: require(`./assets/img/发明专利/92.jpg`)
            },
            {
              name: "控制多联机空调系统中温湿度的方法及多联机空调系统",
              imgSrc: require(`./assets/img/发明专利/93.jpg`)
            },
            {
              name: "油分离器",
              imgSrc: require(`./assets/img/发明专利/94.jpg`)
            },
            {
              name: "烟雾报警保护水模块及风冷热泵系统",
              imgSrc: require(`./assets/img/发明专利/95.jpg`)
            },
            {
              name: "一多联机热泵空调系统及控制多联机热泵空调系统的方法",
              imgSrc: require(`./assets/img/发明专利/96.jpg`)
            },
            {
              name: "空调器排气消音装置及消音方法",
              imgSrc: require(`./assets/img/发明专利/97.jpg`)
            },
            {
              name: "顶出风的空调室外机及空调及其控制方法",
              imgSrc: require(`./assets/img/发明专利/98.jpg`)
            },
            {
              name: "空调系统及其除湿方法",
              imgSrc: require(`./assets/img/发明专利/99.jpg`)
            },
            {
              name: "一种寒冷地区用多联机热泵系统及其控制方法",
              imgSrc: require(`./assets/img/发明专利/100.jpg`)
            },
            {
              name: "一种空调散热循环系统",
              imgSrc: require(`./assets/img/发明专利/101.jpg`)
            },
            {
              name: "控制空调室内机的方法及空调室内机",
              imgSrc: require(`./assets/img/发明专利/102.jpg`)
            },
            {
              name: "空调控制装置及其定时开机的控制方法",
              imgSrc: require(`./assets/img/发明专利/103.jpg`)
            },
            {
              name: "空调节能控制方法及空调",
              imgSrc: require(`./assets/img/发明专利/104.jpg`)
            },
            {
              name: "无线集中控制器、及中央空调远程控制方法和系统",
              imgSrc: require(`./assets/img/发明专利/105.jpg`)
            },
            {
              name: "室内机负荷容量控制系统及室内机负荷容量控制方法",
              imgSrc: require(`./assets/img/发明专利/106.jpg`)
            },
            {
              name: "一种空调室内机换热器翅片导流结构",
              imgSrc: require(`./assets/img/发明专利/107.jpg`)
            },
            {
              name: "支持多移动终端远程控制中央空调的系统和方法",
              imgSrc: require(`./assets/img/发明专利/108.jpg`)
            },
            {
              name: "风管式空调室内机",
              imgSrc: require(`./assets/img/发明专利/109.jpg`)
            },
            {
              name: "三管制全热处理多联机空调系统及温湿度独立控制方法",
              imgSrc: require(`./assets/img/发明专利/110.jpg`)
            },
            {
              name: "多联式中央空调的集中控制系统和控制方法",
              imgSrc: require(`./assets/img/发明专利/111.jpg`)
            },
            {
              name: "地暖式多联机空调系统",
              imgSrc: require(`./assets/img/发明专利/112.jpg`)
            },
            {
              name: "多联机空调控油系统及控油方法",
              imgSrc: require(`./assets/img/发明专利/113.jpg`)
            },
            {
              name: "多联机空调控油系统及控油方法",
              imgSrc: require(`./assets/img/发明专利/114.jpg`)
            },
            {
              name: "一种带辅助水冷装置的风冷式空调机组以及控制方法",
              imgSrc: require(`./assets/img/发明专利/115.jpg`)
            },
            {
              name: "多联机空调地暖控制系统及其温度控制方法",
              imgSrc: require(`./assets/img/发明专利/116.jpg`)
            },
            {
              name: "中央空调控制系统及其控制软件升级方法",
              imgSrc: require(`./assets/img/发明专利/117.jpg`)
            },
            {
              name: "油气分离器",
              imgSrc: require(`./assets/img/发明专利/118.jpg`)
            },
            {
              name: "基于图形界面的中央空调集中控制系统和控制方法",
              imgSrc: require(`./assets/img/发明专利/119.jpg`)
            },
            {
              name: "基于移动终端的远程控制中央空调的系统和方法",
              imgSrc: require(`./assets/img/发明专利/120.jpg`)
            },
            {
              name: "风管式室内机及控制风管式室内机容量的方法",
              imgSrc: require(`./assets/img/发明专利/121.jpg`)
            },
            {
              name: "智能家居楼宇控制系统及其接入空调系统的方法",
              imgSrc: require(`./assets/img/发明专利/122.jpg`)
            },
            {
              name: "基于管壳式换热器的回油控制系统",
              imgSrc: require(`./assets/img/发明专利/123.jpg`)
            },
            {
              name: "基于多联式空调系统降噪的分流装置",
              imgSrc: require(`./assets/img/发明专利/124.jpg`)
            },
            {
              name: "负荷自适应变频多联式热泵系统及控制压缩机频率的方法",
              imgSrc: require(`./assets/img/发明专利/125.jpg`)
            },
            {
              name: "多联机空调系统的制冷剂流量控制方法和装置",
              imgSrc: require(`./assets/img/发明专利/126.jpg`)
            },
            {
              name: "自由静压风管机",
              imgSrc: require(`./assets/img/发明专利/127.jpg`)
            },
            {
              name: "多联机空调系统及其冷凝器",
              imgSrc: require(`./assets/img/发明专利/128.jpg`)
            },
            {
              name: "兼容局域网和广域网的中央空调控制系统和控制方法",
              imgSrc: require(`./assets/img/发明专利/129.jpg`)
            },
            {
              name: "基于室内机编组的空调集中控制方法及多联机空调系统",
              imgSrc: require(`./assets/img/发明专利/130.jpg`)
            },
            {
              name: "基于摄像头的空调系统及空调控制方法",
              imgSrc: require(`./assets/img/发明专利/131.jpg`)
            },
            {
              name: "基于微通道换热器的变频多联式空调及其控制方法",
              imgSrc: require(`./assets/img/发明专利/132.jpg`)
            },
            {
              name: "热回收变频多联式热泵系统及其控制方法",
              imgSrc: require(`./assets/img/发明专利/133.jpg`)
            },
            {
              name: "导风组件、空调及空调导风板控制方法",
              imgSrc: require(`./assets/img/发明专利/134.jpg`)
            },
            {
              name: "中央空调系统及其室内机地址配置方法",
              imgSrc: require(`./assets/img/发明专利/135.jpg`)
            },
            {
              name: "单相电源接线判定方法及单相电源相位检测电路",
              imgSrc: require(`./assets/img/发明专利/136.jpg`)
            },
            {
              name: "一种空调器循环系统",
              imgSrc: require(`./assets/img/发明专利/137.jpg`)
            },
            {
              name: "一种空调的模糊控制方法及其系统",
              imgSrc: require(`./assets/img/发明专利/138.jpg`)
            },
            {
              name: "一种风管式空调室内机静压的自动识别方法及其系统",
              imgSrc: require(`./assets/img/发明专利/139.jpg`)
            },
            {
              name: "HBS总线通信协议与RS-485总线通信协议的双向通信转换方法",
              imgSrc: require(`./assets/img/发明专利/140.jpg`)
            },
            {
              name: "热回收式多联空调机组",
              imgSrc: require(`./assets/img/发明专利/141.jpg`)
            },
            {
              name: "基于嵌入式系统实现数据异步接收的方法",
              imgSrc: require(`./assets/img/发明专利/142.jpg`)
            }
          ]
        },
        {
          classifyId: 3,
          title: "实用新型",
          img: [
            {
              name: "具有电加热装置的管壳式蒸发器",
              imgSrc: require(`./assets/img/实用新型/1.jpg`)
            },
            {
              name: "一种空气源热泵系统",
              imgSrc: require(`./assets/img/实用新型/2.jpg`)
            },
            {
              name: "一种温度传感器用固定装置及空调",
              imgSrc: require(`./assets/img/实用新型/3.jpg`)
            },
            {
              name: "一种空调器室外机的散热系统及具有该散热系统的室外机",
              imgSrc: require(`./assets/img/实用新型/4.jpg`)
            },
            {
              name: "一种空调控制器",
              imgSrc: require(`./assets/img/实用新型/5.jpg`)
            },
            {
              name: "冷媒散热片以及空调",
              imgSrc: require(`./assets/img/实用新型/6.jpg`)
            },
            {
              name: "涡舌结构、离心风扇以及空调器",
              imgSrc: require(`./assets/img/实用新型/7.jpg`)
            },
            {
              name: "一种空调控制系统及空调",
              imgSrc: require(`./assets/img/实用新型/8.jpg`)
            },
            {
              name: "一种板式换热器以及空调器",
              imgSrc: require(`./assets/img/实用新型/9.jpg`)
            },
            {
              name: "一种室外机壳体及空调室外机",
              imgSrc: require(`./assets/img/实用新型/10.jpg`)
            },
            {
              name: "一种全热交换器控制板及全热交换器控制系统",
              imgSrc: require(`./assets/img/实用新型/11.jpg`)
            },
            {
              name: "一种空调室内机电机控制电路及空调室内机",
              imgSrc: require(`./assets/img/实用新型/12.jpg`)
            },
            {
              name: "一种过压保护电路及电子产品",
              imgSrc: require(`./assets/img/实用新型/13.jpg`)
            },
            {
              name: "一种端子排及空调器",
              imgSrc: require(`./assets/img/实用新型/14.jpg`)
            },
            {
              name: "一种空调室内机过滤网安装结构及空调室内机",
              imgSrc: require(`./assets/img/实用新型/15.jpg`)
            },
            {
              name: "离心风机减震轴套和离心风机",
              imgSrc: require(`./assets/img/实用新型/16.jpg`)
            },
            {
              name: "一种用于空调分流器组件的隔离结构及风管机",
              imgSrc: require(`./assets/img/实用新型/17.jpg`)
            },
            {
              name: "一种空调室内机",
              imgSrc: require(`./assets/img/实用新型/18.jpg`)
            },
            {
              name: "一种降低空调噪音的室内机",
              imgSrc: require(`./assets/img/实用新型/19.jpg`)
            },
            {
              name: "一种配管过滤器以及空调",
              imgSrc: require(`./assets/img/实用新型/20.jpg`)
            },
            {
              name: "一种空调室内机出风口结构及空调室内机",
              imgSrc: require(`./assets/img/实用新型/21.jpg`)
            },
            {
              name: "一种空调室外机及空调",
              imgSrc: require(`./assets/img/实用新型/22.jpg`)
            },
            {
              name: "一种空调室内机壳体与出风口框体用连接套件及空调室内机",
              imgSrc: require(`./assets/img/实用新型/23.jpg`)
            },
            {
              name: "一种温度传感器的固定装置以及空调器",
              imgSrc: require(`./assets/img/实用新型/24.jpg`)
            },
            {
              name: "多联式中央空调控制器和多联式中央空调系统",
              imgSrc: require(`./assets/img/实用新型/25.jpg`)
            },
            {
              name: "压缩机隔音罩及空调室外机",
              imgSrc: require(`./assets/img/实用新型/26.jpg`)
            },
            {
              name: "一种变压器电气盒以及空调室外机",
              imgSrc: require(`./assets/img/实用新型/27.jpg`)
            },
            {
              name: "一种通用型压缩机底座以及空调室外机",
              imgSrc: require(`./assets/img/实用新型/28.jpg`)
            },
            {
              name: "一种空调室外机",
              imgSrc: require(`./assets/img/实用新型/29.jpg`)
            },
            {
              name: "空调室外机",
              imgSrc: require(`./assets/img/实用新型/30.jpg`)
            },
            {
              name: "一种风管机",
              imgSrc: require(`./assets/img/实用新型/31.jpg`)
            },
            {
              name: "一种PM2.5过滤箱",
              imgSrc: require(`./assets/img/实用新型/32.jpg`)
            },
            {
              name: "浮子开关安装结构",
              imgSrc: require(`./assets/img/实用新型/33.jpg`)
            },
            {
              name: "一种浮子开关固定装置",
              imgSrc: require(`./assets/img/实用新型/34.jpg`)
            },
            {
              name: "一种微通道换热器组件",
              imgSrc: require(`./assets/img/实用新型/35.jpg`)
            },
            {
              name: "一种分流器以及空调",
              imgSrc: require(`./assets/img/实用新型/36.jpg`)
            },
            {
              name: "一种换热器用均流孔板和板式换热器",
              imgSrc: require(`./assets/img/实用新型/37.jpg`)
            },
            {
              name: "一种空调室外机",
              imgSrc: require(`./assets/img/实用新型/38.jpg`)
            },
            {
              name: "一种补气增焓的空调系统",
              imgSrc: require(`./assets/img/实用新型/39.jpg`)
            },
            {
              name: "一种换热器组件及空调",
              imgSrc: require(`./assets/img/实用新型/40.jpg`)
            },
            {
              name: "地暖式多联机空调系统",
              imgSrc: require(`./assets/img/实用新型/41.jpg`)
            },
            {
              name: "一种变频空调的变频驱动电路",
              imgSrc: require(`./assets/img/实用新型/42.jpg`)
            },
            {
              name: "多孔式气液分离器",
              imgSrc: require(`./assets/img/实用新型/43.jpg`)
            },
            {
              name: "消音单向阀及使用消音单向阀的排气管",
              imgSrc: require(`./assets/img/实用新型/44.jpg`)
            },
            {
              name: "油气分离器",
              imgSrc: require(`./assets/img/实用新型/45.jpg`)
            },
            {
              name: "中央空调远程控制系统及其无线集中控制器",
              imgSrc: require(`./assets/img/实用新型/46.jpg`)
            },
            {
              name: "集中控制器、及多联式中央空调的集中控制系统",
              imgSrc: require(`./assets/img/实用新型/47.jpg`)
            },
            {
              name: "三管制全热处理多联机空调系统",
              imgSrc: require(`./assets/img/实用新型/48.jpg`)
            },
            {
              name: "中央空调集中控制系统",
              imgSrc: require(`./assets/img/实用新型/49.jpg`)
            },
            {
              name: "用于高温环境下的空调器",
              imgSrc: require(`./assets/img/实用新型/50.jpg`)
            },
            {
              name: "油分离器",
              imgSrc: require(`./assets/img/实用新型/51.jpg`)
            },
            {
              name: "一种电子膨胀阀控制电路",
              imgSrc: require(`./assets/img/实用新型/52.jpg`)
            },
            {
              name: "防沙耐高温换热器翅片",
              imgSrc: require(`./assets/img/实用新型/53.jpg`)
            },
            {
              name: "多联机热泵空调系统",
              imgSrc: require(`./assets/img/实用新型/54.jpg`)
            },
            {
              name: "空调器排气消音装置",
              imgSrc: require(`./assets/img/实用新型/55.jpg`)
            },
            {
              name: "一种空调除霜循环系统",
              imgSrc: require(`./assets/img/实用新型/56.jpg`)
            },
            {
              name: "一种空调传感器固定夹具",
              imgSrc: require(`./assets/img/实用新型/57.jpg`)
            },
            {
              name: "一种多联式空调器热水除霜循环系统",
              imgSrc: require(`./assets/img/实用新型/58.jpg`)
            },
            {
              name: "一种多联式空调低温制热循环系统",
              imgSrc: require(`./assets/img/实用新型/59.jpg`)
            },
            {
              name: "一种多联式空调换热器",
              imgSrc: require(`./assets/img/实用新型/60.jpg`)
            },
            {
              name: "一种温度传感器模拟装置",
              imgSrc: require(`./assets/img/实用新型/61.jpg`)
            },
            {
              name: "一种带有二氧化碳检测装置的空调",
              imgSrc: require(`./assets/img/实用新型/62.jpg`)
            },
            {
              name: "一种扁管微通道铝制散热器",
              imgSrc: require(`./assets/img/实用新型/63.jpg`)
            },
            {
              name: "一种新风空调电子膨胀阀控制系统",
              imgSrc: require(`./assets/img/实用新型/64.jpg`)
            },
            {
              name: "基于太阳能热水器的空调联动系统",
              imgSrc: require(`./assets/img/实用新型/65.jpg`)
            },
            {
              name: "空调循环系统",
              imgSrc: require(`./assets/img/实用新型/66.jpg`)
            },
            {
              name: "空调便携式电子膨胀阀驱动装置",
              imgSrc: require(`./assets/img/实用新型/67.jpg`)
            },
            {
              name: "空调辅助电加热保护装置",
              imgSrc: require(`./assets/img/实用新型/68.jpg`)
            },
            {
              name: "中央空调系统",
              imgSrc: require(`./assets/img/实用新型/69.jpg`)
            },
            {
              name: "空调机组电气盒及设置该电气盒的空调机组",
              imgSrc: require(`./assets/img/实用新型/70.jpg`)
            },
            {
              name: "空气能热泵热水器",
              imgSrc: require(`./assets/img/实用新型/71.jpg`)
            },
            {
              name: "中央空调系统",
              imgSrc: require(`./assets/img/实用新型/72.jpg`)
            },
            {
              name: "防反转风机",
              imgSrc: require(`./assets/img/实用新型/73.jpg`)
            },
            {
              name: "可分户计费的空调",
              imgSrc: require(`./assets/img/实用新型/74.jpg`)
            },
            {
              name: "逆相自动纠正电路及设置该电路的空调",
              imgSrc: require(`./assets/img/实用新型/75.jpg`)
            },
            {
              name: "多联式空调系统供油机构",
              imgSrc: require(`./assets/img/实用新型/76.jpg`)
            },
            {
              name: "使用卸荷阀的热泵空调",
              imgSrc: require(`./assets/img/实用新型/77.jpg`)
            },
            {
              name: "室内机换热结构及设置该换热结构的室内机",
              imgSrc: require(`./assets/img/实用新型/78.jpg`)
            },
            {
              name: "一种空调机组均油控制系统",
              imgSrc: require(`./assets/img/实用新型/79.jpg`)
            },
            {
              name: "空调制冷回路及设置该回路的空调",
              imgSrc: require(`./assets/img/实用新型/80.jpg`)
            },
            {
              name: "空调机组油分离器均油平衡系统",
              imgSrc: require(`./assets/img/实用新型/81.jpg`)
            },
            {
              name: "带有旁通水路的地源多联空调",
              imgSrc: require(`./assets/img/实用新型/82.jpg`)
            },
            {
              name: "地源多联变频空调",
              imgSrc: require(`./assets/img/实用新型/83.jpg`)
            },
            {
              name: "基于WEB服务的空调管理和计费系统",
              imgSrc: require(`./assets/img/实用新型/84.jpg`)
            },
            {
              name: "空调机组油分离器均油平衡系统",
              imgSrc: require(`./assets/img/实用新型/81.jpg`)
            },
            {
              name: "新型变频多联式水热交换器机组",
              imgSrc: require(`./assets/img/实用新型/85.jpg`)
            },
            {
              name: "一种可控制长管路中制冷剂量的空调器",
              imgSrc: require(`./assets/img/实用新型/86.jpg`)
            },
            {
              name: "一种新型管壳式换热器",
              imgSrc: require(`./assets/img/实用新型/87.jpg`)
            },
            {
              name: "带减压回路的室内新风机",
              imgSrc: require(`./assets/img/实用新型/88.jpg`)
            },
            {
              name: "基于HBS的点阵液晶空调控制器",
              imgSrc: require(`./assets/img/实用新型/89.jpg`)
            },
            {
              name: "具有无线接收功能的有线遥控器",
              imgSrc: require(`./assets/img/实用新型/90.jpg`)
            },
            {
              name: "一种空调用气液分离器",
              imgSrc: require(`./assets/img/实用新型/91.jpg`)
            },
            {
              name: "一种应用于空冷式多联机的新型储液器",
              imgSrc: require(`./assets/img/实用新型/92.jpg`)
            },
            {
              name: "一种带储液器的水源多联机空调系统",
              imgSrc: require(`./assets/img/实用新型/93.jpg`)
            },
            {
              name: "一种新型带烘干功能的空调系统",
              imgSrc: require(`./assets/img/实用新型/94.jpg`)
            },
            {
              name: "基于HBS总线空调机的GSM远程控制器",
              imgSrc: require(`./assets/img/实用新型/95.jpg`)
            },
            {
              name: "一种冷媒流动音消音器",
              imgSrc: require(`./assets/img/实用新型/96.jpg`)
            },
            {
              name: "具有防呆设计的空调风机用联轴器",
              imgSrc: require(`./assets/img/实用新型/97.jpg`)
            },
            {
              name: "一种空调变频模块的新型散热装置",
              imgSrc: require(`./assets/img/实用新型/98.jpg`)
            },
            {
              name: "具有提供冷热饮用水功能的新型空调系统",
              imgSrc: require(`./assets/img/实用新型/99.jpg`)
            }
          ]
        },
        {
          classifyId: 4,
          title: "外观设计",
          img: [
            {
              name: "中央空调室外机格栅",
              imgSrc: require(`./assets/img/外观设计/1.jpg`)
            },
            {
              name: "中央空调面板",
              imgSrc: require(`./assets/img/外观设计/2.jpg`)
            },
            {
              name: "商用空调用一键控制器",
              imgSrc: require(`./assets/img/外观设计/3.jpg`)
            },
            {
              name: "空调室外机",
              imgSrc: require(`./assets/img/外观设计/4.jpg`)
            },
            {
              name: "新风净化机",
              imgSrc: require(`./assets/img/外观设计/5.jpg`)
            },
            {
              name: "空调室外机",
              imgSrc: require(`./assets/img/外观设计/6.jpg`)
            },
            {
              name: "嵌入式两面出风空调室内机",
              imgSrc: require(`./assets/img/外观设计/7.jpg`)
            },
            {
              name: "空调墙面控制器",
              imgSrc: require(`./assets/img/外观设计/8.jpg`)
            },
            {
              name: "单面出风嵌入式空调机面板(一)",
              imgSrc: require(`./assets/img/外观设计/9.jpg`)
            },
            {
              name: "单面出风嵌入式空调机面板(二)",
              imgSrc: require(`./assets/img/外观设计/10.jpg`)
            },
            {
              name: "空调遥控器",
              imgSrc: require(`./assets/img/外观设计/11.jpg`)
            },
            {
              name: "空调室内机",
              imgSrc: require(`./assets/img/外观设计/12.jpg`)
            },
            {
              name: "空调遥控器",
              imgSrc: require(`./assets/img/外观设计/13.jpg`)
            },

            {
              name: "全热交换器（超薄）",
              imgSrc: require(`./assets/img/外观设计/14.jpg`)
            },
            {
              name: "空调线控器",
              imgSrc: require(`./assets/img/外观设计/15.jpg`)
            },
            {
              name: "中央空调控制器",
              imgSrc: require(`./assets/img/外观设计/16.jpg`)
            },
            {
              name: "空调控制器",
              imgSrc: require(`./assets/img/外观设计/17.jpg`)
            },
            {
              name: "空调器面板",
              imgSrc: require(`./assets/img/外观设计/18.jpg`)
            },
            {
              name: "空调线控器",
              imgSrc: require(`./assets/img/外观设计/19.jpg`)
            },
            {
              name: "空调遥控器",
              imgSrc: require(`./assets/img/外观设计/20.jpg`)
            },
            {
              name: "空调器室外机（一）",
              imgSrc: require(`./assets/img/外观设计/21.jpg`)
            },
            {
              name: "空调器室外机（二）",
              imgSrc: require(`./assets/img/外观设计/22.jpg`)
            },
            {
              name: "空调器室外机（三）",
              imgSrc: require(`./assets/img/外观设计/23.jpg`)
            },
            {
              name: "空调器室外机（四）",
              imgSrc: require(`./assets/img/外观设计/24.jpg`)
            },

            {
              name: "空调线控器",
              imgSrc: require(`./assets/img/外观设计/25.jpg`)
            },
            {
              name: "三管制水源多联机室外机",
              imgSrc: require(`./assets/img/外观设计/26.jpg`)
            },
            {
              name: "风冷式冷热水机组",
              imgSrc: require(`./assets/img/外观设计/27.jpg`)
            },
            {
              name: "空调线控器",
              imgSrc: require(`./assets/img/外观设计/28.jpg`)
            },
            {
              name: "空调线控器",
              imgSrc: require(`./assets/img/外观设计/29.jpg`)
            },
            {
              name: "空调线控器（86）",
              imgSrc: require(`./assets/img/外观设计/30.jpg`)
            },
            {
              name: "空调线控器（120）",
              imgSrc: require(`./assets/img/外观设计/31.jpg`)
            },
            {
              name: "商用空调线控器",
              imgSrc: require(`./assets/img/外观设计/32.jpg`)
            },
            {
              name: "中央空调线控器",
              imgSrc: require(`./assets/img/外观设计/33.jpg`)
            },
            {
              name: "空调内机面板",
              imgSrc: require(`./assets/img/外观设计/34.jpg`)
            },
            {
              name: "人感应器",
              imgSrc: require(`./assets/img/外观设计/35.jpg`)
            },
            {
              name: "手机远程控制器（i-EZ）",
              imgSrc: require(`./assets/img/外观设计/36.jpg`)
            },
            {
              name: "手机远程控制器（i-EZ）",
              imgSrc: require(`./assets/img/外观设计/37.jpg`)
            },
            {
              name: "手机远程控制器（i-EZ）",
              imgSrc: require(`./assets/img/外观设计/38.jpg`)
            },

            {
              name: "智能语音控制器",
              imgSrc: require(`./assets/img/外观设计/39.jpg`)
            },
            {
              name: "空调线控器",
              imgSrc: require(`./assets/img/外观设计/40.jpg`)
            },
            {
              name: "空气盒子",
              imgSrc: require(`./assets/img/外观设计/41.jpg`)
            },
            {
              name: "空调面板",
              imgSrc: require(`./assets/img/外观设计/42.jpg`)
            }
          ]
        }
      ]
    };
  },
  computed: {
    filterTitle() {
      return this.filterTitleList[this.filterIndex].title;
    }
  },
  methods: {
    onShowImg(imgIndex, filterTitle) {
      document.body.style.overflow = "hidden";
      this.showImgkey = true;
      this.activeImgSrc = require(`./assets/img/large/${filterTitle}/${imgIndex + 1}.jpg`);
    },
    onHideImg() {
      document.body.style.overflow = "auto";
      this.showImgkey = false;
      this.activeImgSrc = "";
    },
    onFilterImg(index) {
      index = parseInt(index);
      this.searchValue = "";
      this.filterIndex = this.filterIndex == index ? 0 : index; // 点击一次选中分区 再点击取消分区筛选
    },
    onInput() {
      if (this.searchValue) {
        this.filterIndex = 5;
      } else {
        this.filterIndex = 0;
      }
    },
    onShowMessage() {
      if (!this.message) {
        // 简单防抖
        this.message = true;
        setTimeout(() => {
          this.message = false;
        }, 2000);
      }
    },
    onSearch() {
      this.searchValue ? "" : this.onShowMessage();
    }
  }
};
</script>

<style lang="less">
@import "./assets/style/reset.css";

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate(-50%, -80%) !important;
}
.v-enter-to,
.v-leave {
  opacity: 1;
  transform: translate(-50%, -50%) !important;
}
.v-enter-active,
.v-leave-active {
  transition: all 500ms ease-in-out;
}

@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  padding: 168px 20px 0px;
  .el-message {
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 88;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 45px;
    background-color: #fef0f0;
    border: 1px solid #fde2e2;
    border-radius: 5px;
    font-size: 14px;
    color: #f56c6c;
    span {
      font-size: 0px;
      margin: 0px 12px;
    }
  }
  .shade {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 8;
    background: rgba(0, 0, 0, 0.6);
    .loading,
    .show-img {
      position: absolute;
      top: 50%;
      left: 50%;
      max-width: 88%;
      transform: translate(-50%, -50%);
    }
    .loading {
      animation: rotate 2000ms linear infinite;
      font-size: 0px;
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
      .search-button {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0px;
        top: 0px;
        width: 66px;
        height: 26px;
        border-radius: 13px;
        background: linear-gradient(to bottom, #5bfcff, #009ea2);
        span {
          &:first-child {
            font-size: 0px;
            margin-right: 4px;
          }
          &:last-child {
            font-size: 14px;
            color: #fff;
            line-height: 14px;
          }
        }
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
