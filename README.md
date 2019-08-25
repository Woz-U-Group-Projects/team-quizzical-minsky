### to do

- fill in properties in model/Score.cs
- DbContext is already created model/GameDbContext.cs
- create a migration `dotnet ef migrations add ScoreModel`
- update database `dotnet ef database update`
- add a controller for scoring (ScoreController.cs)
- add a get route in the controller for scoring (read scores)
- add a post route in the controller for scoring (add score)
- connect front-end games to scoring post route (submit scores after game done)
- make a page that will read from the scoring get route and display the most recent 10 game results
