//*selecting side navbar,menu icon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
}
)

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

//*product search functionality

var productcontainer = document.getElementById("product-container")

var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")
console.log(productlist)


search.addEventListener("keyup", function () {
    var eneteredvalue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count = count + 1) {
        var productname = productlist[count].querySelector("p").textContent


        if (productname.toUpperCase().indexOf(eneteredvalue) < 0) 
        {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }

})
