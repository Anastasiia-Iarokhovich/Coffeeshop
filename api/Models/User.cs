using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
        public string Role { get; set; } // "Admin" or "User"
        
        public Cart Cart { get; set; } = new Cart(); 
        public ICollection<Order> Orders { get; set; } = new Collection<Order>();
    }

    public enum UserRole
    {
        Admin,
        User
    }
}