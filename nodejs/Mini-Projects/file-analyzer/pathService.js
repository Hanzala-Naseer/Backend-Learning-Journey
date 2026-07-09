const path= require ("path");

function analyzePath(originalPath){

    let file=path.parse(originalPath);
    let directory=file.dir;
    let fileName=path.basename(originalPath);
    let name=file.name;
    let extension=file.ext;
    let absolutePath=path.resolve(originalPath);
    return ({originalPath,directory,fileName,name,extension,absolutePath});




}

function joinPath(folderPath,fileName){

    let joinedPath=path.join(folderPath,fileName);
    return joinedPath;


}

module.exports={
    analyzePath,
    joinPath
}