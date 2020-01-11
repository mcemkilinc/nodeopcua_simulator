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

let St410ProcessStatus=2;
let St410KittingJigID="";
let St110MachineState=4;
let St110ProcessStatus=0;
let St110WP1JigID="";
let St110WP2JigID="";
let St110WP3JigID="";
let St110WorkOrderActive=false;
let St110WorkOrder="";
let St110CycleTime=1;
let St120ProcessStatus=0;
let St120WP4JigID="";
let St120WP5JigID="";
let St120WP6JigID="";
let St120WP7JigID="";
let St130ProcessStatus=0;
let St130PartResult=0;
let LD90JigStatus=1;
let LD90JigOrder=0;
let St130CycleTime=30;
let ProcessStep="NotStarted";

let simControl=0;
let waitTime=3000;
let updatedJigID="";

function resetSimulator(){
    St410ProcessStatus=2;
    St410KittingJigID="";
    St110MachineState=4;
    St110ProcessStatus=0;
    St110WP1JigID="";
    St110WP2JigID="";
    St110WP3JigID="";
    St110WorkOrderActive=false;
    St110WorkOrder="";
    St110CycleTime=1;
    St120ProcessStatus=0;
    St120WP4JigID="";
    St120WP5JigID="";
    St120WP6JigID="";
    St120WP7JigID="";
    St130ProcessStatus=0;
    St130PartResult=0;
    LD90JigStatus=1;
    LD90JigOrder=0;
    St130CycleTime=30;
    ProcessStep="NotStarted";

    simControl=0;
    updatedJigID="";

}

function construct_my_address_space(server) {
    // declare some folders
    const addressSpace = server.engine.addressSpace;
    const namespace = addressSpace.getOwnNamespace();
    const objectsFolder = addressSpace.rootFolder.objects;

    // add a variable named MyVariable1 to the newly created folder "MyDevice"
        
    // emulate variable1 changing every 500 ms
    //setInterval(function(){  variable1+=1;console.log(variable1); }, 2000);

    const stationNode  = namespace.addFolder(objectsFolder,{ browseName: "ST120"});

    function runLD90Jig(i) {
        if (i > 5) {
            St110MachineState=4;
            St110WorkOrderActive=true;
            St110WorkOrder="WO3456";
            LD90JigStatus=1;
            ProcessStep="WP1";
            runWP1(1);
            return;
        } 
        ProcessStep="JigCarrying";
        setTimeout(function () {
            LD90JigStatus=i;
            runLD90Jig(++i);
    
        }, 2000);
    }
    
    function runWP1(a) {
        if (a > 2) return;
        St110ProcessStatus=a;
        ProcessStep="WP1";
        St110WP1JigID=updatedJigID;
        setTimeout(function () {
            runWP1(++a);
        },waitTime);
    }
    function runWP2(a) {
        if (a > 33) return;
        St110ProcessStatus=a;
        ProcessStep="WP2";
        St110WP1JigID="";
        St110WP2JigID=updatedJigID;
        setTimeout(function () {
            runWP2(a+28);
        },waitTime);
    }
    function runWP3(a) {
        if (a > 132) return;
        St110ProcessStatus=a;
        ProcessStep="WP3";
        St110WP2JigID="";
        St110WP3JigID=updatedJigID;
        setTimeout(function () {
            runWP3(a+64);
        },waitTime);
    }
    function runWP4(a) {
        if (a > 2) return;
        St120ProcessStatus=a;        
        ProcessStep="WP4";
        St110WP3JigID="";
        St120WP4JigID=updatedJigID;
        setTimeout(function () {
            runWP4(++a);
        },waitTime);
    }
    function runWP5(a) {
        if (a > 8) return;
        St120ProcessStatus=a;
        ProcessStep="WP5";
        St120WP4JigID="";
        St120WP5JigID=updatedJigID;
        setTimeout(function () {
            runWP5(a+4);
        },waitTime);
    }
    function runWP6(a) {
        if (a > 32) return;
        St120ProcessStatus=a;
        ProcessStep="WP6";
        St120WP5JigID="";
        St120WP6JigID=updatedJigID;
        setTimeout(function () {
            runWP6(a+16);
        },waitTime);
    }
    function runWP7(a) {
        if (a > 128) return;
        St120ProcessStatus=a;
        ProcessStep="WP7";
        St120WP6JigID="";
        St120WP7JigID=updatedJigID;
        setTimeout(function () {
            runWP7(a+64);
        },waitTime);
    }
    function runTestBench(a) {
        if (a < 0) {
            resetSimulator();
            return;
        }
        St130ProcessStatus=a;        
        ProcessStep="TestStation";
        setTimeout(function () {
            runTestBench(--a);
            St130PartResult=1;
        },waitTime);
    }

            // add a variable named MyVariable1 to the newly created folder "MyDevice"
            let variable1 = 1;
        
            // emulate variable1 changing every 500 ms
            setInterval(function(){  console.log("LD90JigOrder:"+LD90JigOrder) }, 1000);
            setInterval(function(){  console.log("LD90JigStatus:"+LD90JigStatus) }, 1000);
            setInterval(function(){  console.log("St110ProcessStatus:"+St110ProcessStatus) }, 1000);
            setInterval(function(){  console.log("St110MachineState:"+St110MachineState) }, 1000);
            setInterval(function(){  console.log("ProcessStep:"+ProcessStep) }, 1000);
            setInterval(function(){  console.log("St120ProcessStatus:"+St120ProcessStatus) }, 1000);

        // declare the city node
        const folderNode = namespace.addFolder(stationNode,{ browseName: "OPC" });
                
namespace.addVariable({componentOf: folderNode,nodeId: "s=St410ProcessStatus",browseName: "St410ProcessStatus",dataType: "Byte",
value:{
    get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410ProcessStatus });},
    set: function (variant) {
        St410ProcessStatus = parseFloat(variant.value);
        return opcua.StatusCodes.Good;
    }
}});

namespace.addVariable({componentOf: folderNode,browseName:"St410KittingJigID",nodeId: `s=St410KittingJigID`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St410KittingJigID });},
set: function (variant) {
    St410KittingJigID = variant.value;
    updatedJigID = St410KittingJigID;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:"St110MachineState",nodeId: `s=St110MachineState`,dataType: "Int32",value:{
    get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St110MachineState });},
    set: function (variant) {
        St410ProcessStatus = parseFloat(variant.value);
        return opcua.StatusCodes.Good;
    }
}});
namespace.addVariable({componentOf: folderNode,browseName:"St110ProcessStatus",nodeId: `s=St110ProcessStatus`,dataType: "Byte",value:{
    get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St110ProcessStatus });},
    set: function (variant) {
        St110ProcessStatus = parseFloat(variant.value);
        if(St110ProcessStatus==0&&ProcessStep=="WP1") runWP2(4)
        if(St110ProcessStatus==0&&ProcessStep=="WP2") runWP3(64)
        if(St110ProcessStatus==0&&ProcessStep=="WP3") runWP4(1)        
        
        return opcua.StatusCodes.Good;
    }
}});
namespace.addVariable({componentOf: folderNode,browseName:"St110WP1JigID",nodeId: `s=St110WP1JigID`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St110WP1JigID });}}});
namespace.addVariable({componentOf: folderNode,browseName:"St110WP2JigID",nodeId: `s=St110WP2JigID`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St110WP2JigID });}}});
namespace.addVariable({componentOf: folderNode,browseName:"St110WP3JigID",nodeId: `s=St110WP3JigID`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St110WP3JigID });}}});
namespace.addVariable({componentOf: folderNode,browseName:"St110WorkOrderActive",nodeId: `s=St110WorkOrderActive`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St110WorkOrderActive });},
set: function (variant) {
    St110WorkOrderActive = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:"St110WorkOrder",nodeId: `s=St110WorkOrder`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St110WorkOrder });},
set: function (variant) {
    St110WorkOrder = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:"St110CycleTime",nodeId: `s=St110CycleTime`,dataType: "Float",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St110CycleTime });}}});
namespace.addVariable({componentOf: folderNode,browseName:"St120ProcessStatus",nodeId: `s=St120ProcessStatus`,dataType: "Byte",value:{
    get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St120ProcessStatus });},
    set: function (variant) {
        St120ProcessStatus = parseFloat(variant.value);
        if(St120ProcessStatus==0&&ProcessStep=="WP4") runWP5(4)
        if(St120ProcessStatus==0&&ProcessStep=="WP5") runWP6(16)
        if(St120ProcessStatus==0&&ProcessStep=="WP6") runWP7(64)
        if(St120ProcessStatus==0&&ProcessStep=="WP7") runTestBench(1)
        return opcua.StatusCodes.Good;
    }
}});
namespace.addVariable({componentOf: folderNode,browseName:"St120WP4JigID",nodeId: `s=St120WP4JigID`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St120WP4JigID });}}});
namespace.addVariable({componentOf: folderNode,browseName:"St120WP5JigID",nodeId: `s=St120WP5JigID`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St120WP5JigID });}}});
namespace.addVariable({componentOf: folderNode,browseName:"St120WP6JigID",nodeId: `s=St120WP6JigID`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St120WP6JigID });}}});
namespace.addVariable({componentOf: folderNode,browseName:"St120WP7JigID",nodeId: `s=St120WP7JigID`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St120WP7JigID });}}});
namespace.addVariable({componentOf: folderNode,browseName:"St130ProcessStatus",nodeId: `s=St130ProcessStatus`,dataType: "Byte",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St130ProcessStatus });}}});
namespace.addVariable({componentOf: folderNode,browseName:"St130PartResult",nodeId: `s=St130PartResult`,dataType: "Byte",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St130PartResult });}}});
namespace.addVariable({componentOf: folderNode,browseName:"St130CycleTime",nodeId: `s=St130CycleTime`,dataType: "Float",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Float, value: St130CycleTime });}}});
namespace.addVariable({componentOf: folderNode,browseName:"LD90JigStatus",nodeId: `s=LD90JigStatus`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: LD90JigStatus });}}});
namespace.addVariable({componentOf: folderNode,browseName:"LD90JigOrder",nodeId: `s=LD90JigOrder`,dataType: "Int32",value:{
    get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: LD90JigOrder });},
    set: function (variant) {
        LD90JigOrder = parseFloat(variant.value);
        runLD90Jig(1);
        return opcua.StatusCodes.Good;
    }
}});
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

}
function extract_value(dataType) {

    return new opcua.Variant({dataType, value: 1 });
}

(async () => {

    try {
      
      const server = new opcua.OPCUAServer({
         port: 4335, // the port of the listening socket of the servery
         buildInfo: {
           productName: "WeatherStation",
           buildNumber: "7658",
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