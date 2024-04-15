var APP_DATA = {
  "scenes": [
    {
      "id": "0-vue-1",
      "name": "Vue 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8997497732828048,
          "pitch": 0.36862350746095807,
          "rotation": 0,
          "target": "1-vue-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-vue-2",
      "name": "Vue 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.762641747740016,
          "pitch": 0.4190573483412958,
          "rotation": 0,
          "target": "0-vue-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Résidence d'artistes MIRAMAS",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
