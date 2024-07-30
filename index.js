// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2t5NTAwIiwiYSI6ImNsejd6MmYyZDBjbG8ybHM4enlucG1zbWgifQ.3w8qiGcZx0jLXPIb-ipVLA";

//数据来源：https://www.microsoft.com/en-us/download/details.aspx?id=52367
const baseData = [
  [
    "39.9754666666667",
    "116.325216666667",
    "0",
    "114.829396325459",
    "39531.384224537",
    "2008-03-24",
    "09:13:17",
  ],
  [
    "39.9754333333333",
    "116.324983333333",
    "0",
    "104.98687664042",
    "39531.3844212963",
    "2008-03-24",
    "09:13:34",
  ],
  [
    "39.9753333333333",
    "116.324616666667",
    "0",
    "111.548556430446",
    "39531.3847685185",
    "2008-03-24",
    "09:14:04",
  ],
  [
    "39.9753166666667",
    "116.324333333333",
    "0",
    "101.706036745407",
    "39531.3849884259",
    "2008-03-24",
    "09:14:23",
  ],
  [
    "39.9753833333333",
    "116.324066666667",
    "0",
    "101.706036745407",
    "39531.3852314815",
    "2008-03-24",
    "09:14:44",
  ],
  [
    "39.9754",
    "116.323766666667",
    "0",
    "98.4251968503937",
    "39531.3854976852",
    "2008-03-24",
    "09:15:07",
  ],
  [
    "39.9753",
    "116.323516666667",
    "0",
    "98.4251968503937",
    "39531.3857523148",
    "2008-03-24",
    "09:15:29",
  ],
  [
    "39.97525",
    "116.322683333333",
    "0",
    "55.7742782152231",
    "39531.386412037",
    "2008-03-24",
    "09:16:26",
  ],
  [
    "39.9752166666667",
    "116.321683333333",
    "0",
    "26.246719160105",
    "39531.3871064815",
    "2008-03-24",
    "09:17:26",
  ],
  [
    "39.9752",
    "116.321233333333",
    "0",
    "0",
    "39531.3874537037",
    "2008-03-24",
    "09:17:56",
  ],
  [
    "39.9752",
    "116.321016666667",
    "0",
    "0",
    "39531.3876157407",
    "2008-03-24",
    "09:18:10",
  ],
  [
    "39.9752666666667",
    "116.320633333333",
    "0",
    "0",
    "39531.3879861111",
    "2008-03-24",
    "09:18:42",
  ],
  [
    "39.9752833333333",
    "116.320366666667",
    "0",
    "0",
    "39531.3882175926",
    "2008-03-24",
    "09:19:02",
  ],
  [
    "39.9753166666667",
    "116.32",
    "0",
    "0",
    "39531.3884953704",
    "2008-03-24",
    "09:19:26",
  ],
  [
    "39.9753",
    "116.319766666667",
    "0",
    "0",
    "39531.3887152778",
    "2008-03-24",
    "09:19:45",
  ],
  [
    "39.9753166666667",
    "116.3194",
    "0",
    "0",
    "39531.3890509259",
    "2008-03-24",
    "09:20:14",
  ],
  [
    "39.97515",
    "116.3193",
    "0",
    "39.3700787401575",
    "39531.3893402778",
    "2008-03-24",
    "09:20:39",
  ],
  [
    "39.9748",
    "116.319316666667",
    "0",
    "55.7742782152231",
    "39531.3896875",
    "2008-03-24",
    "09:21:09",
  ],
  [
    "39.9746166666667",
    "116.319283333333",
    "0",
    "55.7742782152231",
    "39531.3898958333",
    "2008-03-24",
    "09:21:27",
  ],
  [
    "39.9744666666667",
    "116.319366666667",
    "0",
    "19.6850393700787",
    "39531.3901041667",
    "2008-03-24",
    "09:21:45",
  ],
  [
    "39.9742666666667",
    "116.319316666667",
    "0",
    "49.2125984251968",
    "39531.3902777778",
    "2008-03-24",
    "09:22:00",
  ],
  [
    "39.9739833333333",
    "116.31925",
    "0",
    "95.1443569553806",
    "39531.3905555556",
    "2008-03-24",
    "09:22:24",
  ],
  [
    "39.97355",
    "116.3192",
    "0",
    "124.671916010499",
    "39531.3910532407",
    "2008-03-24",
    "09:23:07",
  ],
  [
    "39.9732833333333",
    "116.319183333333",
    "0",
    "147.637795275591",
    "39531.3913425926",
    "2008-03-24",
    "09:23:32",
  ],
  [
    "39.97315",
    "116.3192",
    "0",
    "137.795275590551",
    "39531.3921180556",
    "2008-03-24",
    "09:24:39",
  ],
  [
    "39.9730333333333",
    "116.3192",
    "0",
    "160.761154855643",
    "39531.3922222222",
    "2008-03-24",
    "09:24:48",
  ],
  [
    "39.9729",
    "116.319283333333",
    "0",
    "157.48031496063",
    "39531.3923611111",
    "2008-03-24",
    "09:25:00",
  ],
  [
    "39.9726666666667",
    "116.31925",
    "0",
    "157.48031496063",
    "39531.392650463",
    "2008-03-24",
    "09:25:25",
  ],
  [
    "39.9724333333333",
    "116.319216666667",
    "0",
    "170.603674540682",
    "39531.3929050926",
    "2008-03-24",
    "09:25:47",
  ],
  [
    "39.9722833333333",
    "116.31925",
    "0",
    "147.637795275591",
    "39531.3931365741",
    "2008-03-24",
    "09:26:07",
  ],
];
init();
async function init() {
  //   const response = await fetch("./output.json");
  //   const baseData = await response.json();
  //   console.log(baseData);
  const map = new mapboxgl.Map({
    container: "map", // container ID
    center: [0, 0], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9, // starting zoom
  });
  const points = baseData.map((point) => {
    return [parseFloat(point[1]), parseFloat(point[0])];
  });

  map.on("load", () => {
    //添加路径
    map.addSource("route", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: points,
            },
          },
        ],
      },
    });
    map.addLayer({
      id: "points",
      type: "line",
      source: "route",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#888",
        "line-width": 8,
      },
    });
    //移动镜头到路径位置
    map.flyTo({
      center: points[0],
      zoom: 17,
    });

    map.addControl(new mapboxgl.NavigationControl());
    //添加gltf模型到第一个点
    // 用于定位、旋转和缩放 3D 模型的变换参数
    const modelOrigin = points[0];
    const modelAltitude = 0;
    const modelRotate = [Math.PI / 2, 0, 0];
    const modelAsMercatorCoordinate = mapboxgl.MercatorCoordinate.fromLngLat(
      modelOrigin,
      modelAltitude
    );
    const modelTransform = {
      translateX: modelAsMercatorCoordinate.x,
      translateY: modelAsMercatorCoordinate.y,
      translateZ: modelAsMercatorCoordinate.z,
      rotateX: modelRotate[0],
      rotateY: modelRotate[1],
      rotateZ: modelRotate[2],
      // 由于 3D 模型的单位是实际世界的米，需要应用缩放变换
      scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits(),
    };
    const customLayer = {
      id: "3d-model",
      type: "custom",
      renderingMode: "3d",
      onAdd: function (map, gl) {
        this.camera = new THREE.Camera();
        this.scene = new THREE.Scene();

        // 创建两个 three.js 灯光以照亮模型
        const directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(0, -70, 100).normalize();
        this.scene.add(directionalLight);

        const directionalLight2 = new THREE.DirectionalLight(0xffffff);
        directionalLight2.position.set(0, 70, 100).normalize();
        this.scene.add(directionalLight2);

        // 使用 three.js 的 GLTF 加载器将 3D 模型添加到场景中
        const loader = new THREE.GLTFLoader();
        loader.load(
          "./assets/bicycle_low-poly_minimalistic/scene.gltf",
          (gltf) => {
            this.scene.add(gltf.scene);
          }
        );
      },
    };
    map.addLayer(customLayer);
  });
}
