using Microsoft.EntityFrameworkCore;
using ReactAppPovilasProject.Server.Controllers;
using ReactAppPovilasProject.Server.Data;
using ReactAppPovilasProject.Server.Models;

namespace ReactAppPovilasProject.Server.Data
{
    public class MyDbContext : DbContext
    {


        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>()
                .Property(b => b.Price)
                .HasColumnType("decimal(18, 2)");
        }
    }
}


