const users = [
    {
        userId : 5,
        post : "Sezer Post 1"
    },
    {
        userId : 5,
        post : "Sezer Post 2"
    },
    {
        userId : 5,
        post : "Sezer Post 3"
    },
    {
        userId : 6,
        post : "Seda Post 1"
    },
    {
        userId : 7,
        post : "Kevser Post 1"
    },
]

//user id
//post by user id
//Senkorna çevireceğiz
//call-back,promise,async await
function getUserId(){
    setTimeout(() => {
        //Servise gittik ve cevabı aldık
        return 5;
    }, 1000);
}

function getPostByUserId(userId){
    //Gerçek bir rest api'ya istek atacaksınız.
    setTimeout(() => {
        users.forEach((user)=>{
            if(user.userId===userId){
                console.log(user.post);
            }
        })
    }, 500);
}

let userId = getUserId();
getPostByUserId(userId);