# solo-api-project
This was created during my time as a student at Code Chrysalis.
I created this (exceedingly) barebones API as a way to test manipulating a Postgres DB with Knex.
This is a simple data tracker/manipulator for cycling data

# Current Endpoints
/addActivity
You can add an activity to the database with the following format:
{
    "date": "2021-04-01",
    "distance":10,
    "avg_speed":15,
    "calories":150,
    "top_speed":20
}

/getActivity  
You can retrieve all activities in the database  
OR  
YOu can view a single activity by querying with an activity id as a parameter.  


/getAverageSpeed  
You can calculate and retrieve the average speed of all activities in the database  
OR  
You can set a limit to only view the average speeds of all rides UP TO the selected limit. e.g.) /getAverageSpeed?limit=2 returns the average speed of the first two activities in the database.  

/deleteActivity  
You can delete an activity from the database by querying with an activity id as a parameter. e.g.) /deleteActivity?id=2  

/updateActivity
You can update an activity by querying with an activity id as a parameter, and inputing a partial or full entity into the query body. To update just the distance and top speed of the activity with the id 2, you would query:
/updateActivity/?id=2

and include the following body:
{
  "distance": 15,
   "top_speed":9
}
