// Exercise 1 : Users

    // Retrieve the div and console.log it
    let myDiv = document.getElementById('container');
    // Change the name “Pete” to “Richard”
    document.getElementById("item").textContent = "Richard";
    // Change each first name of the two <ul>'s to your name.
    const itemsLists = document.querySelectorAll(".list");
    itemsLists.forEach(list =>list.firstElementChild.textContent ="Yapeaud");
    // Delete the <li> that contains the text node “Sarah”.
    const erase = document.getElementById('item1');
    erase.remove();
    // Add a class called student_list to both of the <ul>'s.
    itemsLists.forEach(list =>list.classList.add('student_list'));
    // Add the classes university and attendance to the first <ul>.
    const firstItemUl = document.querySelector('ul.list.student_list');
    firstItemUl.classList.add('university','attendance');

// Exercise 2 : Users And Style
    // Add a “light blue” background color and some padding to the <div>.
     let groundColor = 'lightBlue';
     const bgColors = document.getElementById('bgColor').style.backgroundColor = groundColor;
     document.getElementById('bgColor').style.padding = '50px';
    // Do not display the <li> that contains the text node “John”.
    document.querySelector('li.hide').style.display = "none";
    // Add a border to the <li> that contains the text node “Pete”.
    document.querySelector('li.boundary').style.border = '1px solid black';
    // Change the font size of the whole body.
    document.getElementById('contents').style.fontSize = '2em';
    // If the background color of the div is “light blue”, 
    // alert “Hello x and y” (x and y are the users in the div).
     groundColor = bgColors? alert('Hello John and Pete'): alert('Nothing'); 
    
// Exercise 3 : Change The Navbar
    // In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, 
    // using the setAttribute method.
    document.getElementById('navBar').setAttribute("id", "socialNetworkNavigation");
    // First, create a new <li> tag (use the createElement method).
    const listElements = document.createElement('li');
    // Create a new text node with “Logout” as its specified text. 
    const theElementLink = document.createElement('a');
    theElementLink.setAttribute("href","#");
    const textNode = document.createTextNode("Logout");
    // Finally, append this updated list node to the unordered 
    // list (<ul>), using the appendChild method.
    theElementLink.appendChild(textNode);
    listElements.appendChild(theElementLink);
    document.getElementById('notOrder').appendChild(listElements);
    // Use the firstElementChild and the lastElementChild properties to retrieve 
    // the first and last <li> elements from their parent element (<ul>). 
    // Display the text of each link. (Hint: use the textContent property).
    let firstText = document.getElementById("notOrder").firstElementChild.textContent;
    document.getElementById("firstChild").innerHTML = firstText;

    let lastText = document.getElementById("notOrder").lastElementChild.textContent;
    document.getElementById("lastChild").innerHTML = lastText;

// Exercise 4 : My Book List
    // Create an array called allBooks. 
    // This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
    // title,
    // author,
    // image : a url,
    // alreadyRead : which is a boolean (true or false).
     const allBooks = [
           {
            title: "Les soleils des indépendances",
            author: "Ahmadou Kourouma",
            image: 'https://m.media-amazon.com/images/I/41f1CNjKfuL._SX301_BO1,204,203,200_.jpg',
            alreadyRead: true
            },
            {
                title: "Les soleils des indépendances",
                author: " Djibril Tamsir Niane",
                image: 'https://lecactussahelien.files.wordpress.com/2017/03/soundjata-ou-l-epopee-mandingue.jpg',
                alreadyRead: false
                }
            
     ];
    
const listBooks = document.querySelector('.listBooks');

// Create the table element
const table = document.createElement('table');

// Add the table to the div
listBooks.appendChild(table);

allBooks.forEach(book => {
    // Create a row for the book
    const row = document.createElement('tr');

    // Add the title and author cells to the row
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td>`;

    // Create the image cell and add it to the row
    const imgCell = document.createElement('td');
    const img = document.createElement('img');
    img.src = book.image;
    img.style.width = '100px';
    imgCell.appendChild(img);
    row.appendChild(imgCell);

    // If the book has been already read, set the text color to red
    if (book.alreadyRead) {
        row.style.color = 'red';
    }

    // Add the row to the table
    table.appendChild(row);
});
