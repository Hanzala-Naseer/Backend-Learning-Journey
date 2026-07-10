

const {Buffer}= require("buffer");

const util= require("util");

function inspectBuffer(text){
    let b= Buffer.from(text);



    console.log(`========================
Original Text:
${text}

Buffer:
${util.inspect(b)}

Length:
${b.length}

Bytes:
${[...b].join(` \n`)}

Hex:
${b.toString("hex")}

Base64:
${b.toString("base64")}
========================`)

}


inspectBuffer("Node");