# NutriFit API

## NutriFit Cloud Architecture
![architecture drawio (1)](https://github.com/user-attachments/assets/f5c7e42a-9436-4884-8433-fdd42453892b)

## Get Started
Clone `repository` with command: 
```bash
https://github.com/BagusTresna/NutriFit
```
---
**For Backend Folder**

Move to directory `NutriFit` with command:
```sh
cd Nutrifit
```

Install `dependencies` with command:
```sh
npm i
```

Make sure that `app.yaml` file have content like this:
```sh
runtime: nodejs22
service: backend
env: standard
instance_class: F2

automatic_scaling:
  target_cpu_utilization: 0.65
  min_instances: 1
  max_instances: 5
```

Deploy the `server` with command:
```sh
gcloud app deploy
```

---
## API

 *1. Register*

  * method: `POST`
  * endpoint: `/register`
  * body request:
    | Parameter | Type     |
    | :-------- | :------- |
    | `email` | `string` `email` `unique` |
    | `password` | `string` |

    Example: 
    ```json
    {
    "name": "sangga",
    "userName": "sangga123",
    "email": "youyu@gmail.com",
    "password": "securepassword123"
    }
    ```

  * body response:
    ```json
    "status": "success",
    "message": "User added successfully",
    "data": {
        "userId": "edchCTtJyCpQrx3ywH3z"
    }
    ```

 *2. Log In*

  * method: `POST`
  * endpoint: `/users/login`
  * body request:
    | Parameter | Type     |
    | :-------- | :------- |
    | `email` | `string` `email` `unique` |
    | `password` | `string` |

    Example: 
    ```json
    {
      "email": "johndoe@gmail.com",
      "password": "johndoe123"
    }
    ```

  * body response:
    ```json
    "status": "success",
    "message": "User logged in successfully",
    "data": {
        "userId": "OfMiZS833BAkvBhSOxJ0",
        "email": "pejuangkasta@gmail.com",
        "name": "Sangga"
    }
    ```

---
## Cloud Services Used
* Database

![Google Cloud Storage]()
![Cloud SQL]()

* Deployment

![Cloud Run - Small]()

---
