# BrewApps-Book-Manager
Restful Apis for managing books

1) Api EndPoints and their usage:

a) /addNewBook = to add a new Book
Sample Request Body:
{
    "title": "The Enchanted Garden",
    "author" : "Jane Smith",
    "summary" : "In the hidden garden at Willowbrook Manor, young Emma discovers a magical world filled with talking animals and endless adventures. 
                 The Enchanted Garden is a heartwarming story of friendship and imagination, where the extraordinary becomes ordinary, and the ordinary 
                 becomes extraordinary."
}

b) /listBooks = Lists all the books stored in the database, providing bookId, title, and author information.

c) /listBookById/:bookId = list all details for the specific book when bookId is provided in the params.
returns all the data for that specific book including the summary.

d) /updateBookDetails = update details of the specific book. "bookId" is the necessary field to update the book details 
Sample Request Body :
{
    "bookId":"81d71fea-f45f-4375-9aa7-9568730fb215",
    "title":"Enchanted Garden"
}

e) /deleteBookDetails = delete details for the specific book when "bookId" is passed as key in the query params and the value is the specific id for that book.


2) Instructions to setup the application and run the application locally

https://github.com/ajha5088/BrewApps-Book-Manager , visit this link 
clone it in local , at root level set up a .env file with 2 keys in that file :
a) PORT 
b) DB_URL 

In the terminal do "npm i"
and then "npm start"

this will start the server in local.


3) Deployment 

The code is deployed in aws an ec2 instance is created for the deployment.
Public Ip : 3.110.196.208
PORT : 3000
The connection is not secured for now.
Base Url : http://3.110.196.208:3000/
Sample Url : http://3.110.196.208:3000/listBooks = this will list down all the books present.
