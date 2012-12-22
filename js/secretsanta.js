var ssNameList = [];
var ssMasterList = [];
var ssRandomNameList = [];

function ssAddNewName() {
  var newName = document.getElementById('txtNameInput').value;
  ssNameList[ssNameList.length] = newName;
  document.getElementById('pNameList').innerHTML = ssNameList;
}














function pickName() {
  
  var fullList = [];
  var fullListOutput = [];
  var totalNumberOfPeople = nameList.length;
  
  //randomises the order of the list
  for (var i=0; i<totalNumberOfPeople; i++) {
  pickedNumber = Math.floor(Math.random()*nameList.length);
  pickedName = nameList[pickedNumber];
  nameList.splice(pickedNumber,1);
  document.getElementById('list').innerHTML = nameList;
  fullList[i] = pickedName;
  }
  
  //sorts the list in to a list of who buys for who. everyone buys for the previous person on the list.
  for (i=1; i<fullList.length; i++) {
    fullListOutput[i-1] = fullList[i] + " gets for " + fullList[i-1];
  }
  
  //output the list
  document.getElementById('nameOutput').innerHTML = fullListOutput;
}

