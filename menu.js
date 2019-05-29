let container = document.querySelector("#container");

function readJSON(path) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
      if (this.status == 200) {
          var file = new File([this.response], 'temp');
          var fileReader = new FileReader();
          fileReader.addEventListener('load', function(){
			   let menu = JSON.parse(fileReader.result);
			   for (let i = 0; i < menu.length; i++)
			   {
					let item = document.createElement("div");
					item.className = "item";
					container.appendChild(item);

					let imageContainer = document.createElement("div");
					imageContainer.className = "imageContainer";

					let image = document.createElement("img");
					image.src = `img/menu/${menu[i].img}.jpg`;
					imageContainer.appendChild(image);

					let menuName = document.createElement("p");
					menuName.textContent = menu[i].name;

					item.appendChild(imageContainer);
					item.appendChild(menuName);

			   }
          });
          fileReader.readAsText(file);
      }
    }
    xhr.send();
}

readJSON("menu.json");
