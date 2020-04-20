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
let St120MachineState=4;
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
let St130StartActivity=false;
let St130EndActivity=false;
let ProcessStep="NotStarted";
let St120Gear_Ratio = "";
let St120Product_Type = "";
let St120SerialNumber = "";

// Added variable for exception handling
let St110Wp2NOKStatus=1;
let St110Wp3NOKStatus=1;
let St110WP1_CycleTime=1;
let St110WP2_CycleTime=1;
let St110WP3_CycleTime=1;
let St110SafetyStatus=1;
let St110StopReason=1;
let St120StopReason=1;
let St110StopReasonMES=1;
let St110ErrorFlag=false;
let St110ShiftChange=1;
let St110WP0WorkOrderActive=1;
let St110WP1WorkOrderActive=1;
let St110WP2WorkOrderActive=1;
let St110WP3WorkOrderActive=1;
let St110WP0JigID="Jigid0";
let St110GripperStatus=1;
let St110Wp0NOKReasonMES=1;
let St110Wp1NOKReasonMES=1;
let St110Wp2NOKReasonMES=1;
let St110Wp3NOKReasonMES=1;
let St120WP4_CycleTime=1;
let St120WP5_CycleTime=1;
let St120WP6_CycleTime=1;
let St120WP7_CycleTime=1;
let St120SafetyStatus=1;
let St120StopReasonMES=1;
let St120WP4WorkOrderActive=1;
let St120WP5WorkOrderActive=1;
let St120WP6WorkOrderActive=1;
let St120WP7WorkOrderActive=1;
let St120Wp4NOKReasonMES=1;
let St120Wp5NOKReasonMES=1;
let St120Wp6NOKReasonMES=1;
let St120Wp7NOKReasonMES=1;
let St120Wp6NOKStatus=1;
let St120Wp7NOKStatus=1;
let St110WP1StopReason=1;
let St110WP2StopReason=1;
let St110WP3StopReason=1;
let St120WP4StopReason=1;
let St120WP5StopReason=1;
let St120WP6StopReason=1;
let St120WP7StopReason=1;
let startTest=0;
let simControl=0;
let waitTime=5000;
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
    St130StartActivity=false;
    St130EndActivity=false;
    ProcessStep="NotStarted";
    St120Gear_Ratio="";
    St120Product_Type="";
    St120SerialNumber="";


    simControl=0;
    updatedJigID="";
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
    
    function runLD90JigRoute6(i) {
        if (i > 5) {
            LD90JigStatus=1;
            return;
        } 
        setTimeout(function () {
            LD90JigStatus=i;
            runLD90JigRoute6(++i);
    
        }, 2000);
    }

    function runLD90JigRoute24(i) {
        if (i > 15) {
            LD90JigStatus=1;
            return;
        } 
        setTimeout(function () {
            LD90JigStatus=i;
            runLD90JigRoute24(++i);
    
        }, 2000);
    }

    function runLD90JigRoute25(i) {
        if (i > 20) {
            LD90JigStatus=1;
            return;
        } 
        setTimeout(function () {
            LD90JigStatus=i;
            runLD90JigRoute25(++i);
    
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
        if (a > 128) 
        {
            St130StartActivity=true;
            runTestOperator2(1);
            return;
        }
        St120ProcessStatus=a;
        ProcessStep="WP7";
        St120WP6JigID="";
        St120WP7JigID=updatedJigID;
        setTimeout(function () {
            runWP7(a+64);
        },waitTime);
    }

    function runTestOperator2(a) {
        if (a < 0) {
            runTestBench(1);
            return;
        }
        ProcessStep="TestOperator2";
        setTimeout(function () {
            runTestOperator2(--a);
        },waitTime);
    }

    function runTestBench(a) {
        if (a < 0) {
            runTestOperator1(1);
            return;
        }
        St130StartActivity=false;
        St130ProcessStatus=a;        
        ProcessStep="TestStation";
        setTimeout(function () {
            runTestBench(--a);
            St130PartResult=1;
        },waitTime);
    }
    function runTestOperator1(a) {
        if (a < 0) {
            St130EndActivity=false;
            resetSimulator();
            return;
        }
        St130EndActivity=true;
        ProcessStep="runTestOperator1";
        setTimeout(function () {
            runTestOperator1(--a);
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
    get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St110MachineState });},
    set: function (variant) {
        St110MachineState = parseFloat(variant.value);
        return opcua.StatusCodes.Good;
    }
}});
namespace.addVariable({componentOf: folderNode,browseName:"St120MachineState",nodeId: `s=St120MachineState`,dataType: "Int32",value:{
    get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St120MachineState });},
    set: function (variant) {
        St120MachineState = parseFloat(variant.value);
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
namespace.addVariable({componentOf: folderNode,browseName:"St110WP1JigID",nodeId: `s=St110WP1JigID`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St110WP1JigID });}, set: function (variant) { St110WP1JigID = variant.value; return opcua.StatusCodes.Good; } }});
namespace.addVariable({componentOf: folderNode,browseName:"St110WP2JigID",nodeId: `s=St110WP2JigID`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St110WP2JigID });}, set: function (variant) { St110WP2JigID = variant.value; return opcua.StatusCodes.Good; } }});
namespace.addVariable({componentOf: folderNode,browseName:"St110WP3JigID",nodeId: `s=St110WP3JigID`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St110WP3JigID });}, set: function (variant) { St110WP3JigID = variant.value; return opcua.StatusCodes.Good; } }});
namespace.addVariable({componentOf: folderNode,browseName:"St110WorkOrderActive",nodeId: `s=St110WorkOrderActive`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St110WorkOrderActive });},
set: function (variant) {
    St110WorkOrderActive = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:"St110ErrorFlag",nodeId: `s=St110ErrorFlag`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St110ErrorFlag });},
set: function (variant) {
    St110ErrorFlag = variant.value;
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
        return opcua.StatusCodes.Good;
    }
}});
namespace.addVariable({componentOf: folderNode,browseName:"St120WP4JigID",nodeId: `s=St120WP4JigID`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St120WP4JigID });}, set: function (variant) { St120WP4JigID = variant.value; return opcua.StatusCodes.Good; } }});
namespace.addVariable({componentOf: folderNode,browseName:"St120WP5JigID",nodeId: `s=St120WP5JigID`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St120WP5JigID });}, set: function (variant) { St120WP5JigID = variant.value; return opcua.StatusCodes.Good; } }});
namespace.addVariable({componentOf: folderNode,browseName:"St120WP6JigID",nodeId: `s=St120WP6JigID`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St120WP6JigID });}, set: function (variant) { St120WP6JigID = variant.value; return opcua.StatusCodes.Good; } }});
namespace.addVariable({componentOf: folderNode,browseName:"St120WP7JigID",nodeId: `s=St120WP7JigID`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St120WP7JigID });}, set: function (variant) { St120WP7JigID = variant.value; return opcua.StatusCodes.Good; } }});
namespace.addVariable({componentOf: folderNode,browseName:"St130ProcessStatus",nodeId: `s=St130ProcessStatus`,dataType: "Byte",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St130ProcessStatus });}}});
namespace.addVariable({componentOf: folderNode,browseName:"St130PartResult",nodeId: `s=St130PartResult`,dataType: "Byte",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St130PartResult });}}});
namespace.addVariable({componentOf: folderNode,browseName:"St130CycleTime",nodeId: `s=St130CycleTime`,dataType: "Float",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Float, value: St130CycleTime });}}});
namespace.addVariable({componentOf: folderNode,browseName:"LD90JigStatus",nodeId: `s=LD90JigStatus`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: LD90JigStatus });}}});
namespace.addVariable({componentOf: folderNode,browseName:"LD90JigOrder",nodeId: `s=LD90JigOrder`,dataType: "Int32",value:{
    get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: LD90JigOrder });},
    set: function (variant) {
        LD90JigOrder = parseFloat(variant.value);
        if(LD90JigOrder==1) {
            runLD90Jig(1);
        };
        if(LD90JigOrder==2) {
            runLD90JigRoute6(1);
        };
        if(LD90JigOrder==3) {
            runLD90JigRoute24(10);
        };
        if(LD90JigOrder==4) {
            runLD90JigRoute25(16);
        };
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
namespace.addVariable({componentOf: folderNode,browseName:"St130StartActivity",nodeId: `s=St130StartActivity`,dataType: "Boolean",value:{
    get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St130StartActivity });},
    set: function (variant) {
    }
}});

namespace.addVariable({componentOf: folderNode,browseName:"St130EndActivity",nodeId: `s=St130EndActivity`,dataType: "Boolean",value:{
    get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St130EndActivity });},
    set: function (variant) {
    }
}});
namespace.addVariable({componentOf: folderNode,browseName:"ProcessStep",nodeId: `s=PRocessStep`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: ProcessStep });}}});

namespace.addVariable({componentOf: folderNode,browseName:"St120Gear_Ratio",nodeId: `s=St120Gear_Ratio`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St120Gear_Ratio });},
set: function (variant) {
    St120Gear_Ratio = variant.value;
    return opcua.StatusCodes.Good;
}
}});

namespace.addVariable({componentOf: folderNode,browseName:"St120Product_Type",nodeId: `s=St120Product_Type`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St120Product_Type });},
set: function (variant) {
    St120Product_Type = variant.value;
    return opcua.StatusCodes.Good;
}
}});

namespace.addVariable({componentOf: folderNode,browseName:"St120SerialNumber",nodeId: `s=St120SerialNumber`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St120SerialNumber });},
set: function (variant) {
    St120SerialNumber = variant.value;
    return opcua.StatusCodes.Good;
}
}});

// Added variables for exception handling

namespace.addVariable({componentOf: folderNode,browseName:'St110WP1StopReason',nodeId: `s=St110WP1StopReason`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St110WP1StopReason });},
set: function (variant) {
    St110WP1StopReason = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St110WP2StopReason',nodeId: `s=St110WP2StopReason`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St110WP2StopReason });},
set: function (variant) {
    St110WP2StopReason = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St110WP3StopReason',nodeId: `s=St110WP3StopReason`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St110WP3StopReason });},
set: function (variant) {
    St110WP3StopReason = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St120WP4StopReason',nodeId: `s=St120WP4StopReason`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St120WP4StopReason });},
set: function (variant) {
    St120WP4StopReason = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St120WP5StopReason',nodeId: `s=St120WP5StopReason`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St120WP5StopReason });},
set: function (variant) {
    St120WP5StopReason = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St120WP6StopReason',nodeId: `s=St120WP6StopReason`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St120WP6StopReason });},
set: function (variant) {
    St120WP6StopReason = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St120WP7StopReason',nodeId: `s=St120WP7StopReason`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St120WP7StopReason });},
set: function (variant) {
    St120WP7StopReason = variant.value;
    return opcua.StatusCodes.Good;
}
}});


namespace.addVariable({componentOf: folderNode,browseName:'St110Wp2NOKStatus',nodeId: `s=St110Wp2NOKStatus`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St110Wp2NOKStatus });},
set: function (variant) {
    St110Wp2NOKStatus = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St110Wp3NOKStatus',nodeId: `s=St110Wp3NOKStatus`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St110Wp3NOKStatus });},
set: function (variant) {
    St110Wp3NOKStatus = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St110WP1_CycleTime',nodeId: `s=St110WP1_CycleTime`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St110WP1_CycleTime });},
set: function (variant) {
    St110WP1_CycleTime = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St110WP2_CycleTime',nodeId: `s=St110WP2_CycleTime`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St110WP2_CycleTime });},
set: function (variant) {
    St110WP2_CycleTime = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St110WP3_CycleTime',nodeId: `s=St110WP3_CycleTime`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St110WP3_CycleTime });},
set: function (variant) {
    St110WP3_CycleTime = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St110SafetyStatus',nodeId: `s=St110SafetyStatus`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St110SafetyStatus });},
set: function (variant) {
    St110SafetyStatus = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St110StopReason',nodeId: `s=St110StopReason`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St110StopReason });},
set: function (variant) {
    St110StopReason = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St120StopReason',nodeId: `s=St120StopReason`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St120StopReason });},
set: function (variant) {
    St120StopReason = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St110StopReasonMES',nodeId: `s=St110StopReasonMES`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St110StopReasonMES });},
set: function (variant) {
    St110StopReasonMES = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St110ShiftChange',nodeId: `s=St110ShiftChange`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St110ShiftChange });},
set: function (variant) {
    St110ShiftChange = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St110WP0WorkOrderActive',nodeId: `s=St110WP0WorkOrderActive`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St110WP0WorkOrderActive });},
set: function (variant) {
    St110WP0WorkOrderActive = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St110WP1WorkOrderActive',nodeId: `s=St110WP1WorkOrderActive`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St110WP1WorkOrderActive });},
set: function (variant) {
    St110WP1WorkOrderActive = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St110WP2WorkOrderActive',nodeId: `s=St110WP2WorkOrderActive`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St110WP2WorkOrderActive });},
set: function (variant) {
    St110WP2WorkOrderActive = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St110WP3WorkOrderActive',nodeId: `s=St110WP3WorkOrderActive`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St110WP3WorkOrderActive });},
set: function (variant) {
    St110WP3WorkOrderActive = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St110WP0JigID',nodeId: `s=St110WP0JigID`,dataType: 'String',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St110WP0JigID });},
set: function (variant) {
    St110WP0JigID = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St110GripperStatus',nodeId: `s=St110GripperStatus`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St110GripperStatus });},
set: function (variant) {
    St110GripperStatus = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St110Wp0NOKReasonMES',nodeId: `s=St110Wp0NOKReasonMES`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St110Wp0NOKReasonMES });},
set: function (variant) {
    St110Wp0NOKReasonMES = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St110Wp1NOKReasonMES',nodeId: `s=St110Wp1NOKReasonMES`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St110Wp1NOKReasonMES });},
set: function (variant) {
    St110Wp1NOKReasonMES = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St110Wp2NOKReasonMES',nodeId: `s=St110Wp2NOKReasonMES`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St110Wp2NOKReasonMES });},
set: function (variant) {
    St110Wp2NOKReasonMES = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St110Wp3NOKReasonMES',nodeId: `s=St110Wp3NOKReasonMES`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St110Wp3NOKReasonMES });},
set: function (variant) {
    St110Wp3NOKReasonMES = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St120WP4_CycleTime',nodeId: `s=St120WP4_CycleTime`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St120WP4_CycleTime });},
set: function (variant) {
    St120WP4_CycleTime = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St120WP5_CycleTime',nodeId: `s=St120WP5_CycleTime`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St120WP5_CycleTime });},
set: function (variant) {
    St120WP5_CycleTime = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St120WP6_CycleTime',nodeId: `s=St120WP6_CycleTime`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St120WP6_CycleTime });},
set: function (variant) {
    St120WP6_CycleTime = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St120WP7_CycleTime',nodeId: `s=St120WP7_CycleTime`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St120WP7_CycleTime });},
set: function (variant) {
    St120WP7_CycleTime = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St120SafetyStatus',nodeId: `s=St120SafetyStatus`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St120SafetyStatus });},
set: function (variant) {
    St120SafetyStatus = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St120StopReasonMES',nodeId: `s=St120StopReasonMES`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St120StopReasonMES });},
set: function (variant) {
    St120StopReasonMES = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St120WP4WorkOrderActive',nodeId: `s=St120WP4WorkOrderActive`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St120WP4WorkOrderActive });},
set: function (variant) {
    St120WP4WorkOrderActive = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St120WP5WorkOrderActive',nodeId: `s=St120WP5WorkOrderActive`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St120WP5WorkOrderActive });},
set: function (variant) {
    St120WP5WorkOrderActive = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St120WP6WorkOrderActive',nodeId: `s=St120WP6WorkOrderActive`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St120WP6WorkOrderActive });},
set: function (variant) {
    St120WP6WorkOrderActive = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St120WP7WorkOrderActive',nodeId: `s=St120WP7WorkOrderActive`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St120WP7WorkOrderActive });},
set: function (variant) {
    St120WP7WorkOrderActive = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St120Wp4NOKReasonMES',nodeId: `s=St120Wp4NOKReasonMES`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St120Wp4NOKReasonMES });},
set: function (variant) {
    St120Wp4NOKReasonMES = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St120Wp5NOKReasonMES',nodeId: `s=St120Wp5NOKReasonMES`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St120Wp5NOKReasonMES });},
set: function (variant) {
    St120Wp5NOKReasonMES = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St120Wp6NOKReasonMES',nodeId: `s=St120Wp6NOKReasonMES`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St120Wp6NOKReasonMES });},
set: function (variant) {
    St120Wp6NOKReasonMES = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St120Wp7NOKReasonMES',nodeId: `s=St120Wp7NOKReasonMES`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St120Wp7NOKReasonMES });},
set: function (variant) {
    St120Wp7NOKReasonMES = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St120Wp6NOKStatus',nodeId: `s=St120Wp6NOKStatus`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St120Wp6NOKStatus });},
set: function (variant) {
    St120Wp6NOKReasonMES = variant.value;
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St120Wp7NOKStatus',nodeId: `s=St120Wp7NOKStatus`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St120Wp7NOKStatus });},
set: function (variant) {
    St120Wp7NOKReasonMES = variant.value;
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
         port: 4335, // the port of the listening socket of the servery
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