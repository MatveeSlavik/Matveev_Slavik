const addBtn = document.querySelector('.add');
const userContainer = document.querySelector('.user-container');
const deleteBtn =document.querySelector('.remove');



let users = [
    {
        firstName: 'Card Name',
        id: getRandomId(),
    }
];

addBtn.addEventListener('click', ()=>{
    users.push(getRandomUser())
    console.log(users);
    userRender();
})
function deleteUser(userId) {
    users = users.filter(el => el.id !== userId);
    userRender();
}
userRender();

function userRender() {
    let result = '';

    for (let i = 0; i < users.length; i++) {
        result += `<div class="user-card">
                     <div class="gray"></div>
                     <img class="img" src="https://random.imagecdn.app/500/500")>
                   <div class="div-Card">
                        <p class="Card">Card<br><span class="name">Name</span>
                   </div> 
                     <div class="div-card"><span class="description"> card<br>description</span>
                      </div>
                        <div class="s-prjam"></div>
                          <div class="div-urn">  
                              
                              <div class="vertical-line"></div>
                              <div class="vertical-line1"></div>
                              <div class="square"></div>
                              <div class="square-ruchka"></div>
                              <div class="horizont-line"></div>
                              <button class="btn remove" onclick="deleteUser(${users[i].id})"></button>
                          </div>        
             </div>`
    }
    userContainer.innerHTML = result;
}

function getRandomId() {
    return Math.floor(Math.random() * 1000000);
}

function getRandomUser() {
    const names = ['Card Name', 'Card Name', 'Card Name', 'Card Name'];

    return {
        firstName: names[Math.floor(Math.random() * names.length -1) + 1],
        id: getRandomId(),
    }
}