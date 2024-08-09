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
        public string? Username { get; set; }
        // public string? Email { get; set; }
        // public string Role { get; set; } = "User"; // "Admin" or "User"

        public byte[] PasswordHash { get; set;}
        public byte[] PasswordSalt { get; set;}
        
        //public Cart Cart { get; set; } = new Cart(); 
        //public ICollection<Order> Orders { get; set; } = new Collection<Order>();
    }

}