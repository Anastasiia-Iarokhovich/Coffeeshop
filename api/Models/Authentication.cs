using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Authentication
    {
          public int Id { get; set; }  
        public int UserId { get; set; } 
        public string Token { get; set; } 
        public DateTime ExpiresAt { get; set; } 
    }
}