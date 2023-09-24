//FETCH API 

//callback - promise

function getStudents(url){
    fetch(url)
    .then((response)=> response.json())
    .then((data)=>console.log(data))
    .catch((err)=>{console.log(err)})
}
getStudents("students.json");