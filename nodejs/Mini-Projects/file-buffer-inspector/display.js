function display({file,data,chunkCount}){

    const content=data.toString();
    const hexData=data.toString("hex").slice(0,100);
    const base64Data=data.toString("base64").slice(0,100);
    const first20=[...data].slice(0,20);

    console.log(`========================================
         FILE BUFFER INSPECTOR
========================================

Status
------
✔ Inspection Successful

File
----
Name          : ${file}
Encoding      : UTF-8
Size          : ${data.length} Bytes
Chunks Read   : ${chunkCount}

----------------------------------------
CONTENT
----------------------------------------

${content}

----------------------------------------
HEX PREVIEW
----------------------------------------

${hexData}${data.toString("hex").length>100?"...":""}

----------------------------------------
BASE64 PREVIEW
----------------------------------------

${base64Data}${data.toString("base64").length>100?"...":""}

----------------------------------------
FIRST 20 BYTES
----------------------------------------

${first20.join(" \n")}

========================================
Successfully inspected ${file}
========================================`);
}

module.exports=display;