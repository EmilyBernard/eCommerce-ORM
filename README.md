# eCommerce-ORM
This eCommerce back-end application will enable users to view all categories, products and tags in their reatil company easliy.  Users will also be able to create, update, and delete categories, products, and tags quickly & easily.

## User Story
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Links](#links)
- [Acknowledgements](#acknowledgements)



## Installation
This application uses Express.js and a MySQL database. after cloning the repo, fill in the '.envSample' file to your personal Mysql password where directed, line 3.  Then rename the file to '.env'.
Open the application in the vs terminal, enter 'npm install', then enter 'mysql -u root -p'. You will be prompted to enter your mysql password.  When in the mysql shell, enter 'source db/schema.sql', then enter 'quit' to exit mysql. Next, enter 'npm run seed' in the terminal command line, then 'npm run start' when the seed is complete.  The application will run on port 3001.

## Usage
Opening this application in insomnia, you will be able to use GET to collect and view the categories, products, and tags that already exist in the database. Using POST will enable you to create a new category, new product, or new tag. Be sure to use the correct syntax!
<br>
```
INSOMNIA SYNTAX FOR WALKTHROUGH EXAMPLES

CREATE/UPDATE CATEGORY:
{
    "category_name": "name"
}

CREATE/UPDATE PRODUCT:
    {
      "product_name": "product name",
      "price": 200.00,
      "stock": 3,
      "tagIds": [1, 2, 3, 4]
    }

CREATE/UPDATE TAG:
 {
    "tag_name": "tag name"
  }
```
Using PUT and the correct id# will update a category name, a product & its attributes, or a tag name (using the same syntax above).
Using DELETE will delete a category, product pr tag by it's id#.

## Links
https://drive.google.com/file/d/16_dY53zBgsOJa74eEl55F9CJ4C1fGj8F/view
<br>
https://github.com/EmilyBernard/eCommerce-ORM





## Acknowledgements
<li>All activity files and mini-challenge from week 13
<li>Challenge instructions for Models and Associations
<li>stackoverflow re. oneToMany {through}