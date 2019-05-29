let menu = document.querySelector(".menu");

function readJSON(path) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
      if (this.status == 200) {
          var file = new File([this.response], 'temp');
          var fileReader = new FileReader();
          fileReader.addEventListener('load', function(){
			   let menuList = JSON.parse(fileReader.result);
			   for (let i = 0; i < menuList.length; i++)
			   {
					let item = document.createElement("div");
					item.className = "item";
					menu.appendChild(item);

					let price = document.createElement("h2");
					price.className = "price";
					price.textContent = `$${menuList[i].price}`;

					let foodName = document.createElement("h2");
					foodName.textContent = menuList[i].name;

					let ingredients = document.createElement("p");
					ingredients.textContent = menuList[i].ingredients;

					item.appendChild(price);
					item.appendChild(foodName);
					item.appendChild(ingredients);

			   }
          });
          fileReader.readAsText(file);
      }
    }
    xhr.send();
}

readJSON("menu.json");
