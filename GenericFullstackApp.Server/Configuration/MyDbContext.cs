using GenericFullstackApp.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace GenericFullstackApp.Server.Configuration
{
    public class MyDbContext(DbContextOptions<MyDbContext> options) : DbContext(options)
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Company> Companies { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Company>().HasMany(c => c.Users).WithOne(u => u.Company).HasForeignKey(u => u.CompanyId);
        }
    }
}
