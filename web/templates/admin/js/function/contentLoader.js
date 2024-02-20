import { menuContent } from "../config/menu.js";

function loadmenuContent(){

    var menuContentContainer = document.getElementById('navigation_link_list')

    for (let cont in menuContent) {
        var menuContentData = menuContent[cont];
        
        var navigationLink = document.createElement('div')
        navigationLink.className = 'navigation_link'
        navigationLink.id = 'navigation_menuContent'
        navigationLink.setAttribute('id-menuContent', cont)
        navigationLink.innerHTML = menuContentData.icon
        navigationLink.addEventListener('click', function(){ openPage(this) })
        menuContentContainer.appendChild(navigationLink)

    }


}



var OPEN_PAGE_ID = 1;
var DEFAULT_PAGE_IG = 1;
function openPage(elementId){
    var pageContainer = document.getElementById('page')    
    var id = elementId.getAttribute('id-menuContent')
    var menuContentData = menuContent[id];
  
    OPEN_PAGE_ID = 0;
    if (id != OPEN_PAGE_ID){
        if (OPEN_PAGE_ID != id){

                if (menuContentData.page in pageList){  
                    console.log(menuContentData.page);
                    openFolderNav(elementId)
                    var pageListData = pageList[menuContentData.page]
                    console.log(pageListData);
                    if (pageListData.onPageRedir == true) {

                        pageContainer.style.display = 'block';
                        $('#page').load(pageListData.index);
                        if (pageListData.index == 'projectlist.html'){
                            setTimeout(() => {
                                projectLoader.loadProjects()
                                console.log("Delayed for 1 second.");
                              }, "100");
                              
                     
                            }
                    }  else {
                        console.log('[0101] 💥PAGE SYSTEM | Stránka (' + menuContentData.page + ') je nastavena na redirect na jinou stránku, který aktuálně není funkční.')
                    }
                } else {
                    console.log('[0102] 💥PAGE SYSTEM | Stránka (' + menuContentData.page + ') nebyla nalezena v configu')   
                }

        } else {
            // Pokud se otevře stejná stránka (OPEN_PAGE_ID == ID)
            

        }
    } else {
        pageContainer.innerHTML = '';
        pageContainer.style.display = 'none';
    }
}

    
