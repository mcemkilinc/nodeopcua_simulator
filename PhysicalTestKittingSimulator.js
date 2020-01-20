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
let St410KittingJigID="R1TestJig1234";
let St410PickKittingSubAssyBuffer0=0;
let St410PickKittingSubAssyBuffer1=0;
let St410PickKittingSubAssyBuffer2=0;
let St410PickKittingSubAssyBuffer3=0;
let St410PickKittingSubAssyBuffer4=0;
let St410PickKittingSubAssyBuffer5=0;
let St410PickKittingSubAssyBuffer6=0;
let St410PickKittingSubAssyBuffer7=0;
let St410PickKittingSubAssyBuffer8=0;
let St410PickKittingSubAssyBuffer9=0;
let St410PickKittingSubAssyBuffer10=0;
let St410PickKittingSubAssyBuffer11=0;
let St410PickKittingSubAssyBuffer12=0;
let St410PickKittingSubAssyBuffer13=0;
let St410PickKittingSubAssyBuffer14=0;
let St410PickKittingSubAssyBuffer15=0;
let St410PickKittingSubAssyBuffer16=0;
let St410PickKittingSubAssyBuffer17=0;
let St410PickKTPB0000=0;
let St410PickKTPB0001=0;
let St410PickKTPB0002=0;
let St410PickKTPB0003=0;
let St410PickKTPB0004=0;
let St410PickKTPB0005=0;
let St410PutKTPB0010=0;
let St410PutKTPB0011=0;
let St410GearRatio=0;
let St410WorkOrderActive=1;

let ProcessStep="NotStarted";

let startTest=0;
let simControl=0;
let waitTime=5000;
let updatedJigID="";

function resetSimulator(){
    let St410ProcessStatus=1;
    let St410KittingJigID=1;
    let St410PickKittingSubAssyBuffer0=0;
    let St410PickKittingSubAssyBuffer1=0;
    let St410PickKittingSubAssyBuffer2=0;
    let St410PickKittingSubAssyBuffer3=0;
    let St410PickKittingSubAssyBuffer4=0;
    let St410PickKittingSubAssyBuffer5=0;
    let St410PickKittingSubAssyBuffer6=0;
    let St410PickKittingSubAssyBuffer7=0;
    let St410PickKittingSubAssyBuffer8=0;
    let St410PickKittingSubAssyBuffer9=0;
    let St410PickKittingSubAssyBuffer10=0;
    let St410PickKittingSubAssyBuffer11=0;
    let St410PickKittingSubAssyBuffer12=0;
    let St410PickKittingSubAssyBuffer13=0;
    let St410PickKittingSubAssyBuffer14=0;
    let St410PickKittingSubAssyBuffer15=0;
    let St410PickKittingSubAssyBuffer16=0;
    let St410PickKittingSubAssyBuffer17=0;
    let St410PickKTPB0000=0;
    let St410PickKTPB0001=0;
    let St410PickKTPB0002=0;
    let St410PickKTPB0003=0;
    let St410PickKTPB0004=0;
    let St410PickKTPB0005=0;
    let St410PutKTPB0010=0;
    let St410PutKTPB0011=0;
    let St410GearRatio=0;
    let St410WorkOrderActive=1;
    

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

    const stationNode  = namespace.addFolder(objectsFolder,{ browseName: "St410Kitting"});

    function runKSB0() {
        setTimeout(function () {
            St410PickKittingSubAssyBuffer0=1;
        }, 3000);
    }

    function runKSB6() {
        setTimeout(function () {
            St410PickKittingSubAssyBuffer6=1;
        }, 3000);
    }

    function runKSB12() {
        setTimeout(function () {
            St410PickKittingSubAssyBuffer12=1;
        }, 3000);
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
            setInterval(function(){  console.log("St410ProcessStatus:"+St410ProcessStatus) }, 1000);
            setInterval(function(){  console.log("St410KittingJigID:"+St410KittingJigID) }, 1000);


        // declare the city node
        const folderNode = namespace.addFolder(stationNode,{ browseName: "OPC" });

        namespace.addVariable({componentOf: folderNode,browseName:"St410WorkOrderActive",nodeId: `s=St410WorkOrderActive`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410WorkOrderActive });},
        set: function (variant) {
            St410WorkOrderActive = parseFloat(variant.value);
            if(St410WorkOrderActive==1) runKSB0()      
            return opcua.StatusCodes.Good;
        }
    }});

        namespace.addVariable({componentOf: folderNode,browseName:"St410ProcessStatus",nodeId: `s=St410ProcessStatus`,dataType: "Byte",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410ProcessStatus });},
        set: function (variant) {
            St410ProcessStatus = parseFloat(variant.value);
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410KittingJigID",nodeId: `s=St410KittingJigID`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St410KittingJigID });},
        set: function (variant) {
            St410KittingJigID = variant.value;
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer0",nodeId: `s=St410PickKittingSubAssyBuffer0`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer0 });},
        set: function (variant) {
            St410PickKittingSubAssyBuffer0 = parseFloat(variant.value);
            if(St410PickKittingSubAssyBuffer0==0) runKSB6()      
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer1",nodeId: `s=St410PickKittingSubAssyBuffer1`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer1 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer2",nodeId: `s=St410PickKittingSubAssyBuffer2`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer2 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer3",nodeId: `s=St410PickKittingSubAssyBuffer3`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer3 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer4",nodeId: `s=St410PickKittingSubAssyBuffer4`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer4 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer5",nodeId: `s=St410PickKittingSubAssyBuffer5`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer5 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer6",nodeId: `s=St410PickKittingSubAssyBuffer6`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer6 });},
        set: function (variant) {
            St410PickKittingSubAssyBuffer6 = parseFloat(variant.value);
            if(St410PickKittingSubAssyBuffer6==0) runKSB12()      
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer7",nodeId: `s=St410PickKittingSubAssyBuffer7`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer7 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer8",nodeId: `s=St410PickKittingSubAssyBuffer8`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer8 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer9",nodeId: `s=St410PickKittingSubAssyBuffer9`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer9 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer10",nodeId: `s=St410PickKittingSubAssyBuffer10`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer10 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer11",nodeId: `s=St410PickKittingSubAssyBuffer11`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer11 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer12",nodeId: `s=St410PickKittingSubAssyBuffer12`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer12 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer13",nodeId: `s=St410PickKittingSubAssyBuffer13`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer13 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer14",nodeId: `s=St410PickKittingSubAssyBuffer14`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer14 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer15",nodeId: `s=St410PickKittingSubAssyBuffer15`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer15 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer16",nodeId: `s=St410PickKittingSubAssyBuffer16`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer16 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer17",nodeId: `s=St410PickKittingSubAssyBuffer17`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer17 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKTPB0000",nodeId: `s=St410PickKTPB0000`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKTPB0000 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKTPB0001",nodeId: `s=St410PickKTPB0001`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKTPB0001 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKTPB0002",nodeId: `s=St410PickKTPB0002`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKTPB0002 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKTPB0003",nodeId: `s=St410PickKTPB0003`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKTPB0003 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKTPB0004",nodeId: `s=St410PickKTPB0004`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKTPB0004 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKTPB0005",nodeId: `s=St410PickKTPB0005`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKTPB0005 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PutKTPB0010",nodeId: `s=St410PutKTPB0010`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PutKTPB0010 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PutKTPB0011",nodeId: `s=St410PutKTPB0011`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PutKTPB0011 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410GearRatio",nodeId: `s=St410GearRatio`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410GearRatio });}}});
        

    }

function extract_value(dataType) {

    return new opcua.Variant({dataType, value: 1 });
}

(async () => {

    try {
      
      const server = new opcua.OPCUAServer({
         port: 4350, // the port of the listening socket of the server
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