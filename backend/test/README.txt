TODO: Add tests for auth, and firestore tasks and user CRUD operations
Save these in postman collection to auto-run


Postman Tests:


1. Sanity check to make sure react is connected to express backend
Get: localhost:3000/express_backend_test
Response: {
    "express": "YOUR EXPRESS BACKEND IS CONNECTED TO REACT"
}
-------------------------------------------------------------
Task Tests

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

5. Get Task Counter 
GET: localhost:3000/api/tasks/getTaskCounter
Response:
{
    "key": 2 //NOTE: As long as this is a positive integer, this tests pass
}

5. Increment Task Counter
POST: localhost:3000/api/tasks/incrementTaskCounter
Response:
{
    "msg": "Success"
}

6. Update Task (Valid) //key = 0 is testing Task
POST: localhost:3000/api/tasks/updateTask
Body: {
      "key": 0,
      "customername": "Alice Liddell",
      "category": "Tutoring",
      "price": "$10/hr",
      "description": "Looking for someone to help me with my MATH111 HW.",
      "timelocation": "10/05/2022 14:00  Boelter 4242",
      "status": "Open",
      "taskId": "tid1"
}
Response:
{
    "msg": "Success"
}

7. Update Task (Invalid) //key = 999999 is over current
POST: localhost:3000/api/tasks/updateTask
Body: {
      "key": 999999,
      "customername": "Alice Liddell",
      "category": "Tutoring",
      "price": "$10/hr",
      "description": "Looking for someone to help me with my MATH111 HW.",
      "timelocation": "10/05/2022 14:00  Boelter 4242",
      "status": "Open",
      "taskId": "tid1"
}
Response: 
{
    "error": "Task with key: 999999 has not been created"
}

8. New Task (no key is sent, backend assigns next available key automatically and returns this key)
POST: localhost:3000/api/tasks/new
Body: {
      "customername": "Wednesday Addams",
      "category": "Swipe Trade",
      "price": "$8",
      "description": "Selling two dining hall swipes for $8 each.",
      "timelocation": "10/13/2022 13:30  Anywhere on campus",
      "status": "In Progress",
      "taskId": "tid2"
}
Response:
{
    "key": 7 //NOTE: As long as this key is the largest, this is valid.
}

9. Get All tasks
GET: localhost:3000/api/tasks/all
Response: {
    "tasks": [
        {
            "key": 0,
            "customername": "Alice Liddell",
            "timelocation": "10/05/2022 14:00  Boelter 4242",
            "taskId": "tid1",
            "category": "Tutoring",
            "price": "$10/hr",
            "status": "Open",
            "description": "Looking for someone to help me with my MATH111 HW."
        },
        {
            "description": "Looking for someone to help me with my MATH111 HW.",
            "category": "Tutoring",
            "customername": "Devin Yerasi",
            "timelocation": "10/05/2022 14:00  Boelter 4242",
            "taskId": "tid1",
            "status": "Open",
            "price": "$10/hr",
            "key": 1
        }
    ]
}
NOTE: as long as tasks is a list of tasks, this call works

10. Get Task by Task key (Valid)
GET: localhost:3000/api/tasks/0 (0 can be repleaced with any valid key)
Response: {
    "customername": "Alice Liddell",
    "taskId": "tid1",
    "key": 0,
    "description": "Looking for someone to help me with my MATH111 HW.",
    "price": "$10/hr",
    "status": "Open",
    "timelocation": "10/05/2022 14:00  Boelter 4242",
    "category": "Tutoring"
}

11. Get Task by Task Key (Invalid Out of Range Key)
GET: localhost:3000/api/tasks/99999
Response: {
    "error": "Task with key 99999 has not been created"
}

-------------------------------------------------------------
Auth Tests

-------------------------------------------------------------

-------------------------------------------------------------
-------------------------------------------------------------
