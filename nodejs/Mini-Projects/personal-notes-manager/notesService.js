
const fs= require("fs");

const {printSuccess,printError,printNotes}=require("./display.js")

function addNote(note){

    try {
        fs.appendFileSync("./notes/notes.txt",`${note}\n`);
        printSuccess("Note added successfully.");
        
    } catch (error) {
        printError(error);
        
    }

}

function viewNotes(){
    try {
        let notes =fs.readFileSync("./notes/notes.txt","utf8");
        
        printNotes(notes);

        
    } catch (error) {
        printError(error);
        
    }
}

function deleteAllNotes(){
    try {
        fs.writeFileSync("./notes/notes.txt","");
        printSuccess("All notes have been deleted ! ")

        
    } catch (error) {
        printError(error);
        
    }
}

function backupNotes() {
  try {
    const currentDate = new Date().toISOString().replace(/[:.]/g, '-');
    let backup = fs.readFileSync(`./notes/notes.txt`, 'utf8'); 
    fs.writeFileSync(`./notes/notes_backup.txt_${currentDate}`, `${backup}\n`);
    printSuccess("Back-up have been made!");
  } catch (error) {
    printError(error);
  }
}

module.exports={
    addNote,
    viewNotes,
    deleteAllNotes,
    backupNotes
}

