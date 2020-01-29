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
    
  * **`DELETE` /api/courses/:id**
  
  * **`GET` /api/courses/:id/students**
  
  * **`GET` /api/courses/:id/students/best**
  
  * **`PATCH` /api/courses/:id/students**
    ```Javascript
    body: {
      students: [...ids]
    }
    ```
