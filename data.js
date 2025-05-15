var APP_DATA = {
  "scenes": [
    {
      "id": "0-parking",
      "name": "PARKING",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "0-parking"
        },
        {
          "yaw": -0.17021186739108884,
          "pitch": -0.01828450844084628,
          "rotation": 5.497787143782138,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "LIVING",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 0.6977772274897653
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": -1.564649862391068,
          "pitch": 0.3740773160590738,
          "rotation": 0,
          "target": "0-parking"
        },
        {
          "yaw": 2.9660304904006853,
          "pitch": 0.09701302719210503,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": 2.2454962490764956,
          "pitch": 0.17632541181893657,
          "rotation": 0,
          "target": "7-kitchen"
        },
        {
          "yaw": 1.1592176330597894,
          "pitch": 0.11255655867019954,
          "rotation": 0,
          "target": "5-mbedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "DINING",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": 1.3203967552994662,
          "pitch": 0.12235757609049003,
          "rotation": 0,
          "target": "3-kids-bedroom"
        },
        {
          "yaw": 2.0945775429923055,
          "pitch": 0.24167211607888994,
          "rotation": 0,
          "target": "0-parking"
        },
        {
          "yaw": 2.93766058386484,
          "pitch": 0.1852749067231585,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": -2.6335338200872194,
          "pitch": 0.08541088368939498,
          "rotation": 0,
          "target": "5-mbedroom"
        },
        {
          "yaw": -1.3383500924791267,
          "pitch": 0.14833812979722083,
          "rotation": 0,
          "target": "7-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kids-bedroom",
      "name": "KIDS BEDROOM",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "3-kids-bedroom"
        },
        {
          "yaw": -3.136623676047325,
          "pitch": 0.30631833262892094,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": -3.128746432687647,
          "pitch": 0.07744088016226236,
          "rotation": 0,
          "target": "7-kitchen"
        },
        {
          "yaw": 2.7222144907550643,
          "pitch": 0.14133037013375116,
          "rotation": 5.497787143782138,
          "target": "1-living"
        },
        {
          "yaw": -1.6434391399500843,
          "pitch": 0.10447744469588827,
          "rotation": 5.497787143782138,
          "target": "4-ktoilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-ktoilet",
      "name": "K.TOILET",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "4-ktoilet"
        },
        {
          "yaw": -3.0708255653647942,
          "pitch": 0.004327386969727343,
          "rotation": 0,
          "target": "3-kids-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-mbedroom",
      "name": "M.BEDROOM",
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
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "5-mbedroom"
        },
        {
          "yaw": -1.9012880398956398,
          "pitch": 0.21116480387105696,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": -1.8803911120143884,
          "pitch": -0.011298484693101685,
          "rotation": 0,
          "target": "0-parking"
        },
        {
          "yaw": -2.1046498819950443,
          "pitch": 0.07465666259818704,
          "rotation": 5.497787143782138,
          "target": "2-dining"
        },
        {
          "yaw": 2.6609016346284475,
          "pitch": -0.008998945917298329,
          "rotation": 0,
          "target": "6-mtoilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-mtoilet",
      "name": "M.TOILET",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "6-mtoilet"
        },
        {
          "yaw": 2.782532930145429,
          "pitch": 0.06976155572245268,
          "rotation": 5.497787143782138,
          "target": "5-mbedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kitchen",
      "name": "KITCHEN",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "7-kitchen"
        },
        {
          "yaw": 1.2964213626208245,
          "pitch": 0.037565131748511504,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": 1.4977824123399213,
          "pitch": -0.0185142715381712,
          "rotation": 0,
          "target": "3-kids-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "qtvr",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
