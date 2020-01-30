# tp-api-rest
## v1
### Cursos
  * **`GET` /api/courses**
    ```Javascript
    query: {
      year: 2020,
      duration: 40
    }
    ```
    
  * **`POST` /api/courses**
    ```Javascript
    body: {
      year: 2020,
      duration: 40,
      subject: "RESTful API's"
    }
    ```
    
  * **`GET` /api/courses/:id**
 
  * **`DELETE` /api/courses/:id**
  
  * **`GET` /api/courses/:id/students**
  
  * **`POST` /api/courses/:id/students**
    ```Javascript
    body: {
      id: 1234
    }
    ```
    
  * **`DELETE` /api/courses/:id/students/:studentId**
  
  * **`GET` /api/courses/:id/students/best**

### Clientes
  * **`GET` /api/clients/:id**
  
  * **`POST` /api/clients**
    ```Javascript
    body: {
      firstName: "John",
      lastName: "Doe",
      dni: "12345678",
      address: "221B Baker St."
    }
    ```
