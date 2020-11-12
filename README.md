<p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" width="400"></p>
<p align="center">
</p>

## How To Work 


1-Edit .env File:
------------------  
1-open './src/config/config.env'

2-edit the data without any (' ' or " ") which should be suitable to your pc

3-Open Your Terminal

4-write "npm install" for install the modules which needed in the project

5-write "npm run dev" or "npm run start" to start the server
----------------------------------------------------------------------
Insert Data In Table:
-----------------------
1-open postman 

2-select type of route :post

3-put url :
    1-localhost:port/api/coffee-machines/seeds - for insert data in coffee machines
    2-localhost:port/api/coffee-pods/seeds     -  for insert data in coffee pods

Note: i can use the seeder in this case put i selected to make endpoint for store data
-----------------------------------------------------------------------------------
If You Want To filter Data:
----------------------------
    1-open postman and open new tab

For Coffee Machines:
---------------------
    url : localhost:3000/api/coffee-machines
    queryString for filter:
    -------------------------
        -product_model
        -product_type
    Ex:localhost:3000/api/coffee-machines?product_type=small machine&product_model=base model


For Coffee Pods:
---------------------
    url : localhost:3000/api/coffee-pods
    queryString for filter:
    -------------------------
        -coffee_flavor
        -product_type
        -pack_size
    Ex:localhost:3000/api/coffee-pods?product_type=espresso pod&coffee_flavor=caramel
---------------------------------------------------------------------------------------------------
Note : I Made Response Two Types : type array and type array of objects because i didn't understand what the response which you need
            
                                        Thanks    


