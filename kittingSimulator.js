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

let St410ProcessStatus=1;
let St410KittingJigID="JigID11";
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
let St410WorkOrderActive=false;
let St410WorkOrderNo="";
let KTPB0CycleValue=3
let KTPB2CycleValue=3
let KTPB3CycleValue=2
let KTPB5CycleValue=2

let ProcessStep="NotStarted";

let startTest=0;
let simControl=0;
let waitTime=5000;
let updatedJigID="";

function resetSimulator(){
    St410ProcessStatus=1;
    St410KittingJigID="TestJig1234";
    St410PickKittingSubAssyBuffer0=0;
    St410PickKittingSubAssyBuffer1=0;
    St410PickKittingSubAssyBuffer2=0;
    St410PickKittingSubAssyBuffer3=0;
    St410PickKittingSubAssyBuffer4=0;
    St410PickKittingSubAssyBuffer5=0;
    St410PickKittingSubAssyBuffer6=0;
    St410PickKittingSubAssyBuffer7=0;
    St410PickKittingSubAssyBuffer8=0;
    St410PickKittingSubAssyBuffer9=0;
    St410PickKittingSubAssyBuffer10=0;
    St410PickKittingSubAssyBuffer11=0;
    St410PickKittingSubAssyBuffer12=0;
    St410PickKittingSubAssyBuffer13=0;
    St410PickKittingSubAssyBuffer14=0;
    St410PickKittingSubAssyBuffer15=0;
    St410PickKittingSubAssyBuffer16=0;
    St410PickKittingSubAssyBuffer17=0;
    St410PickKTPB0000=0;
    St410PickKTPB0001=0;
    St410PickKTPB0002=0;
    St410PickKTPB0003=0;
    St410PickKTPB0004=0;
    St410PickKTPB0005=0;
    St410PutKTPB0010=0;
    St410PutKTPB0011=0;
    St410GearRatio=0;
    St410WorkOrderActive=0;
    St410WorkOrderNo="";
    KTPB0CycleBufferNumber=3
    KTPB0CycleValue=3
    KTPB2CycleValue=3
    KTPB3CycleValue=2
    KTPB5CycleValue=2

    simControl=0;
    updatedJigID="";
    startTest=0;
}

function getRandomJigID(){
    let key = Math.random()*1000;
    return "JigId"+key.toString;
}

function resetJigCycle(){
    KTPB0CycleValue=3
    KTPB2CycleValue=3
    KTPB3CycleValue=2
    KTPB5CycleValue=2
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
        
        
        setTimeout(function () {St410PickKittingSubAssyBuffer0=1;}, 3000);}

    function runKSB6() {setTimeout(function () {St410PickKittingSubAssyBuffer6=1;}, 3000);}

    function runKSB12() {setTimeout(function () {St410PickKittingSubAssyBuffer12=1;}, 3000);}
    
    function runKSB1() {setTimeout(function () {St410PickKittingSubAssyBuffer1=1;}, 3000);}

    function runKSB7() {setTimeout(function () {St410PickKittingSubAssyBuffer7=1;}, 3000);}

    function runKSB13() {setTimeout(function () {St410PickKittingSubAssyBuffer13=1;}, 3000);}

    function runKSB2() {setTimeout(function () {St410PickKittingSubAssyBuffer2=1;}, 3000);}

    function runKSB8() {setTimeout(function () {St410PickKittingSubAssyBuffer8=1;}, 3000);}

    function runKSB14() {setTimeout(function () {St410PickKittingSubAssyBuffer14=1;}, 3000);}

    function runKSB3() {setTimeout(function () {St410PickKittingSubAssyBuffer3=1;}, 3000);}

    function runKSB9() {setTimeout(function () {St410PickKittingSubAssyBuffer9=1;}, 3000);}

    function runKSB15() {setTimeout(function () {St410PickKittingSubAssyBuffer15=1;}, 3000);}

    function runKSB4() {setTimeout(function () {St410PickKittingSubAssyBuffer4=1;}, 3000);}

    function runKSB10() {setTimeout(function () {St410PickKittingSubAssyBuffer10=1;}, 3000);}

    function runKSB16() {setTimeout(function () {St410PickKittingSubAssyBuffer16=1;}, 3000);}
    
    function runKSB5() {setTimeout(function () {St410PickKittingSubAssyBuffer5=1;}, 3000);}

    function runKSB11() {setTimeout(function () {St410PickKittingSubAssyBuffer11=1;}, 3000);}

    function runKSB17() {setTimeout(function () {St410PickKittingSubAssyBuffer17=1;}, 3000);}

            // add a variable named MyVariable1 to the newly created folder "MyDevice"
            let variable1 = 1;
        
            // emulate variable1 changing every 500 ms
            setInterval(function(){  console.log("St410ProcessStatus:"+St410ProcessStatus) }, 1000);

        // declare the city node
        const folderNode = namespace.addFolder(stationNode,{ browseName: "OPC" });

        namespace.addVariable({componentOf: folderNode,browseName:"St410WorkOrderActive",nodeId: `s=St410WorkOrderActive`,dataType: "Boolean",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Boolean, value: St410WorkOrderActive });},
        set: function (variant) {
            St410WorkOrderActive = variant.value;
            St410KittingJigID=getRandomJigID();
            resetJigCycle();
            if(St410WorkOrderActive==1) runKSB0()      
            return opcua.StatusCodes.Good;
        }
    }});


    namespace.addVariable({componentOf: folderNode,browseName:"St410GearRatio",nodeId: `s=St410GearRatio`,dataType: "String",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410GearRatio });},
    set: function (variant) {
        St410GearRatio = variant.value;
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
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer0",nodeId: `s=St410PickKittingSubAssyBuffer0`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer0 });},
        set: function (variant) {
            St410PickKittingSubAssyBuffer0 = parseFloat(variant.value);
            if(St410PickKittingSubAssyBuffer0==0) runKSB6()      
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer1",nodeId: `s=St410PickKittingSubAssyBuffer1`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer1 });},
        set: function (variant) {
            St410PickKittingSubAssyBuffer1 = parseFloat(variant.value);
            if(St410PickKittingSubAssyBuffer1==0) runKSB7()      
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer2",nodeId: `s=St410PickKittingSubAssyBuffer2`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer2 });},
        set: function (variant) {
            St410PickKittingSubAssyBuffer2 = parseFloat(variant.value);
            if(St410PickKittingSubAssyBuffer2==0) runKSB8()      
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer3",nodeId: `s=St410PickKittingSubAssyBuffer3`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer3 });},
        set: function (variant) {
            St410PickKittingSubAssyBuffer3 = parseFloat(variant.value);
            if(St410PickKittingSubAssyBuffer3==0) runKSB9()      
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer4",nodeId: `s=St410PickKittingSubAssyBuffer4`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer4 });},
        set: function (variant) {
            St410PickKittingSubAssyBuffer4 = parseFloat(variant.value);
            if(St410PickKittingSubAssyBuffer4==0) runKSB10()      
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer5",nodeId: `s=St410PickKittingSubAssyBuffer5`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer5 });},
        set: function (variant) {
            St410PickKittingSubAssyBuffer4 = parseFloat(variant.value);
            if(St410PickKittingSubAssyBuffer5==0) runKSB11()      
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer6",nodeId: `s=St410PickKittingSubAssyBuffer6`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer6 });},
        set: function (variant) {
            St410PickKittingSubAssyBuffer6 = parseFloat(variant.value);
            if(St410PickKittingSubAssyBuffer6==0) runKSB12()      
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer7",nodeId: `s=St410PickKittingSubAssyBuffer7`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer7 });},
        set: function (variant) {
            St410PickKittingSubAssyBuffer7 = parseFloat(variant.value);
            if(St410PickKittingSubAssyBuffer7==0) runKSB13()      
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer8",nodeId: `s=St410PickKittingSubAssyBuffer8`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer8 });},
        set: function (variant) {
            St410PickKittingSubAssyBuffer8 = parseFloat(variant.value);
            if(St410PickKittingSubAssyBuffer8==0) runKSB14()      
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer9",nodeId: `s=St410PickKittingSubAssyBuffer9`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer9 });},
        set: function (variant) {
            St410PickKittingSubAssyBuffer9 = parseFloat(variant.value);
            if(St410PickKittingSubAssyBuffer9==0) runKSB15()      
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer10",nodeId: `s=St410PickKittingSubAssyBuffer10`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer10 });},
    
            set: function (variant) {
            St410PickKittingSubAssyBuffer10 = parseFloat(variant.value);
            if(St410PickKittingSubAssyBuffer10==0) runKSB16()      
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer11",nodeId: `s=St410PickKittingSubAssyBuffer11`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer11 });},
    
            set: function (variant) {
            St410PickKittingSubAssyBuffer11 = parseFloat(variant.value);
            if(St410PickKittingSubAssyBuffer11==0) runKSB17()      
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer12",nodeId: `s=St410PickKittingSubAssyBuffer12`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer12 });},
    
            set: function (variant) {
            St410PickKittingSubAssyBuffer12 = parseFloat(variant.value);
            if(St410PickKittingSubAssyBuffer12==0) runKSB1()      
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer13",nodeId: `s=St410PickKittingSubAssyBuffer13`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer13 });},
    
            set: function (variant) {
            St410PickKittingSubAssyBuffer13 = parseFloat(variant.value);
            if(St410PickKittingSubAssyBuffer13==0) runKSB2()      
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer14",nodeId: `s=St410PickKittingSubAssyBuffer14`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer14 });},
    
            set: function (variant) {
            St410PickKittingSubAssyBuffer12 = parseFloat(variant.value);
            if(St410PickKittingSubAssyBuffer4==0) runKSB3()      
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer15",nodeId: `s=St410PickKittingSubAssyBuffer15`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer15 });},
    
            set: function (variant) {
            St410PickKittingSubAssyBuffer4 = parseFloat(variant.value);
            if(St410PickKittingSubAssyBuffer4==0) runKSB4()      
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer16",nodeId: `s=St410PickKittingSubAssyBuffer16`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer16 });},
    
            set: function (variant) {
            St410PickKittingSubAssyBuffer4 = parseFloat(variant.value);
            if(St410PickKittingSubAssyBuffer4==0) runKSB5()      
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKittingSubAssyBuffer17",nodeId: `s=St410PickKittingSubAssyBuffer17`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKittingSubAssyBuffer17 });},
    
            set: function (variant) {
            St410PickKittingSubAssyBuffer4 = parseFloat(variant.value);
            if(St410PickKittingSubAssyBuffer4==0) runKSB6()      
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKTPB0000",nodeId: `s=St410PickKTPB0000`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKTPB0000 });},
                set: function (variant) {
                    St410PickKTPB0000 = parseFloat(variant.value);
            if(St410PickKTPB0000==0&&KTPB0CycleValue>0) 
            {
                St410PickKTPB0000=1;
                KTPB0CycleValue=KTPB0CycleValue-1;
            }       
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKTPB0001",nodeId: `s=St410PickKTPB0001`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKTPB0001 });},
                set: function (variant) {
            St410PickKTPB0001 = parseFloat(variant.value);
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKTPB0002",nodeId: `s=St410PickKTPB0002`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKTPB0002 });},
                set: function (variant) {
                    St410PickKTPB0002 = parseFloat(variant.value);
            if(St410PickKTPB0002==0&&KTPB2CycleValue>0) 
            {
                St410PickKTPB0000=1;
                KTPB0CycleValue=KTPB2CycleValue-1;
            }
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKTPB0003",nodeId: `s=St410PickKTPB0003`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKTPB0003 });},
        set: function (variant) {
                    St410PickKTPB0003 = parseFloat(variant.value);
            if(St410PickKTPB0003==0&&KTPB3CycleValue>0) 
            {
                St410PickKTPB0003=1;
                KTPB3CycleValue=KTPB3CycleValue-1;
            }
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKTPB0004",nodeId: `s=St410PickKTPB0004`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKTPB0004 });},
        set: function (variant) {
                    St410PickKTPB0004 = parseFloat(variant.value);
            return opcua.StatusCodes.Good;
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PickKTPB0005",nodeId: `s=St410PickKTPB0005`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PickKTPB0005 });},
                set: function (variant) {
                    if(St410PickKTPB0005==0&&KTPB5CycleValue>0) 
                    {
                        St410PickKTPB0005=1;
                        KTPB5CycleValue=KTPB5CycleValue-1;
                    }
        }
    }});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PutKTPB0010",nodeId: `s=St410PutKTPB0010`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PutKTPB0010 });}}});
        namespace.addVariable({componentOf: folderNode,browseName:"St410PutKTPB0011",nodeId: `s=St410PutKTPB0011`,dataType: "Int32",value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St410PutKTPB0011 });}}});
        
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