using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Interfaces;

namespace api.Models
{
    public class OrderItem : IItem
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public Order Order { get; set; } = new Order();
        
        public int CoffeeId { get; set; }
        public Coffee Coffee { get; set; } = new Coffee();

        public int Quantity { get; set; }
        public decimal Price { get; set; }
    }
}