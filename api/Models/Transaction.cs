using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Transaction
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public Order Order { get; set; } = new Order();
        
        public string TransactionId { get; set; } // ID транзакции от платежного провайдера
        public string PaymentStatus { get; set; } // "Pending", "Completed", "Failed"
        public DateTime TransactionDate { get; set; } = DateTime.Now;
        public decimal Amount { get; set; }
    }
}