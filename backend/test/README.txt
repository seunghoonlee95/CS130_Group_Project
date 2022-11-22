TODO: Add tests for auth, and firestore tasks and user CRUD operations
Save these in postman collection to auto-run


Postman Tests:

1. Sanity check to make sure react is connected to express backend
Get: localhost:3000/express_backend_test
Response: {
    "express": "YOUR EXPRESS BACKEND IS CONNECTED TO REACT"
}

2. Check the api to get a task by id
Get: localhost:3000/api/tasks/1
Reponse: [
    {
        "id": 1,
        "category": "Tutoring",
        "description": {
            "placeholder": "will make a description object"
        },
        "status": "In Progress",
        "customer": 53948394,
        "tasker": 243434343
    }
]
status is 200

3. Check what happens when invalid task id sent
Get: localhost:3000/api/tasks/-1
Response: {
    "msg": "No task with id of -1"
}
Status is 400

4. Check adding a task to task list
POST: localhost:3000/api/tasks/new
Headers:
Content-Type: application/json
Body:  {
        "taskId": 1,
        "category": "Tutoring",
        "description": "will make a description object",
        "status": "In Progress",
        "customer": 53948394,
        "tasker": 243434343
}

Response:
{"msg":"Added task 1 to task list"}
Status is 200