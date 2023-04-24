
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    // document.getElementById('deviceready').classList.add('ready');
	//localStorage.userBooks=JSON.stringify([]);
}

let apiUrl="https://www.googleapis.com/books/v1/volumes?q=";

document.addEventListener('show', function(event) {
    ons.ready(function(){
		// Battery
		window.addEventListener("batterystatus", function(status){
			let pages=document.querySelectorAll(".page--material__content");
			if(status.level<20 && !status.isPlugged){
				pages.forEach( page => page.classList.add("dark") );
			}
			if(status.level>=20){
				pages.forEach( page => page.classList.remove("dark") );
			}
		}, false);

        if (event.target.matches('#Add')) {
			let bookId;
			let inpBookTitle=document.querySelector(".inpBookTitle");
			let inpBookPages=document.querySelector(".inpBookPages");
			let inpBookImg=document.querySelector(".inpBookImg");
			let bookImage;
			// Camera
			inpBookImg.onclick=function(){
				let cameraOptions = { 
					quality: 50, 
					targetWidth: 45,
					targetHeight: 60,
					destinationType: Camera.DestinationType.DATA_URL,
					sourceType: Camera.PictureSourceType.CAMERA,
					encodingType: Camera.EncodingType.JPEG
				};
				navigator.camera.getPicture(success, fail, cameraOptions);
				navigator.camera.cleanup();
				function success(imageURI) {
					// console.log(imageURI);
					bookImage="https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg";
					if(imageURI!=null){
						console.log(imageURI);
						bookImage=imageURI.toString();
						//bookImage=bookImage.substring(5);
					}
					else{
						bookImage="https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg";
					}
				}
				function fail (error) {
					console.log(error); 
				}
			}
			// Add book
			document.querySelector(".submitBook").onclick = function() {
				if (localStorage.getItem("userBooks") === null) {
					localStorage.userBooks=JSON.stringify([]); 
				}
				let userBooks=JSON.parse(localStorage.userBooks); 
				console.log(userBooks);
				bookId="";
				if(userBooks.length==0){
					bookId=0;
				}
				else if(userBooks.length>0){
					bookId=parseInt(userBooks[userBooks.length-1]["bookId"])+1;
				}
				// document.querySelector(".bookImg").src ="data:image/jpeg;base64,"+localStorage.bookImg;
				let book={
					"bookId": bookId,
					"bookTitle": inpBookTitle.value,
					"bookPages": inpBookPages.value,
					"bookImage": bookImage
				};
				userBooks.push(book);
				//console.log(userBooks);
				localStorage.userBooks=JSON.stringify(userBooks);
				//console.log(JSON.parse(localStorage.userBooks));
            };
			bookImage="https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg";
        }
		if (event.target.matches('#Home')) {
			let bookItems=document.querySelector(".bookItems");
			bookItems.innerHTML="";
			// Show books
			JSON.parse(localStorage.userBooks).forEach(function(bookItem) {
				let booksrc="";
				if(bookItem.bookImage=="https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"){
					booksrc=bookItem.bookImage;
				}
				else{
					booksrc="data:image/jpeg;base64,"+bookItem.bookImage;
					//booksrc=bookItem.bookImage;
				}
				let listItem=`<ons-list-item id="${bookItem.bookId}" class="bookItem">
					<div class="left">
						<img src="${booksrc}" alt="" class="bookImg">
					</div>
					<div class="center">
						<p class="bookTitle">${bookItem.bookTitle}</p>
					</div>
					<div class="right">
						<ons-button modifier="quiet" class="bookPages">${bookItem.bookPages}</ons-button>
						<ons-icon icon="md-delete" class="list-item__icon delete-icon"></ons-icon>
					</div>
					
				</ons-list-item>`;	
				bookItems.innerHTML+=listItem;
			});
			
			// Update pages
			let bookPagesBtns=document.querySelectorAll(".bookPages");
			bookPagesBtns.forEach(function(btn){
				btn.onclick = function() {
					let userBooks=JSON.parse(localStorage.userBooks);
					console.log(userBooks);
					//console.log(btn.parentElement.parentElement.getAttribute("id"));
					//console.log(userBooks[btn.parentElement.parentElement.getAttribute("id")]);
					let currentId=btn.parentElement.parentElement.getAttribute("id");
					let currentIndex = -1;
					// userBooks.find(function(element, index){
					// 	if(element.bookId==currentId){
					// 		currentIndex=index;
					// 	}
					// });
					userBooks.forEach((book, index) => {
						if(book.bookId==currentId){
							currentIndex=index;
						}
					});
					let currentBook=userBooks[currentIndex];
					ons.notification.prompt('Book Page:', {
						title:"Change Book Page",
						defaultValue: currentBook.bookPages
					}).then(function(pages) {
						if(pages){
							currentBook.bookPages=pages;
						}
						localStorage.userBooks=JSON.stringify(userBooks);
						btn.innerHTML=pages;
					});
				}
			});
			// Delete book row
			let deleteBtns=document.querySelectorAll(".delete-icon");
			deleteBtns.forEach(function(btn){
				btn.onclick=function(){
					let userBooks=JSON.parse(localStorage.userBooks);
					let currentId=btn.parentElement.parentElement.getAttribute("id");
					$("#" + currentId).slideUp(700);
					let currentIndex = -1;
					// userBooks.find(function(element, index){
					// 	if(element.bookId==currentId){
					// 		currentIndex=index;
					// 	}
					// });
					userBooks.forEach((book, index) => {
						if(book.bookId==currentId){
							currentIndex=index;
						}
					});
					userBooks.splice(currentIndex, 1);
					localStorage.userBooks=JSON.stringify(userBooks);
				}
			});
		}


		if(event.target.matches("#Search")){
			let inpSearch=document.querySelector('.inpSearch');
			let searchResults=document.querySelector('.searchResults');
			// Network
			function checkConnection() {
				let networkState = navigator.connection.type;
				console.log(networkState);
				if(networkState=="none"){
					inpSearch.disabled=true;
					searchResults.innerHTML="<h5>You're offline. Turn on your network connection.</h5>";
				}
				else{
					inpSearch.disabled=false;
					searchResults.innerHTML="<h5>No results</h5>";
				}			
			}
			checkConnection();
			// function checkVersion(){
			// 	let version=parseFloat(device.version);
			// 	console.log(version);
			// 	if(version<5){
			// 		inpSearch.disabled=true;
			// 		searchResults.innerHTML="<h5>Device Version is old. Please update to more recent.</h5>";
			// 	}
			// 	else{
			// 		inpSearch.disabled=false;
			// 		searchResults.innerHTML="<h5>No results</h5>";
			// 	}
			// }
			// checkVersion();
			inpSearch.value="";
			document.addEventListener("offline", function(){
				inpSearch.disabled=true;
				inpSearch.value="";
				searchResults.innerHTML="<h5>You're offline. Turn on your network connection.</h5>";
			}, false);
			document.addEventListener("online", function(){
				inpSearch.disabled=false;
				if(!inpSearch.value)
					searchResults.innerHTML="<h5>No results</h5>";
			}, false);
			// Search books
			inpSearch.addEventListener('keyup', function(key) {
				if(key.code=="Enter"){
					let searched=this.value;
					if(searched==="" || searched === null){
						searchResults.innerHTML="<h5>No results</h5>";
					}
					else{
						searchResults.innerHTML="";
						let bookId='', bookTitle='', bookAuthor='', bookImg='';
						console.log(searched);
						$.get(apiUrl+searched, function(res){
							console.log(res);
							res['items'].forEach(function(result){
								bookId=result['id'];
								bookTitle=result['volumeInfo']['title'];
								if(result['volumeInfo']['authors']){
									if((result['volumeInfo']['authors']).length>1)
										bookAuthor=(result['volumeInfo']['authors']).join(", ");
									else bookAuthor=result['volumeInfo']['authors'][0];
								}
								else bookAuthor="";
								if(result['volumeInfo']['imageLinks'])
									bookImg=result['volumeInfo']['imageLinks']['thumbnail'];
								else bookImg="https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg";
								let listItem=`<ons-list-item id="${bookId}" class="bookItem">
									<div class="left">
										<img src="${bookImg}" alt="" class="bookImg">
									</div>
									<div class="center">
										<p class="bookTitle">${bookTitle}</p>
									</div>
									<div class="right">
										<p class="bookTitle">${bookAuthor}</p>
									</div>
								</ons-list-item>`;
								searchResults.innerHTML+=listItem;
							});
						});
					}
				}


			});
		}
		
    });
});		