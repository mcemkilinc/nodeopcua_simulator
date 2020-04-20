/*global require,console,setInterval */
Error.stackTraceLimit = Infinity;


const fs = require("fs");

const unirest = require("unirest");

function unixEpoqToDate(unixDate) {
    const d = new Date(0);
    d.setUTCSeconds(unixDate);
    return d;
}

const opcua = require("node-opcua");

let St210ProductionType=1;
let St210MachineStatus=4;
let St210WorkOrderActive=false;
let St210WorkOrder = "test";
let St210CycleTime = 30;
let St210ProcessStatus = 0;
let LD90ConveyorOrder=0;
let LD90ConveyorStatus=0;

let St200AmountOfPlastic = 20;
let St200ChillingDuration = 30;
let St200MachineStatus=2;
let St210MoldingOrder = 0;
let St200PartQuantity=0;
let St200WorkOrderActive=0;
let St200PressCount=0;
let St200ProcessPause=2;
let St200ProcessStatus=3;
let St200ProducedParts=0;
let ST200MoldingKLTIsFull=1;

let ProcessStep="NotStarted";

let simControl=0;
let waitTime=5000;
let moldingPauseCount=0;

function resetSimulatorMolding(){
    St200MachineStatus=2;
    St210MoldingOrder = 0;
    St200AmountOfPlastic = 20;
    St200ChillingDuration = 30;
    St200PartQuantity=0;
    St200WorkOrderActive=0;
    St200PressCount=0;
    St200ProcessPause=2;
    St200ProcessStatus=3;
    St200ProducedParts=0;
    moldingPauseCount=0;
    ST200MoldingKLTIsFull=1;
}

function resetSimulator(){
    St210ProductionType=1;
    St210MachineStatus=4;
    St210WorkOrderActive=false;
    St210WorkOrder = "";
    St210CycleTime = 30;
    St210ProcessStatus = 0;
    LD90ConveyorOrder=0;
    LD90ConveyorStatus=0;

    simControl=0;
    startTest=0;

}

function construct_my_address_space(server) {
    // declare some folders
    const addressSpace = server.engine.addressSpace;
    const namespace = addressSpace.getOwnNamespace();
    const objectsFolder = addressSpace.rootFolder.objects;

    // add a variable named MyVariable1 to the newly created folder "MyDevice"
        
    // emulate variable1 changing every 500 ms
    //setInterval(function(){  variable1+=1;console.log(variable1); }, 2000);

    const stationNode  = namespace.addFolder(objectsFolder,{ browseName: "St200_St210"});

    function runStamping(a) {
        if (a > 2) {
            St210ProcessStatus=0;
            St210WorkOrderActive=false;
            return;
        }
        St210ProcessStatus=a;
        ProcessStep="Stamping";
        setTimeout(function () {
            runStamping(++a);
        },waitTime);
    }

    
    function runPickPlaceAssetPlate(a) {
        if (a > 8) {
            St210ProcessStatus=0;
            St210WorkOrderActive=false;
            St210ProductionType=1;
            return;
        }
        St210ProcessStatus=a;
        ProcessStep="runPickPlaceAssetPlate";
        setTimeout(function () {
            runPickPlaceAssetPlate(a+4);
        },waitTime);
    }

    function runPickPlaceConveyor(a) {
        if (a > 32) {
            St210ProcessStatus=0;
            St210WorkOrderActive=false;
            St210ProductionType=1;
            return;
        }
        St210ProcessStatus=a;
        ProcessStep="runPickPlaceConveyor";
        setTimeout(function () {
            runPickPlaceConveyor(a+16);
        },waitTime);
    }

    function runMolding(a) {
        if (St200ProcessPause==1) {
            return;
        }
        if (St200PartQuantity==St200PressCount) {
            resetSimulatorMolding();
            return;
        }
        St200PressCount=a;
        St200ProcessStatus=1;
        moldingPauseCount=a;
        ProcessStep="runMolding";
        setTimeout(function () {
            runMolding(a+1);
        },2000);
    }

    function runLD90Conveyor(i) {
        if (i > 20) {
            LD90ConveyorStatus=0;
            LD90ConveyorOrder=0;
            return;
        } 
        StampingProcessStep="ConveyorCarrying";
        setTimeout(function () {
            LD90ConveyorStatus=i;
            runLD90Conveyor(++i);
    
        }, 2000);
        
    }

    function runLD90Conveyor2(i) {
        if (i > 35) {
            LD90ConveyorStatus=0;
            LD90ConveyorOrder=0;
            return;
        } 
        StampingProcessStep="ConveyorCarrying";
        setTimeout(function () {
            LD90ConveyorStatus=i;
            runLD90Conveyor2(++i);
    
        }, 2000);
        
    }

            // add a variable named MyVariable1 to the newly created folder "MyDevice"
            let variable1 = 1;
        
            // emulate variable1 changing every 500 ms
            setInterval(function(){  console.log("St210ProductionType:"+St210ProductionType) }, 1000);
            setInterval(function(){  console.log("St210WorkOrder:"+St210WorkOrder) }, 1000);
            setInterval(function(){  console.log("MoldingPauseCount:"+moldingPauseCount) }, 1000);

        // declare the city node
        const folderNode = namespace.addFolder(stationNode,{ browseName: "OPC" });
           
namespace.addVariable({componentOf: folderNode,browseName:"St210ProductionType",nodeId: `s=St210ProductionType`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St210ProductionType });},
set: function (variant) {
    St210ProductionType = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:"St210MachineStatus",nodeId: `s=St210MachineStatus`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St210MachineStatus });}}});
namespace.addVariable({componentOf: folderNode,browseName:"St210WorkOrderActive",nodeId: `s=St210WorkOrderActive`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St210WorkOrderActive });},
set: function (variant) {
    St210WorkOrderActive = variant.value;
    if(St210WorkOrderActive==1&&St210ProductionType==1) {
        runStamping(1);
    }
    if(St210ProductionType==2&&St210WorkOrderActive==1) {
        runPickPlaceAssetPlate(4);
    }
    if(St210ProductionType==3&&St210WorkOrderActive==1) {
        runPickPlaceConveyor(16);
    }
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:"St210WorkOrder",nodeId: `s=St210WorkOrder`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St210WorkOrder });},
set: function (variant) {
    console.log("çalıştı");
    St210WorkOrder = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:"St210CycleTime",nodeId: `s=St210CycleTime`,dataType: "Float",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St210CycleTime });}}});
namespace.addVariable({componentOf: folderNode,browseName:"St210ProcessStatus",nodeId: `s=St210ProcessStatus`,dataType: "Byte",value:{
    get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St210ProcessStatus });},
    set: function (variant) {
        St210ProcessStatus = parseFloat(variant.value);
    }
}});
namespace.addVariable({componentOf: folderNode,browseName:"St200MachineStatus",nodeId: `s=St200MachineStatus`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St200MachineStatus });}}});
namespace.addVariable({componentOf: folderNode,browseName:"St210MoldingOrder",nodeId: `s=St210MoldingOrder`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St210MoldingOrder });},
set: function (variant) {
    St210MoldingOrder = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:"ST200MoldingKLTIsFull",nodeId: `s=ST200MoldingKLTIsFull`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: ST200MoldingKLTIsFull });},
set: function (variant) {
    ST200MoldingKLTIsFull = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:"St200AmountOfPlastic",nodeId: `s=St200AmountOfPlastic`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St200AmountOfPlastic });},
set: function (variant) {
    St200AmountOfPlastic = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:"St200ChillingDuration",nodeId: `s=St200ChillingDuration`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St200ChillingDuration });},
set: function (variant) {
    St200ChillingDuration = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:"St200PartQuantity",nodeId: `s=St200PartQuantity`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St200PartQuantity });},
set: function (variant) {
    St200PartQuantity = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:"St200WorkOrderActive",nodeId: `s=St200WorkOrderActive`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St200WorkOrderActive });},
set: function (variant) {
    St200WorkOrderActive = variant.value;
    if(St200WorkOrderActive==1) {
        runMolding(1);
    }
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:"St200PressCount",nodeId: `s=St200PressCount`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St200PressCount });}}});
namespace.addVariable({componentOf: folderNode,browseName:"St200ProcessPause",nodeId: `s=St200ProcessPause`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St200ProcessPause });},
set: function (variant) {
    St200ProcessPause = variant.value;
    if(St200ProcessPause==2) {
        runMolding(moldingPauseCount);
    }
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:"St200ProcessStatus",nodeId: `s=St200ProcessStatus`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St200ProcessStatus });}}});
namespace.addVariable({componentOf: folderNode,browseName:"St200ProducedParts",nodeId: `s=St200ProducedParts`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St200ProducedParts });}}});




namespace.addVariable({componentOf: folderNode,browseName:"simControl",nodeId: `s=simControl`,dataType: "Int32",value:{
    get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: simControl });},
    set: function (variant) {
        simControl = parseInt(variant.value);
        resetSimulator();
        return opcua.StatusCodes.Good;
    }
}});
namespace.addVariable({componentOf: folderNode,browseName:"waitTime",nodeId: `s=waitTime`,dataType: "Int32",value:{
    get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: waitTime });},
    set: function (variant) {
        waitTime = parseInt(variant.value);
        resetSimulator();
        return opcua.StatusCodes.Good;
    }
}});
namespace.addVariable({componentOf: folderNode,browseName:"ProcessStep",nodeId: `s=PRocessStep`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: ProcessStep });}}});

namespace.addVariable({componentOf: folderNode,browseName:"LD90ConveyorStatus",nodeId: `s=LD90ConveyorStatus`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: LD90ConveyorStatus });}}});

namespace.addVariable({componentOf: folderNode,browseName:"LD90ConveyorOrder",nodeId: `s=LD90ConveyorOrder`,dataType: "Int32",value:{
    get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: LD90ConveyorOrder });},
    set: function (variant) {
        LD90ConveyorOrder = parseFloat(variant.value);
        if(LD90ConveyorOrder==4) {
            runLD90Conveyor(16);
        };
        if(LD90ConveyorOrder==7) {
            console.log("order 7");
            runLD90Conveyor2(31);
        };
        return opcua.StatusCodes.Good;
    }
}});


}

function extract_value(dataType) {

    return new opcua.Variant({dataType, value: 1 });
}

(async () => {

    try {
      
      const server = new opcua.OPCUAServer({
         port: 4338, // the port of the listening socket of the servery
         buildInfo: {
           productName: "Node MEXT Simulator",
           buildNumber: "2",
           buildDate: new Date(2019,6,14),
         }
      });
      
      
      await server.initialize();
      
      construct_my_address_space(server);
      
      await server.start();
      
      console.log("Server is now listening ... ( press CTRL+C to stop)");
      console.log("port ", server.endpoints[0].port);
      const endpointUrl = server.endpoints[0].endpointDescriptions()[0].endpointUrl;
      console.log(" the primary server endpoint url is ", endpointUrl );
      
    }
    catch(err) {
       console.log("Error = ",err);
    }
})();