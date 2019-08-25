using Microsoft.EntityFrameworkCore;

namespace NTG.Models
{

  public class GameDbContext : DbContext
  {
    public GameDbContext(DbContextOptions<GameDbContext> options) : base(options) { }

    public DbSet<Score> Scores { get; set; }
  }
}