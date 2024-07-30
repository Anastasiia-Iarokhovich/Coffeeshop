using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;

namespace api.Interfaces
{
    public interface IItem
    {
        int Id { get; set; }
        int CoffeeId { get; set; }
        Coffee Coffee { get; set; }
        int Quantity { get; set; }
        decimal Price { get; set; }
    }
}