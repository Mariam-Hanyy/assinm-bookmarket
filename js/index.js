var nameInput = document.getElementById("nameInput");
var websiteInput = document.getElementById("websiteInput");


var bookmarkList=[];
if(localStorage.getItem("bookmark")!=null){
    bookmarkList= JSON.parse(localStorage.getItem("bookmark"))
    displayData()

}

function addBookmark(){
    var item={
        name:nameInput.value,
        website:websiteInput.value
    }
    bookmarkList.push(item);
    localStorage.setItem("bookmark",JSON.stringify(bookmarkList));

    displayData();
    clearData();

}

function displayData(){
    var box ="";
    for(var i=0;i<bookmarkList.length;i++){
        box+=`<tr>
        <td>${i}</td>
        <td>${bookmarkList[i].name}</td>
        <td>
        <a href="https://${bookmarkList[i].website}" target="_blank" >
        <button class="btn text-capitalize btn-warning"> <i class="fa-solid fa-eye"></i> visit</button>
        </a>
        
        </td>
        <td>
          <button onclick="deleteData(${i})" class="btn text-capitalize btn-danger "><i class="fa-regular fa-trash-can"></i> delete</button>
        </td>
      </tr>`
    }
    document.getElementById("tableData").innerHTML=box;
}

function clearData(){
    nameInput.value="";
    websiteInput.value="";
}

function deleteData(index){
    bookmarkList.splice(index,1);
    localStorage.setItem("bookmark",JSON.stringify(bookmarkList));
    displayData()
}

