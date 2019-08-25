namespace NTG.Models
{
  public class Score
  {
    public int Id { get; set; }
     {
          private const int TOP_SCORE_COUNT = 3;
 
     // Store our scores
     private List<PlayerScore> m_scores;
     // Say you have a Text object in the Hierarchy and drag that text object into this field of the script
     [SerializeField] Text m_topScoreLabel;
 
     void Start() {
         m_scores = new List<PlayerScore>();
         
         // Populate m_scores with some test data
         m_scores.Add(new PlayerScore() { playerName = "Billy", score = 40 });
         m_scores.Add(new PlayerScore() { playerName = "Bob", score = 10 });
         m_scores.Add(new PlayerScore() { playerName = "Joe", score = 20 });
         m_scores.Add(new PlayerScore() { playerName = "Ray", score = 50 });
         
         // Retrieve our scores
         PlayerScore[] top3Scores = GetHighScores(TOP_SCORE_COUNT);
 
         // Print out the top 3 scores - you'll be binding to UI elements and want a known 
         // number of scores, so you may avoid using a loop, however, you must check to be 
         // sure you have that known number of elements, like the following:
 
         if (top3Scores.Length == TOP_SCORE_COUNT)
         {
             Debug.Log("Top scores:");
             if (m_topScoreLabel)
                 m_topScoreLabel.text = "First place: " + top3Scores[0].playerName + ", " + top3Scores[0].score  + " points";
         
             Debug.Log("First place: " + top3Scores[0].playerName + ", " + top3Scores[0].score  + " points");
             Debug.Log("Second place: " + top3Scores[1].playerName + ", " + top3Scores[1].score + " points");
             Debug.Log("Third place: " + top3Scores[2].playerName + ", " + top3Scores[2].score  + " points");
         }
 
         // Output should be:
         // Top Scores:
         // First place: Ray, 50 points
         // Second place: Billy, 40 points
         // Third place: Joe, 20 points
     }

     {
         return m_scores.OrderBy(ps => ps.score).Take(topCount).ToArray();
     }
 }
 
 // Structs to the rescue:
 public struct PlayerScore
 {
     public int    score;
     public string playerName;  