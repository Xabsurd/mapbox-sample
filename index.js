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
  const points = baseData.map((point) => {
    return [parseFloat(point[1]), parseFloat(point[0])];
  });
  const map = new mapboxgl.Map({
    container: "map", // container ID
    center: points[0], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 20, // starting zoom
  });
  //时间戳
  let tick = 0;
  let firstRender = true;

  let baseTick = 0;
  let pointIndex = 0;
  let firstTime = new Date(baseData[0][5] + " " + baseData[0][6]).getTime();

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
    //添加路径到地图中并设置样式
    map.addLayer({
      id: "points",
      type: "line",
      source: "route",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#ceff00",
        "line-width": 16,
      },
    });

    map.addControl(new mapboxgl.NavigationControl());
    // 用于定位、旋转和缩放 3D 模型的变换参数
    let modelTransform = null;
    //使用官方示例中添加模型的方式
    const customLayer = {
      id: "3d-model",
      type: "custom",
      renderingMode: "3d",
      onAdd: function (map, gl) {
        this.camera = new THREE.Camera();
        this.scene = new THREE.Scene();

        // create two three.js lights to illuminate the model
        const directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(0, -70, 100).normalize();
        this.scene.add(directionalLight);

        const directionalLight2 = new THREE.DirectionalLight(0xffffff);
        directionalLight2.position.set(0, 70, 100).normalize();
        this.scene.add(directionalLight2);

        // use the three.js GLTF loader to add the 3D model to the three.js scene
        const loader = new THREE.GLTFLoader();
        loader.load(
          "./assets/bicycle_low-poly_minimalistic/scene.gltf",
          (gltf) => {
            this.scene.add(gltf.scene);
          }
        );
        this.map = map;

        // use the Mapbox GL JS map canvas for three.js
        this.renderer = new THREE.WebGLRenderer({
          canvas: map.getCanvas(),
          context: gl,
          antialias: true,
        });

        this.renderer.autoClear = false;
      },
      render: function (gl, matrix) {
        if (firstRender) {
          baseTick = Date.now();
          firstRender = false;
        }
        tick = Date.now() - baseTick;
        modelTransform = changeModelPosition();
        console.log(modelTransform.rotateX);
        const rotationX = new THREE.Matrix4().makeRotationAxis(
          new THREE.Vector3(1, 0, 0),
          modelTransform.rotateX
        );
        const rotationY = new THREE.Matrix4().makeRotationAxis(
          new THREE.Vector3(0, 1, 0),
          modelTransform.rotateY
        );
        const rotationZ = new THREE.Matrix4().makeRotationAxis(
          new THREE.Vector3(0, 0, 1),
          modelTransform.rotateZ
        );
        const m = new THREE.Matrix4().fromArray(matrix);
        const l = new THREE.Matrix4()
          .makeTranslation(
            modelTransform.translateX,
            modelTransform.translateY,
            modelTransform.translateZ
          )
          .scale(
            new THREE.Vector3(
              modelTransform.scale,
              -modelTransform.scale,
              modelTransform.scale
            )
          )
          .multiply(rotationX)
          .multiply(rotationY)
          .multiply(rotationZ);

        this.camera.projectionMatrix = m.multiply(l);
        this.renderer.resetState();
        this.renderer.render(this.scene, this.camera);
        this.map.triggerRepaint();
      },
    };
    map.addLayer(customLayer);
  });
  const changeModelPosition = () => {
    //当前点的时间
    const pointTime = new Date(
      baseData[pointIndex][5] + " " + baseData[pointIndex][6]
    ).getTime();
    //下一个点的时间
    const nextPointTime = new Date(
      baseData[pointIndex + 1][5] + " " + baseData[pointIndex + 1][6]
    ).getTime();
    //如果记录的时间不在下一坐标点的时间范围内，就跳到下一个点
    if (tick >= nextPointTime - firstTime) {
      pointIndex++;
      changeModelPosition();
      return;
    } else {
      //计算时间百分比，用于计算于插值
      const percent =
        (tick - pointTime + firstTime) / (nextPointTime - pointTime);

      //计算旋转角度
      const angle = getAngle(points[pointIndex], points[pointIndex + 1])+angleToRadian(90);

      //计算模型位置，当前点到下一个点的按比例插值
      const modelOrigin = getPointByPercent(
        points[pointIndex],
        points[pointIndex + 1],
        percent
      );;
      const modelAltitude = 0;
      const modelRotate = [Math.PI / 2, angle, 0];
      // 将经纬度转为墨卡托坐标
      const modelAsMercatorCoordinate = mapboxgl.MercatorCoordinate.fromLngLat(
        modelOrigin,
        modelAltitude
      );
      // 设置地图中心点
      map.jumpTo({
        center: modelOrigin,
        zoom: 22,
        pitch: 75,
        bearing: 180 - radianToAngle(angle),
      });
      return {
        translateX: modelAsMercatorCoordinate.x,
        translateY: modelAsMercatorCoordinate.y,
        translateZ: modelAsMercatorCoordinate.z,
        rotateX: modelRotate[0],
        rotateY: modelRotate[1],
        rotateZ: modelRotate[2],
        // 由于 3D 模型的单位是实际世界的米，需要应用缩放变换
        scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits(),
      };
    }
  };
}
//角度转弧度
function angleToRadian(angle) {
  return (angle * Math.PI) / 180;
}
//弧度转角度
function radianToAngle(radian) {
  return (radian * 180) / Math.PI;
}
//计算A点到B点的夹角
function getAngle(a, b) {
  return Math.atan2(b[1] - a[1], b[0] - a[0]);
}
//计算A点到B点之间指定比例的点,点为数组而不是x,y
function getPointByPercent(a, b, percent) {
  return [a[0] + (b[0] - a[0]) * percent, a[1] + (b[1] - a[1]) * percent];
}
