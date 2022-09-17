document.querySelector('#scan').addEventListener('click', () => {
    Quagga.init({
        numOfWorkers: navigator.hardwareConcurrency,
        locate: true,
        inputStream: {
            name: "Live",
            type: "LiveStream",
            // constraints: {
            //     width: 300,
            //     height: 200,
            //     facingMode: "environment"
            //     // deviceId: "7832475934759384534"
            // },
            // area: { // defines rectangle of the detection/localization area
            //     top: "0%",    // top offset
            //     right: "0%",  // right offset
            //     left: "0%",   // left offset
            //     bottom: "0%"  // bottom offset
            // },
            target: document.querySelector('#scanner')    // Or '#yourElement' (optional)
        },

        frequency: 10,
        decoder: {
            readers: ["ean_reader"]
            // readers: ["code_128_reader", "ean_reader", "ean_8_reader", "code_39_reader", "code_39_vin_reader", "codabar_reader", "upc_reader", "upc_e_reader", "i2of5_reader", "2of5_reader", "code_93_reader"]
        },
        locator: {
            halfSample: true,
            patchSize: 'medium'
        }
    }, function (err) {
        if (err) {
            console.log(err);
            return
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();

    });
    Quagga.onDetected(function (data) {
        console.log(data);
        document.querySelector('.displayCode').innerHTML = data.codeResult.code
    })

})

document.querySelector('#stopScan').addEventListener('click', ()=>{
    Quagga.stop();
})