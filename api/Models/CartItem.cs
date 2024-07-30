using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Interfaces;

namespace api.Models
{
    public class CartItem : IItem
    {
        public int Id { get; set; }
        public int CartId { get; set; }
        public Cart Cart { get; set; } = new Cart();
        
        public int CoffeeId { get; set; }
        public Coffee Coffee { get; set; } = new Coffee();

        public int Quantity { get; set; }
        public decimal Price { get; set; }
        
    }
}