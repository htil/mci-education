/** Main class used to manage the WebHRI App. 
 * @class
*/
var Main = function() {

    //ROS
    //window.ros = new ROS()

    //Baxter
    //this.baxter = new Baxter()
    //vid = new Video()
    //speech = new Speech()
    //window.pan = this.baxter.updateHeadPan

    //Visualizers
    //this.visualizer = new Vis()

    this.blocklyInterface = new BlocklyInterface()
    this.runButton = document.getElementById('runButton');
   

    this.createEventListener = function(id, callback) {
        document.getElementById(id).onclick = callback;
    }

    this.handleEvents = function(){
        this.createEventListener("runButton", window.runBlockCode)
    }
}

Main.prototype.start = function() {
    //window.ros.init()
    this.blocklyInterface.init()
    this.handleEvents()
    //this.visualizer.start()
    //this.baxter.updateFace("Happy", "SW", "White")
    //this.baxter.updateHeadPan(0.0)
}



updateDisplay = function(doc, config) {
    let rawGraph =  doc.getElementById("rawGraph")
    let psdGraph =  doc.getElementById("psdGraphHolder")
    let bpGraph =  doc.getElementById("bandPower")
    let videoHolder =  doc.getElementById("videoHolder")
    let speechHolder = doc.getElementById("speechHolder")
    rawGraph.style.display = config.rawGraph
    bpGraph.style.display = config.bpGraph
    psdGraph.style.display = config.psdGraph
    videoHolder.style.display = config.videoHolder
    speechHolder.style.display = config.speechHolder
}

setEditor = function(doc, mode) {
    let blocklyDiv =  doc.getElementById("blocklyDiv")
    let textCode =  doc.getElementById("textCode")
    if (mode == "text") {
        blocklyDiv.style.display = "none"
        textCode.style.display = "block"
    } else {
        blocklyDiv.style.display = "block"
        textCode.style.display = "none"
    }
}



// Wait until document is finished loading before starting App
$(document).ready(function(){ 
	var main = new Main();
    main.start()
    //vid.start()
    //speech.recognizeSpeech()

    
    updateDisplay(document, {
        psdGraph: "inline", 
        bpGraph: "none",
        rawGraph: "none",
        videoHolder: "none",
        speechHolder: "none"
    })
    


    // Event
    $("#rawEEG").click((e) => {
        updateDisplay(document, {
            psdGraph: "none", 
            bpGraph: "none",
            rawGraph: "inline",
            videoHolder: "none",
            speechHolder: "none"
        })
    })


    $("#psd").click((e) => {
        updateDisplay(document, {
            psdGraph: "inline", 
            bpGraph: "none",
            rawGraph: "none",
            videoHolder: "none",
            speechHolder: "none"
        })
    })

    $("#bandpower").click((e) => {       
       updateDisplay(document, {
            psdGraph: "none", 
            bpGraph: "inline",
            rawGraph: "none",
            videoHolder: "none",
            speechHolder: "none"
        })
    })

    $("#camera").click((e) => {       
        updateDisplay(document, {
             psdGraph: "none", 
             bpGraph: "none",
             rawGraph: "none",
             videoHolder: "inline",
             speechHolder: "none"
         })
     })


     $("#speech").click((e) => { 
        updateDisplay(document, {
            psdGraph: "none", 
            bpGraph: "none",
            rawGraph: "none",
            videoHolder: "none",
            speechHolder: "inline"
        })
     })

     $("#textfile").click((e) => { 
        setEditor(document, "text")
        window.editorMode = "text"
     })

     $("#blockFile").click((e) => { 
        setEditor(document, "block")
        window.editorMode = "block"
    })
     


});



