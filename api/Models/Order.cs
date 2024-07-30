using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User User { get; set; } = new User();	
        
        public DateTime OrderDate { get; set; }  = DateTime.Now;
        public string Status { get; set; } // "Pending", "Processing", "Completed", "Cancelled"
        public decimal TotalAmount { get; set; }
        
        public ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
        public ICollection<Transaction> Transactions { get; set; }
    }
}