/*global require,console,setInterval */
Error.stackTraceLimit = Infinity;


const fs = require("fs");
const mathjs =require("mathjs");
const unirest = require("unirest");

function unixEpoqToDate(unixDate) {
    const d = new Date(0);
    d.setUTCSeconds(unixDate);
    return d;
}

const opcua = require("node-opcua");

let St410ProcessStatus=0;
let St410KittingJigID="";
let St410PickKittingSubAssyBuffer0=false;
let St410PickKittingSubAssyBuffer1=false;
let St410PickKittingSubAssyBuffer2=false;
let St410PickKittingSubAssyBuffer3=false;
let St410PickKittingSubAssyBuffer4=false;
let St410PickKittingSubAssyBuffer5=false;
let St410PickKittingSubAssyBuffer6=false;
let St410PickKittingSubAssyBuffer7=false;
let St410PickKittingSubAssyBuffer8=false;
let St410PickKittingSubAssyBuffer9=false;
let St410PickKittingSubAssyBuffer10=false;
let St410PickKittingSubAssyBuffer11=false;
let St410PickKittingSubAssyBuffer12=false;
let St410PickKittingSubAssyBuffer13=false;
let St410PickKittingSubAssyBuffer14=false;
let St410PickKittingSubAssyBuffer15=false;
let St410PickKittingSubAssyBuffer16=false;
let St410PickKittingSubAssyBuffer17=false;
let St410PickKTPB0000=false;
let St410PickKTPB0001=false;
let St410PickKTPB0002=false;
let St410PickKTPB0003=false;
let St410PickKTPB0004=false;
let St410PickKTPB0005=false;
let St410PutKTPB0010=false;
let St410PutKTPB0011=false;
let St410GearRatio="";
let St410WorkOrderActive=false;
let St410WorkOrderNo="";
let KTPB0CycleValue=3
let KTPB2CycleValue=3
let KTPB3CycleValue=2
let KTPB5CycleValue=2

let subAssyCycleId=0;
let totalKittingCycleNumber=0;
let ProcessStep="NotStarted";

let simControl=0;
let waitTime=5000;
let updatedJigID="";

function resetSimulator(){
    St410ProcessStatus=1;
    St410PickKittingSubAssyBuffer0=false;
    St410PickKittingSubAssyBuffer1=false;
    St410PickKittingSubAssyBuffer2=false;
    St410PickKittingSubAssyBuffer3=false;
    St410PickKittingSubAssyBuffer4=false;
    St410PickKittingSubAssyBuffer5=false;
    St410PickKittingSubAssyBuffer6=false;
    St410PickKittingSubAssyBuffer7=false;
    St410PickKittingSubAssyBuffer8=false;
    St410PickKittingSubAssyBuffer9=false;
    St410PickKittingSubAssyBuffer10=false;
    St410PickKittingSubAssyBuffer11=false;
    St410PickKittingSubAssyBuffer12=false;
    St410PickKittingSubAssyBuffer13=false;
    St410PickKittingSubAssyBuffer14=false;
    St410PickKittingSubAssyBuffer15=false;
    St410PickKittingSubAssyBuffer16=false;
    St410PickKittingSubAssyBuffer17=false;
    St410PickKTPB0000=false;
    St410PickKTPB0001=false;
    St410PickKTPB0002=false;
    St410PickKTPB0003=false;
    St410PickKTPB0004=false;
    St410PickKTPB0005=false;
    St410PutKTPB0010=false;
    St410PutKTPB0011=false;
    St410GearRatio="";
    St410WorkOrderNo="";
    KTPB0CycleBufferNumber=3
    KTPB0CycleValue=2
    KTPB2CycleValue=2
    KTPB3CycleValue=1
    KTPB5CycleValue=1
    subAssyCycleId=0;
    simControl=0;
    updatedJigID="";
}

function getRandomJigID(){
    let key = Math.random()*1000000;
    St410KittingJigID="JigId"+key.toString().substring(0,5);
}

function resetJigCycle(){
    KTPB0CycleValue=2
    KTPB2CycleValue=2
    KTPB3CycleValue=1
    KTPB5CycleValue=1
    subAssyCycleId=mathjs.mod(totalKittingCycleNumber,6);
    totalKittingCycleNumber+=1;
    St410GearRatio="";
    console.log("subAssyCycleId:"+subAssyCycleId);
    console.log("totalKittingCycleNumber:"+totalKittingCycleNumber);
}

function construct_my_address_space(server) {
    // declare some folders
    const addressSpace = server.engine.addressSpace;
    const namespace = addressSpace.getOwnNamespace();
    const objectsFolder = addressSpace.rootFolder.objects;

    // add a variable named MyVariable1 to the newly created folder "MyDevice"
        
    // emulate variable1 changing every 500 ms
    //setInterval(function(){  variable1+=1;console.log(variable1); }, 2000);

    const stationNode  = namespace.addFolder(objectsFolder,{ browseName: "St410Kitting"});

    function runKSB0() {setTimeout(function () {
        St410ProcessStatus = 2;
        St410PickKittingSubAssyBuffer0=true;
        St410PickKittingSubAssyBuffer6=true;
        St410PickKittingSubAssyBuffer12=true;
        St410PickKTPB0000=true;
        St410PickKTPB0000=true;
        St410PickKTPB0003=true;
        St410PickKTPB0004=true;
        St410PickKTPB0005=true;
        St410PutKTPB0010=true;
        St410PutKTPB0011=true;
    }, 5000);
}

    function runKSB6() {setTimeout(function () {St410PickKittingSubAssyBuffer6=true;}, 3000);}

    function runKSB12() {setTimeout(function () {St410PickKittingSubAssyBuffer12=true;}, 3000);}
    
    function runKSB1() {setTimeout(function () {
        St410ProcessStatus = 2;
        St410PickKittingSubAssyBuffer1=true;
        St410PickKittingSubAssyBuffer7=true;
        St410PickKittingSubAssyBuffer13=true;
        St410PickKTPB0000=true;
        St410PickKTPB0000=true;
        St410PickKTPB0003=true;
        St410PickKTPB0004=true;
        St410PickKTPB0005=true;
        St410PutKTPB0010=true;
        St410PutKTPB0011=true;
    }, 5000);}

    function runKSB7() {setTimeout(function () {St410PickKittingSubAssyBuffer7=true;}, 3000);}

    function runKSB13() {setTimeout(function () {St410PickKittingSubAssyBuffer13=true;}, 3000);}

    function runKSB2() {setTimeout(function () {
        St410ProcessStatus = 2;
        St410PickKittingSubAssyBuffer2=true;
        St410PickKittingSubAssyBuffer8=true;
        St410PickKittingSubAssyBuffer14=true;
        St410PickKTPB0000=true;
        St410PickKTPB0000=true;
        St410PickKTPB0003=true;
        St410PickKTPB0004=true;
        St410PickKTPB0005=true;
        St410PutKTPB0010=true;
        St410PutKTPB0011=true;
    }, 5000);}

    function runKSB8() {setTimeout(function () {St410PickKittingSubAssyBuffer8=true;}, 3000);}

    function runKSB14() {setTimeout(function () {St410PickKittingSubAssyBuffer14=true;}, 3000);}

    function runKSB3() {setTimeout(function () {
        St410ProcessStatus = 2;
        St410PickKittingSubAssyBuffer3=true;
        St410PickKittingSubAssyBuffer9=true;
        St410PickKittingSubAssyBuffer15=true;
        St410PickKTPB0000=true;
        St410PickKTPB0000=true;
        St410PickKTPB0003=true;
        St410PickKTPB0004=true;
        St410PickKTPB0005=true;
        St410PutKTPB0010=true;
        St410PutKTPB0011=true;
    }, 5000);}

    function runKSB9() {setTimeout(function () {St410PickKittingSubAssyBuffer9=true;}, 3000);}

    function runKSB15() {setTimeout(function () {St410PickKittingSubAssyBuffer15=true;}, 3000);}

    function runKSB4() {setTimeout(function () {
        St410ProcessStatus = 2;
        St410PickKittingSubAssyBuffer4=true;
        St410PickKittingSubAssyBuffer10=true;
        St410PickKittingSubAssyBuffer16=true;
        St410PickKTPB0000=true;
        St410PickKTPB0000=true;
        St410PickKTPB0003=true;
        St410PickKTPB0004=true;
        St410PickKTPB0005=true;
        St410PutKTPB0010=true;
        St410PutKTPB0011=true;
    }, 5000);}

    function runKSB10() {setTimeout(function () {St410PickKittingSubAssyBuffer10=true;}, 3000);}

    function runKSB16() {setTimeout(function () {St410PickKittingSubAssyBuffer16=true;}, 3000);}
    
    function runKSB5() {setTimeout(function () {
        St410ProcessStatus = 2;
        St410PickKittingSubAssyBuffer5=true;
        St410PickKittingSubAssyBuffer11=true;
        St410PickKittingSubAssyBuffer17=true;
        St410PickKTPB0000=true;
        St410PickKTPB0000=true;
        St410PickKTPB0003=true;
        St410PickKTPB0004=true;
        St410PickKTPB0005=true;
        St410PutKTPB0010=true;
        St410PutKTPB0011=true;
    }, 5000);}

    function runKSB11() {setTimeout(function () {St410PickKittingSubAssyBuffer11=true;}, 3000);}

    function runKSB17() {setTimeout(function () {St410PickKittingSubAssyBuffer17=true;}, 3000);}

            // add a variable named MyVariable1 to the newly created folder "MyDevice"
            let variable1 = 1;
        
            // emulate variable1 changing every 500 ms
            //setInterval(function(){  console.log("St410ProcessStatus:"+St410ProcessStatus) }, 1000);
            //setInterval(function(){  console.log("St410WorkOrderActive:"+St410WorkOrderActive) }, 1000);
            //setInterval(function(){  console.log("====================================") }, 1000);

        // declare the city node
        const folderNode = namespace.addFolder(stationNode,{ browseName: "OPC" });

        namespace.addVariable({componentOf: folderNode,browseName:"St410WorkOrderActive",nodeId: `s=St410WorkOrderActive`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410WorkOrderActive });},
        set: function (variant) {
            St410WorkOrderActive = variant.value;
            St410ProcessStatus = 1;
            resetJigCycle();
            if(St410WorkOrderActive&&subAssyCycleId==0) runKSB0()      
            if(St410WorkOrderActive&&subAssyCycleId==1) runKSB1()      
            if(St410WorkOrderActive&&subAssyCycleId==2) runKSB2()      
            if(St410WorkOrderActive&&subAssyCycleId==3) runKSB3()      
            if(St410WorkOrderActive&&subAssyCycleId==4) runKSB4()      
            if(St410WorkOrderActive&&subAssyCycleId==5) runKSB5()      
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

    namespace.addVariable({componentOf: folderNode,browseName:"St410GearRatio",nodeId: `s=St410GearRatio`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St410GearRatio });},
    set: function (variant) {
        St410GearRatio = variant.value;
        return opcua.StatusCodes.Good;
    }
}});

        namespace.addVariable({componentOf: folderNode,browseName:"St410ProcessStatus",nodeId: `s=St410ProcessStatus`,dataType: "Byte",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410ProcessStatus });},
    
    }});
    namespace.addVariable({componentOf: folderNode,browseName:"St410KittingJigID",nodeId: `s=St410KittingJigID`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St410KittingJigID });},
    set: function (variant) {
        St410KittingJigID = variant.value;
        return opcua.StatusCodes.Good;
    }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410WorkOrderNo",nodeId: `s=St410WorkOrderNo`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St410WorkOrderNo });},
        set: function (variant) {
            St410WorkOrderNo = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer0",nodeId: `s=St410PickKittingSubAssyBuffer0`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKittingSubAssyBuffer0 });},
        set: function (variant) {
            St410PickKittingSubAssyBuffer0 = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer1",nodeId: `s=St410PickKittingSubAssyBuffer1`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKittingSubAssyBuffer1 });},
        set: function (variant) {
            St410PickKittingSubAssyBuffer1 = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer2",nodeId: `s=St410PickKittingSubAssyBuffer2`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKittingSubAssyBuffer2 });},
        set: function (variant) {
            St410PickKittingSubAssyBuffer2 = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer3",nodeId: `s=St410PickKittingSubAssyBuffer3`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKittingSubAssyBuffer3 });},
        set: function (variant) {
            St410PickKittingSubAssyBuffer3 = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer4",nodeId: `s=St410PickKittingSubAssyBuffer4`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKittingSubAssyBuffer4 });},
        set: function (variant) {
            St410PickKittingSubAssyBuffer4 = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer5",nodeId: `s=St410PickKittingSubAssyBuffer5`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKittingSubAssyBuffer5 });},
        set: function (variant) {
            St410PickKittingSubAssyBuffer4 = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer6",nodeId: `s=St410PickKittingSubAssyBuffer6`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKittingSubAssyBuffer6 });},
        set: function (variant) {
            St410PickKittingSubAssyBuffer6 = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer7",nodeId: `s=St410PickKittingSubAssyBuffer7`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKittingSubAssyBuffer7 });},
        set: function (variant) {
            St410PickKittingSubAssyBuffer7 = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer8",nodeId: `s=St410PickKittingSubAssyBuffer8`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKittingSubAssyBuffer8 });},
        set: function (variant) {
            St410PickKittingSubAssyBuffer8 = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer9",nodeId: `s=St410PickKittingSubAssyBuffer9`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKittingSubAssyBuffer9 });},
        set: function (variant) {
            St410PickKittingSubAssyBuffer9 = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer10",nodeId: `s=St410PickKittingSubAssyBuffer10`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKittingSubAssyBuffer10 });},    
            set: function (variant) {
            St410PickKittingSubAssyBuffer10 = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer11",nodeId: `s=St410PickKittingSubAssyBuffer11`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKittingSubAssyBuffer11 });},    
            set: function (variant) {
            St410PickKittingSubAssyBuffer11 = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer12",nodeId: `s=St410PickKittingSubAssyBuffer12`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKittingSubAssyBuffer12 });},    
            set: function (variant) {
            St410PickKittingSubAssyBuffer12 = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer13",nodeId: `s=St410PickKittingSubAssyBuffer13`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKittingSubAssyBuffer13 });},    
            set: function (variant) {
            St410PickKittingSubAssyBuffer13 = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer14",nodeId: `s=St410PickKittingSubAssyBuffer14`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKittingSubAssyBuffer14 });},    
            set: function (variant) {
            St410PickKittingSubAssyBuffer14 = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer15",nodeId: `s=St410PickKittingSubAssyBuffer15`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKittingSubAssyBuffer15 });},    
            set: function (variant) {
                St410PickKittingSubAssyBuffer15 = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer16",nodeId: `s=St410PickKittingSubAssyBuffer16`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKittingSubAssyBuffer16 });},    
            set: function (variant) {
                St410PickKittingSubAssyBuffer16 = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer17",nodeId: `s=St410PickKittingSubAssyBuffer17`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKittingSubAssyBuffer17 });},    
            set: function (variant) {
                St410PickKittingSubAssyBuffer17 = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKTPB0000",nodeId: `s=St410PickKTPB0000`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKTPB0000 });},
                set: function (variant) {
                    St410PickKTPB0000 = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKTPB0001",nodeId: `s=St410PickKTPB0001`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKTPB0001 });},
                set: function (variant) {
            St410PickKTPB0001 = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKTPB0002",nodeId: `s=St410PickKTPB0002`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKTPB0002 });},
                set: function (variant) {
                    St410PickKTPB0002 = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKTPB0003",nodeId: `s=St410PickKTPB0003`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKTPB0003 });},
        set: function (variant) {
                    St410PickKTPB0003 = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKTPB0004",nodeId: `s=St410PickKTPB0004`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKTPB0004 });},
        set: function (variant) {
                    St410PickKTPB0004 = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKTPB0005",nodeId: `s=St410PickKTPB0005`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PickKTPB0005 });},
                set: function (variant) {
                    St410PickKTPB0005 = variant.value;
                    return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PutKTPB0010",nodeId: `s=St410PutKTPB0010`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PutKTPB0010 });},
        set: function (variant) {
            St410PutKTPB0010 = variant.value;
    return opcua.StatusCodes.Good;
}
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PutKTPB0011",nodeId: `s=St410PutKTPB0011`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410PutKTPB0011 });},
        set: function (variant) {
            St410PutKTPB0011 = variant.value;
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
         port: 4337, // the port of the listening socket of the server
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