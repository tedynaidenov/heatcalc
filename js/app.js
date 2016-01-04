
//function getMaterials() {
//    //from http://sidingbg.com/downloads/izolacia_za_doma.pdf
//    return {
//        metalbeton:     {name:'Стоманобeтон',                    density:2500,   heatCapacity:960,     lamda: 1.63,  waterResist:90},
//        beton:          {name:'Обикновен бeтон',                 density:2400,   heatCapacity:960,     lamda: 1.45,  waterResist:60},
//        cementsand:     {name:'Циментово-пясъчен разтвор',       density:1800,   heatCapacity:1050,    lamda: 0.93,  waterResist:8 },
//        limestoneext:   {name:'Варо-пясъчна мазилка (външна)',   density:1800,   heatCapacity:1050,    lamda: 0.87,  waterResist:5 },
//        limestoneint:   {name:'Варо-пясъчна мазилка (вътрешна)', density:1600,   heatCapacity:1050,    lamda: 0.7,   waterResist:5 },
//        airbrickwork:   {name:'Зидария от решетъчни тухли',      density:1400,   heatCapacity:1050,    lamda: 0.52,  waterResist:undefined },
//        fibran:         {name:'Екструдиран полистирен (XPS)',    density:20,     heatCapacity:1500,    lamda: 0.03,  waterResist:80 },
//        wadding:        {name:'Минерална и стъкленавата',        density:250,    heatCapacity:840,     lamda: 0.041, waterResist:1 },
//        plasterboard:   {name:'Гипсокартон',                     density:900,    heatCapacity:840,     lamda: 0.21,  waterResist:12 }
//    };
//}

// Main model object
function Material(name, lambda) {
    this.name = name;
    this.lamda = lambda;
    
    this.getLamda = function() {
        return this.lamda;
    }
}

function Layer(material, width) {
    var materials = getMaterialsDomain();
    
    if (!(material instanceof Material))
        throw "Invalid material";
    
    this.material = material;
        
    if (typeof width != 'number' || width <= 0)
        throw "Invalid witdh";
    this.width = width;

    this.getHeatResistance = function() {
        return this.width / this.material.getLambda();
    }
}

function Fragment(area, orientation) {
    //private list
    var _layers = [];
    if (typeof area != 'number')
        throw "Invalid area";
    var _area = area;
    
    this.addLayer = function(layer) {
        if (layer instanceof Layer))
            throw "Not a layer";
    
    };
    
    this.getHeatResistance = function() {
        return 0;
    }
}


function Model(fragments) {
    
    if(!(fragments instanceof Array))
        throw "Not a fragments collection";
    
}

function initModel() {
    
}

// Currently supported materials
function getMaterialsDomain() {
    //from http://sidingbg.com/downloads/izolacia_za_doma.pdf
    return {
        metalbeton:     new Material('Стоманобeтон',1.63),
        beton:          new Material('Обикновен бeтон', 960),
        cementsand:     new Material('Циментово-пясъчен разтвор',0.93),
        limestoneext:   new Material('Варо-пясъчна мазилка (външна)', 0.87),
        limestoneint:   new Material('Варо-пясъчна мазилка (вътрешна)', 0.7),
        airbrickwork:   new Material('Зидария от решетъчни тухли', 0.52),
        fibran:         new Material('Екструдиран полистирен (XPS)', 0.03),
        wadding:        new Material('Минерална и стъкленавата', 0.041),
        plasterboard:   new Material('Гипсокартон', 0.21)
    };
    
}
