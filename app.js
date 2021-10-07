const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = ()=> {
    filterItem.onclick = (selectedItem)=> {
      if(selectedItem.target.classList.contains("item")) {
        filterItem.querySelector(".active").classList.remove("active");
        selectedItem.target.classList.add("active");
        let filterName = selectedItem.target.getAttribute("data-name");
        console.log(filterName);
      }
    }
}