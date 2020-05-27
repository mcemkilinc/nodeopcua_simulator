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

let St300UnloadInputSubassy=0;
let St300CollectParts=0;
let St300GearRatio="13:1";
let St300InputEngravingLoad=0;
let St300LoadInputShaft=0;
let St300LoadInputSubAssyParts=0;
let St300LoadJig=0;
let St300LoadTransferSubAssyPart=0;
let St300MachineStatus=1;
let St300MoveNode1=0;
let St300MoveNode2=0;
let St300MoveNode3=0;
let St300MoveNode4=0;
let St300MoveNode5=0;
let St300PickTransferShaft=0;
let St300ProgramJob1=0;
let St300ProgramJob2=0;
let St300ProgramJob3=0;
let St300ProgramJob4=0;
let St300ProgramJob5=0;
let St300ProgramJob6=0;
let St300ProgramJob7=0;
let St300ProgramJob8=0;
let St300ProgramJob9=0;
let St300ReadProcess=0;
let St300TransferEngravingLoad=0;
let St300TransferShaftLoadTray=0;
let St300UnloadTransferGear=0;
let St300UnloadTransferSubassy=0;
let St300WorkOrder="WO1234";
let St301CAM3Finished=0;
let St301ClampLeft=0;
let St301CNCStartProgram3=0;
let St301DoorClose=0;
let St301DoorOpen=0;
let St301InputCAM1=0;
let St301InputCAM2=0;
let St301Status=0;
let St301UnClampLeft=0;
let St310DoorIsOpen=0;
let St310IIWAinNode4=0;
let St310ProcessStatus=0;
let St310WorkOrderActive=0;

let St310MachineState = 4;
let St310PartResult =0;
let St310ProductType = 0;
let St310WorkOrderNo ="WO1234";

let St320DMCSerialNo="123456";
let St320DoorIsOpen=0;
let St320IIWAinNode3=0;
let St320MachineState=4;
let St320PartResult="1";
let St320ProcessStatus=0;
let St320ProductType=0;
let St320WorkOrderActive=0;
let St320WorkOrderNo="";

let St300BearingType1_1=1;
let St300BearingType1_2=1;
let St300BearingType2_1=1;
let St300BearingType2_2=1;
let St300RawInputShaft=1;
let St300RawTransferGear=1;
let St300TransferShaftCustom=1;
let St300TransferShaftClassic=1;




function resetSimulator(){


}

function construct_my_address_space(server) {
    // declare some folders
    const addressSpace = server.engine.addressSpace;
    const namespace = addressSpace.getOwnNamespace();
    const objectsFolder = addressSpace.rootFolder.objects;

    // add a variable named MyVariable1 to the newly created folder "MyDevice"
        
    // emulate variable1 changing every 500 ms
    //setInterval(function(){  variable1+=1;console.log(variable1); }, 2000);

    const stationNode  = namespace.addFolder(objectsFolder,{ browseName: "St300"});

    // Functions to be places
    

    // add a variable named MyVariable1 to the newly created folder "MyDevice"
    let variable1 = 1;

    // emulate variable1 changing every 500 ms


    // declare the city node
    const folderNode = namespace.addFolder(stationNode,{ browseName: "OPC" });
           
    namespace.addVariable({componentOf: folderNode,browseName:'St300UnloadInputSubassy',nodeId: `s=St300UnloadInputSubassy`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300UnloadInputSubassy });},
    set: function (variant) {
        St300UnloadInputSubassy = variant.value;
        if(St300UnloadInputSubassy==1) {
        setTimeout(function () {
        St300UnloadInputSubassy=2;
        },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300CollectParts',nodeId: `s=St300CollectParts`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300CollectParts });},
    set: function (variant) {
        St300CollectParts = variant.value;
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300GearRatio',nodeId: `s=St300GearRatio`,dataType: 'String',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St300GearRatio });},
    set: function (variant) {
        St300GearRatio = variant.value;
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300InputEngravingLoad',nodeId: `s=St300InputEngravingLoad`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300InputEngravingLoad });},
    set: function (variant) {
        St300InputEngravingLoad = variant.value;
        if(St300InputEngravingLoad==1) {
        setTimeout(function () {
        St300InputEngravingLoad=2;
        },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300LoadInputShaft',nodeId: `s=St300LoadInputShaft`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300LoadInputShaft });},
    set: function (variant) {
        St300LoadInputShaft = variant.value;
        if(St300LoadInputShaft==1) {
        setTimeout(function () {
        St300LoadInputShaft=2;
        },waitTime);
        }
        if(St300LoadInputShaft==2) {
            setTimeout(function () {
            St320DoorIsOpen=0;
            St320MachineState=4;
            St320ProcessStatus=0;
            St320DoorIsOpen=0;
            St320WorkOrderActive=0;
            },waitTime);
            }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300LoadInputSubAssyParts',nodeId: `s=St300LoadInputSubAssyParts`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300LoadInputSubAssyParts });},
    set: function (variant) {
        St300LoadInputSubAssyParts = variant.value;
        if(St300LoadInputSubAssyParts==1) {
        setTimeout(function () {
        St300LoadInputSubAssyParts=2;
        },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300LoadJig',nodeId: `s=St300LoadJig`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300LoadJig });},
    set: function (variant) {
        St300LoadJig = variant.value;
        if(St300LoadJig==1) {
        setTimeout(function () {
        St300LoadJig=2;
        },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300LoadTransferSubAssyPart',nodeId: `s=St300LoadTransferSubAssyPart`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300LoadTransferSubAssyPart });},
    set: function (variant) {
        St300LoadTransferSubAssyPart = variant.value;
        if(St300LoadTransferSubAssyPart==1) {
        setTimeout(function () {
        St300LoadTransferSubAssyPart=2;
        },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300MachineStatus',nodeId: `s=St300MachineStatus`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300MachineStatus });},
    set: function (variant) {
        St300MachineStatus = variant.value;
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300MoveNode1',nodeId: `s=St300MoveNode1`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300MoveNode1 });},
    set: function (variant) {
        St300MoveNode1 = variant.value;
        if(St300MoveNode1==1) {
            setTimeout(function () {
                St300MoveNode1=2
            },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300MoveNode2',nodeId: `s=St300MoveNode2`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300MoveNode2 });},
    set: function (variant) {
        St300MoveNode2 = variant.value;
        if(St300MoveNode2==1) {
            setTimeout(function () {
                St300MoveNode2=2;
                if(St300ProgramJob7==1) St300ProgramJob7=2;
                St301Status=1;
            },waitTime);
        }
        if(St300MoveNode2==2&&St300ProgramJob5==1) {
            setTimeout(function () {
                St301InputCAM2=3;
                St301Status=1;
            },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300MoveNode3',nodeId: `s=St300MoveNode3`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300MoveNode3 });},
    set: function (variant) {
        St300MoveNode3 = variant.value;
        if(St300MoveNode3==1) {
        setTimeout(function () {
        St300MoveNode3=2;
        },waitTime);
        }
        if(St300MoveNode3==2&&St300ProgramJob8==1) {
        setTimeout(function () {
            St320ProcessStatus=0;
St320DoorIsOpen=0;
St320WorkOrderActive=0;
        },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300MoveNode4',nodeId: `s=St300MoveNode4`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300MoveNode4 });},
    set: function (variant) {
        St300MoveNode4 = variant.value;
        if(St300MoveNode4==1) {
        setTimeout(function () {
        St300MoveNode4=2;
        },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300MoveNode5',nodeId: `s=St300MoveNode5`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300MoveNode5 });},
    set: function (variant) {
        St300MoveNode5 = variant.value;
        if(St300MoveNode5==1) {
        setTimeout(function () {
        St300MoveNode5=2;
        },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300PickTransferShaft',nodeId: `s=St300PickTransferShaft`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300PickTransferShaft });},
    set: function (variant) {
        St300PickTransferShaft = variant.value;
        if(St300PickTransferShaft==1) {
        setTimeout(function () {
        St300PickTransferShaft=2;
        },waitTime);
    }
        if(St300PickTransferShaft==2) {
            setTimeout(function () {
                St320ProcessStatus=0;
                St320DoorIsOpen=0;
                St320WorkOrderActive=0;
                        },waitTime);
        }
        return opcua.StatusCodes.Good;
        }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300ProgramJob1',nodeId: `s=St300ProgramJob1`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300ProgramJob1 });},
    set: function (variant) {
        St300ProgramJob1 = variant.value;
        if(St300ProgramJob1==1) {
            setTimeout(function () {
                St301DoorOpen=2;
                St300ProgramJob1=2;
            },waitTime);
        return opcua.StatusCodes.Good;
        }
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300ProgramJob2',nodeId: `s=St300ProgramJob2`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300ProgramJob2 });},
    set: function (variant) {
        St300ProgramJob2 = variant.value;
        if(St300ProgramJob2==1) {
            setTimeout(function () {
                St301DoorClose=2;
                St301ClampLeft=1;
                St300ProgramJob2=2;
                St300MoveNode2=2;
            },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300ProgramJob3',nodeId: `s=St300ProgramJob3`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300ProgramJob3 });},
    set: function (variant) {
        St300ProgramJob3 = variant.value;
        if(St300ProgramJob3==1) {
            setTimeout(function () {
                St301ClampLeft=1;
                St301InputCAM1=2;
            },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300ProgramJob4',nodeId: `s=St300ProgramJob4`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300ProgramJob4 });},
    set: function (variant) {
        St300ProgramJob4 = variant.value;
        if(St300ProgramJob4==1) {
        setTimeout(function () {
        St301UnClampLeft=1
        },waitTime);
    }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300ProgramJob5',nodeId: `s=St300ProgramJob5`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300ProgramJob5 });},
    set: function (variant) {
        St300ProgramJob5 = variant.value;
        if(St300ProgramJob5==1) {
        setTimeout(function () {
            St301InputCAM2=2;
        },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300ProgramJob6',nodeId: `s=St300ProgramJob6`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300ProgramJob6 });},
    set: function (variant) {
        St300ProgramJob6 = variant.value;
        if(St300ProgramJob6==1) {
        setTimeout(function () {
        St300ProgramJob6=2;
        },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300ProgramJob7',nodeId: `s=St300ProgramJob7`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300ProgramJob7 });},
    set: function (variant) {
        St300ProgramJob7 = variant.value;
        if(St300ProgramJob7==1) {
        setTimeout(function () {
            St301CNCStartProgram3=2;
        },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300ProgramJob8',nodeId: `s=St300ProgramJob8`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300ProgramJob8 });},
    set: function (variant) {
        St300ProgramJob8 = variant.value;
        if(St300ProgramJob8==1) {
        setTimeout(function () {
        St301DoorClose=2;
        St300ProgramJob8=2;
        },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300ProgramJob9',nodeId: `s=St300ProgramJob9`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300ProgramJob9 });},
    set: function (variant) {
        St300ProgramJob9 = variant.value;
        if(St300ProgramJob9==1) {
        setTimeout(function () {
            St300ProgramJob9=2;
            St301ClampLeft=1;
St301DoorClose=2;
        },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300ReadProcess',nodeId: `s=St300ReadProcess`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300ReadProcess });},
    set: function (variant) {
        St300ReadProcess = variant.value;
        if(St300ReadProcess==1) {
        setTimeout(function () {
        St300ReadProcess=2;
        },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300TransferEngravingLoad',nodeId: `s=St300TransferEngravingLoad`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300TransferEngravingLoad });},
    set: function (variant) {
        St300TransferEngravingLoad = variant.value;
        if(St300TransferEngravingLoad==1) {
        setTimeout(function () {
        St300TransferEngravingLoad=2;
        },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300TransferShaftLoadTray',nodeId: `s=St300TransferShaftLoadTray`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300TransferShaftLoadTray });},
    set: function (variant) {
        St300TransferShaftLoadTray = variant.value;
        if(St300TransferShaftLoadTray==1) {
        setTimeout(function () {
        St300TransferShaftLoadTray=2;
        },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300UnloadTransferGear',nodeId: `s=St300UnloadTransferGear`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300UnloadTransferGear });},
    set: function (variant) {
        St300UnloadTransferGear = variant.value;
        if(St300UnloadTransferGear==1) {
        setTimeout(function () {
        St300UnloadTransferGear=2;
        },waitTime);
        }
        if(St300UnloadTransferGear==2&&St320WorkOrderActive==1) {
            setTimeout(function () {
                St320ProcessStatus=0;
                St320DoorIsOpen=1;
                St310PartResult=0; 
                St320WorkOrderActive=0;
            },waitTime);
            }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300UnloadTransferSubassy',nodeId: `s=St300UnloadTransferSubassy`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300UnloadTransferSubassy });},
    set: function (variant) {
        St300UnloadTransferSubassy = variant.value;
        if(St300UnloadTransferSubassy==1) {
        setTimeout(function () {
        St300UnloadTransferSubassy=2;
        },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300WorkOrder',nodeId: `s=St300WorkOrder`,dataType: 'String',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St300WorkOrder });},
    set: function (variant) {
        St300WorkOrder = variant.value;
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St301CAM3Finished',nodeId: `s=St301CAM3Finished`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St301CAM3Finished });},
    set: function (variant) {
        St301CAM3Finished = variant.value;
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St301ClampLeft',nodeId: `s=St301ClampLeft`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St301ClampLeft });},
    set: function (variant) {
        St301ClampLeft = variant.value;
        if(St301ClampLeft==1) {
        setTimeout(function () {
        St301ClampLeft=0;
        St300MoveNode2=2;
        St301DoorClose=2;
        St300ProgramJob4=2;
        },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St301CNCStartProgram3',nodeId: `s=St301CNCStartProgram3`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St301CNCStartProgram3 });},
    set: function (variant) {
        St301CNCStartProgram3 = variant.value;
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St301DoorClose',nodeId: `s=St301DoorClose`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St301DoorClose });},
    set: function (variant) {
        St301DoorClose = variant.value;
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St301DoorOpen',nodeId: `s=St301DoorOpen`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St301DoorOpen });},
    set: function (variant) {
        St301DoorOpen = variant.value;
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St301InputCAM1',nodeId: `s=St301InputCAM1`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St301InputCAM1 });},
    set: function (variant) {
        St301InputCAM1 = variant.value;
        if(St301InputCAM1=2) {
            setTimeout(function () {
                St301InputCAM1=3
            },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St301InputCAM2',nodeId: `s=St301InputCAM2`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St301InputCAM2 });},
    set: function (variant) {
        St301InputCAM2 = variant.value;
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St301Status',nodeId: `s=St301Status`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St301Status });},
    set: function (variant) {
        St301Status = variant.value;
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St301UnClampLeft',nodeId: `s=St301UnClampLeft`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St301UnClampLeft });},
    set: function (variant) {
        St301UnClampLeft = variant.value;
        if(St301UnClampLeft=1) {
        setTimeout(function () {
        St301ClampLeft=1
        },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St310DoorIsOpen',nodeId: `s=St310DoorIsOpen`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St310DoorIsOpen });},
    set: function (variant) {
        St310DoorIsOpen = variant.value;
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St310IIWAinNode4',nodeId: `s=St310IIWAinNode4`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St310IIWAinNode4 });},
    set: function (variant) {
        St310IIWAinNode4 = variant.value;
        if(St310IIWAinNode4==1) {
        setTimeout(function () {
            St310DoorIsOpen=1;
                },waitTime);
        }
        if(St310IIWAinNode4==0) {
            setTimeout(function () {
                St310ProcessStatus=0;
                St310DoorIsOpen=0;
                St310PartResult=1;
                St301CAM3Finished=1;
                    },waitTime);
            }
            if(St310IIWAinNode4==0&&St310ProductType==2) {
                setTimeout(function () {
                    St310ProcessStatus=0;
                    St310DoorIsOpen=0;
                    St310WorkOrderActive=0;
                        },waitTime);
                }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St310ProcessStatus',nodeId: `s=St310ProcessStatus`,dataType: 'Byte',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St310ProcessStatus });},
    set: function (variant) {
        St310ProcessStatus = variant.value;
        if(St310ProcessStatus==1) {
        setTimeout(function () {
        St310ProcessStatus=2;
        St310DoorIsOpen=1;
        St310PartResult=1;
        },waitTime);
        }
        if(St310ProcessStatus==4) {
            setTimeout(function () {
            St310ProcessStatus=8;
            St310DoorIsOpen=1;
            St310PartResult=1;
            },waitTime);
            }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St310WorkOrderActive',nodeId: `s=St310WorkOrderActive`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St310WorkOrderActive });},
    set: function (variant) {
        St310WorkOrderActive = variant.value;
        if(St310WorkOrderActive==1&&St310ProductType==1) {
        setTimeout(function () {
            St310ProcessStatus=1;
                    },waitTime);
        }
        if(St310WorkOrderActive==1&&St310ProductType==2) {
            setTimeout(function () {
                St310ProcessStatus=4;
                        },waitTime);
            }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St310MachineState',nodeId: `s=St310MachineState`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St310MachineState });},
    set: function (variant) {
        St310MachineState = variant.value;
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St310PartResult',nodeId: `s=St310PartResult`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St310PartResult });},
    set: function (variant) {
        St310PartResult = variant.value;
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St310ProductType',nodeId: `s=St310ProductType`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St310ProductType });},
    set: function (variant) {
        St310ProductType = variant.value;
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St310WorkOrderNo',nodeId: `s=St310WorkOrderNo`,dataType: 'String',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St310WorkOrderNo });},
    set: function (variant) {
        St310WorkOrderNo = variant.value;
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St320DMCSerialNo',nodeId: `s=St320DMCSerialNo`,dataType: 'String',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St320DMCSerialNo });},
    set: function (variant) {
        St320DMCSerialNo = variant.value;
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St320DoorIsOpen',nodeId: `s=St320DoorIsOpen`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St320DoorIsOpen });},
    set: function (variant) {
        St320DoorIsOpen = variant.value;
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St320IIWAinNode3',nodeId: `s=St320IIWAinNode3`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St320IIWAinNode3 });},
    set: function (variant) {
        St320IIWAinNode3 = variant.value;
        if(St320IIWAinNode3==1) {
        setTimeout(function () {
        St320DoorIsOpen=1;
        },waitTime);
        }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St320MachineState',nodeId: `s=St320MachineState`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St320MachineState });},
    set: function (variant) {
        St320MachineState = variant.value;
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St320PartResult',nodeId: `s=St320PartResult`,dataType: 'String',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St320PartResult });},
    set: function (variant) {
        St320PartResult = variant.value;
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St320ProcessStatus',nodeId: `s=St320ProcessStatus`,dataType: 'Byte',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Byte, value: St320ProcessStatus });},
    set: function (variant) {
        St320ProcessStatus = variant.value;
        if(St320ProcessStatus==16) {
        setTimeout(function () {
        St320ProcessStatus==32;
        St320DMCSerialNo="SN234";
        St320PartResult=1;
        },waitTime);
        }
        if(St320ProcessStatus==0) {
            setTimeout(function () {
            St320DoorIsOpen=0;
            St320WorkOrderActive=0;
            },waitTime);
            }
            if(St320ProcessStatus==1) {
                setTimeout(function () {
                    St320ProcessStatus=2;
                    St320DoorIsOpen=1;
                    St320PartResult=1;
                },waitTime);
                }
                if(St320ProcessStatus==4) {
                    setTimeout(function () {
                        St320ProcessStatus=8;
                        St320DoorIsOpen=1;
                        St320PartResult=1;
                    },waitTime);
                    }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St320ProductType',nodeId: `s=St320ProductType`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St320ProductType });},
    set: function (variant) {
        St320ProductType = variant.value;
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St320WorkOrderActive',nodeId: `s=St320WorkOrderActive`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St320WorkOrderActive });},
    set: function (variant) {
        St320WorkOrderActive = variant.value;
        if(St320WorkOrderActive==1&&St320ProductType==4) {
        setTimeout(function () {
        St320ProcessStatus=16;
        St320DMCSerialNo="DMCSerial134";
        St320PartResult=1;
        },waitTime);
        }
        if(St320WorkOrderActive==1&&St300ProgramJob7==1) {
            setTimeout(function () {
            St320ProcessStatus=1;
            },waitTime);
            }
            if(St320WorkOrderActive==1&&St300ProgramJob8==1) {
                setTimeout(function () {
                St320ProcessStatus=4;
                },waitTime);
                }
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St320WorkOrderNo',nodeId: `s=St320WorkOrderNo`,dataType: 'String',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.String, value: St320WorkOrderNo });},
    set: function (variant) {
        St320WorkOrderNo = variant.value;
        return opcua.StatusCodes.Good;
    }
    }});
    namespace.addVariable({componentOf: folderNode,browseName:'St300BearingType1_1',nodeId: `s=St300BearingType1_1`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300BearingType1_1 });},
set: function (variant) {
    St300BearingType1_1 = variant.value;
    setTimeout(function () {
        St300BearingType1_1=99
    },waitTime);
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St300BearingType1_2',nodeId: `s=St300BearingType1_2`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300BearingType1_2 });},
set: function (variant) {
    St300BearingType1_2 = variant.value;
    setTimeout(function () {
        St300BearingType1_2=99
    },waitTime);
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St300BearingType2_1',nodeId: `s=St300BearingType2_1`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300BearingType2_1 });},
set: function (variant) {
    St300BearingType2_1 = variant.value;
    setTimeout(function () {
        St300BearingType2_1=99
    },waitTime);
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St300BearingType2_2',nodeId: `s=St300BearingType2_2`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300BearingType2_2 });},
set: function (variant) {
    St300BearingType2_2 = variant.value;
    setTimeout(function () {
        St300BearingType2_2=99
    },waitTime);
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St300RawInputShaft',nodeId: `s=St300RawInputShaft`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300RawInputShaft });},
set: function (variant) {
    St300RawInputShaft = variant.value;
        setTimeout(function () {
            St300RawInputShaft=99
        },waitTime);
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St300RawTransferGear',nodeId: `s=St300RawTransferGear`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300RawTransferGear });},
set: function (variant) {
    St300RawTransferGear = variant.value;
    setTimeout(function () {
        St300RawTransferGear=99
    },waitTime);
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St300TransferShaftCustom',nodeId: `s=St300TransferShaftCustom`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300TransferShaftCustom });},
set: function (variant) {
    St300TransferShaftCustom = variant.value;
    
    return opcua.StatusCodes.Good;
}
}});
namespace.addVariable({componentOf: folderNode,browseName:'St300TransferShaftClassic',nodeId: `s=St300TransferShaftClassic`,dataType: 'Int32',value:{get: function () {return new opcua.Variant({dataType: opcua.DataType.Int32, value: St300TransferShaftClassic });},
set: function (variant) {
    St300TransferShaftClassic = variant.value;
    setTimeout(function () {
        St300TransferShaftClassic=99
        St300CollectParts=2;
    },waitTime);
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
         port: 4340, // the port of the listening socket of the server
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